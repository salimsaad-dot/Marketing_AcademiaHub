// In production this is a relative path ("/api"), proxied same-origin to
// the Render backend by the Vercel rewrite in next.config.mjs (needed so
// Safari's ITP doesn't block the cross-site auth cookie). Locally it's
// still the direct absolute backend URL (http://localhost:5000/api) —
// no proxy needed there since both dev servers already share the
// "localhost" registrable domain.
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Absolute backend origin, for building URLs to static assets it serves
// directly (e.g. /uploads/students/...) — those aren't proxied by the
// rewrite above, so this always has to point straight at the real backend.
// Falls back to deriving it from API_URL when NEXT_PUBLIC_API_ORIGIN isn't
// set (local dev, where API_URL is already absolute).
export const API_ORIGIN =
  process.env.NEXT_PUBLIC_API_ORIGIN || API_URL.replace(/\/api\/?$/, "");

// Endpoints where a 401 is an EXPECTED, normal outcome (not logged in yet,
// wrong password, or logout's own fire-and-forget cookie-clear) — these
// must never trigger the global session-expired redirect below, or a
// fresh visitor landing on /login would immediately get bounced through
// its own "session expired" flow from /auth/me's very first check.
// /auth/me/password belongs here too: changeMyPassword (authController.js)
// returns 401 "Current password is incorrect" for a simple typo on the
// Settings page — without this exclusion, a mistyped current password
// would force-log the user out mid-form with a misleading "session
// expired" banner instead of just showing the real validation error.
const AUTH_PATHS_EXCLUDED_FROM_EXPIRY_REDIRECT = new Set(["/auth/login", "/auth/me", "/auth/me/password", "/auth/logout"]);

// Every other 401 means: this request required a valid session and didn't
// have one — the token expired, the account was deactivated, or
// token_version was bumped elsewhere (password change, admin reset).
// There's no sliding/inactivity renewal (see authController.js — the JWT
// is a fixed 24h from login), so this is the only place that notices a
// session died mid-use; nothing else in the app watches for it. Dispatched
// as a window event rather than called directly so this framework-agnostic
// module doesn't need to import React/AuthContext (which itself imports
// this file — a direct call would be a circular import).
function notifyIfSessionExpired(path, status) {
  if (status !== 401) return;
  if (AUTH_PATHS_EXCLUDED_FROM_EXPIRY_REDIRECT.has(path)) return;
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("academiahub:session-expired"));
  }
}

// Thin fetch wrapper: normalizes error handling so callers just get back
// parsed JSON or a thrown Error. Auth flows entirely through the httpOnly
// cookie the backend sets on login (`credentials: "include"`) — there's no
// Bearer header to attach anymore, and no token this code ever sees or
// could leak. `token` is still accepted as a param (every call site across
// the app passes one) but is otherwise unused now; harmless to leave rather
// than touch every caller for a pure rename. `body` as a FormData instance
// (file uploads) is sent as-is, without a Content-Type header — the browser
// sets the multipart boundary itself.
export async function apiRequest(path, { method = "GET", body } = {}) {
  const isFormData = typeof FormData !== "undefined" && body instanceof FormData;
  const headers = {};
  if (!isFormData) headers["Content-Type"] = "application/json";

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    credentials: "include",
    body: body ? (isFormData ? body : JSON.stringify(body)) : undefined,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    notifyIfSessionExpired(path, res.status);
    throw new Error(data.message || "Something went wrong. Please try again.");
  }

  return data;
}

// For endpoints that return a binary file (PDF downloads) instead of JSON.
// Triggers a browser download by creating a temporary object URL. Same
// cookie-based auth as apiRequest — no header to attach.
export async function downloadFile(path, { filename } = {}) {
  const res = await fetch(`${API_URL}${path}`, { credentials: "include" });

  if (!res.ok) {
    notifyIfSessionExpired(path, res.status);
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || "Something went wrong. Please try again.");
  }

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename || "download";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
