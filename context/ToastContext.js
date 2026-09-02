"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

const ToastContext = createContext(null);

const EXIT_DURATION = 200;

function iconProps(className) {
  return {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `flex-shrink-0 ${className || ""}`,
  };
}

function CheckCircleIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function XCircleIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  );
}

function AlertTriangleIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  );
}

function InfoCircleIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

const TYPE_STYLES = {
  success: { border: "border-l-success", icon: "text-success", bar: "bg-success", Icon: CheckCircleIcon, role: "status", live: "polite" },
  error: { border: "border-l-danger", icon: "text-danger", bar: "bg-danger", Icon: XCircleIcon, role: "alert", live: "assertive" },
  warning: { border: "border-l-warning", icon: "text-warning", bar: "bg-warning", Icon: AlertTriangleIcon, role: "alert", live: "assertive" },
  info: { border: "border-l-teal", icon: "text-teal", bar: "bg-teal", Icon: InfoCircleIcon, role: "status", live: "polite" },
};

function ToastItem({ toast, onDismiss, onPause, onResume }) {
  const style = TYPE_STYLES[toast.type];
  const Icon = style.Icon;

  return (
    <div
      role={style.role}
      aria-live={style.live}
      onMouseEnter={onPause}
      onMouseLeave={onResume}
      className={`toast-item relative overflow-hidden rounded-xl border border-border border-l-[3px] ${style.border} bg-card p-4 shadow-[var(--shadow-hover)] ${
        toast.removing ? "toast-exit" : "toast-enter"
      }`}
    >
      <div className="flex gap-3">
        <Icon className={`mt-0.5 ${style.icon}`} />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-ink">{toast.title}</p>
          {toast.message && <p className="mt-0.5 text-[13px] leading-snug text-slate">{toast.message}</p>}
          {toast.action && (
            <button
              onClick={() => {
                toast.action.onClick();
                onDismiss();
              }}
              className={`mt-2 text-[13px] font-semibold ${style.icon} hover:underline`}
            >
              {toast.action.label}
            </button>
          )}
        </div>
        <button onClick={onDismiss} aria-label="Dismiss" className="flex-shrink-0 text-slate-quiet hover:text-ink">
          <CloseIcon />
        </button>
      </div>
      {!toast.removing && (
        <div
          className={`toast-progress absolute bottom-0 left-0 h-[2px] ${style.bar}`}
          style={{ animationDuration: `${toast.duration}ms` }}
        />
      )}
    </div>
  );
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timers = useRef(new Map());

  const dismiss = useCallback((id) => {
    setToasts((current) => current.map((t) => (t.id === id ? { ...t, removing: true } : t)));
    const entry = timers.current.get(id);
    if (entry) {
      clearTimeout(entry.timeoutId);
      timers.current.delete(id);
    }
    setTimeout(() => {
      setToasts((current) => current.filter((t) => t.id !== id));
    }, EXIT_DURATION);
  }, []);

  const show = useCallback(
    (type, title, message, options = {}) => {
      const id = Date.now() + Math.random();
      const duration = options.duration ?? 4000;
      setToasts((current) => [{ id, type, title, message, duration, action: options.action, removing: false }, ...current]);
      timers.current.set(id, { timeoutId: setTimeout(() => dismiss(id), duration), remaining: duration, startedAt: Date.now() });
      return id;
    },
    [dismiss]
  );

  const pause = useCallback((id) => {
    const entry = timers.current.get(id);
    if (!entry) return;
    clearTimeout(entry.timeoutId);
    entry.remaining -= Date.now() - entry.startedAt;
  }, []);

  const resume = useCallback(
    (id) => {
      const entry = timers.current.get(id);
      if (!entry) return;
      entry.startedAt = Date.now();
      entry.timeoutId = setTimeout(() => dismiss(id), Math.max(entry.remaining, 0));
    },
    [dismiss]
  );

  const api = useMemo(
    () => ({
      success: (title, message, options) => show("success", title, message, options),
      error: (title, message, options) => show("error", title, message, options),
      warning: (title, message, options) => show("warning", title, message, options),
      info: (title, message, options) => show("info", title, message, options),
    }),
    [show]
  );

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div className="pointer-events-none fixed top-6 right-6 z-[100] flex w-[360px] max-w-[calc(100vw-2rem)] flex-col gap-2 max-sm:inset-x-4 max-sm:top-4 max-sm:w-auto">
        {toasts.map((t) => (
          <div key={t.id} className="pointer-events-auto">
            <ToastItem toast={t} onDismiss={() => dismiss(t.id)} onPause={() => pause(t.id)} onResume={() => resume(t.id)} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
}
