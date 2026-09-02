"use client";

import { useEffect, useState } from "react";

// Shared with the Settings "Appearance" panel — one source of truth for the
// theme so the topbar toggle and the settings page can never disagree.
export function useTheme() {
  const [theme, setThemeState] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", initial);
    setThemeState(initial);
  }, []);

  function setTheme(next) {
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setThemeState(next);
  }

  return { theme, setTheme, toggle: () => setTheme(theme === "dark" ? "light" : "dark") };
}

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light/dark theme"
      className="flex h-9 w-9 items-center justify-center rounded-full text-slate-quiet transition-colors hover:bg-border/40 hover:text-gold"
    >
      {theme === "dark" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )}
    </button>
  );
}
