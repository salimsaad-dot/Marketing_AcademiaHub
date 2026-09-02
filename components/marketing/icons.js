// Hand-authored inline SVGs, matching this app's one and only icon
// convention (viewBox 0 0 24 24, stroke-based, no icon library, no emoji —
// see DashboardShell.js's NAV_ICONS / app/login/page.js's ROLE_ICONS). The
// 5 role icons here are the exact same path data already duplicated once
// for the login page, kept in sync rather than redrawn a third time.

function iconProps(className) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `flex-shrink-0 ${className || ""}`,
  };
}

export function ShieldIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M12 2 3 6v6c0 5 3.8 8.4 9 10 5.2-1.6 9-5 9-10V6z" />
    </svg>
  );
}
export function TeacherIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
export function ParentIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="12" cy="8" r="4" />
      <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
    </svg>
  );
}
export function StudentIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
    </svg>
  );
}
export function AccountantIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

export function ArrowRightIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
export function SparkleIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </svg>
  );
}
export function CheckIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
export function TrendingUpIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M17 7h4v4" />
    </svg>
  );
}
export function ClipboardCheckIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <rect x="4" y="4" width="16" height="18" rx="2" />
      <path d="M9 2h6v4H9z" />
      <path d="M9 13l2 2 4-4" />
    </svg>
  );
}
export function UsersIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="9" cy="8" r="4" />
      <path d="M2 21v-2a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v2" />
      <circle cx="18" cy="8" r="3" />
      <path d="M22 21v-2a5 5 0 0 0-3-4.6" />
    </svg>
  );
}
export function CoinsIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <ellipse cx="9" cy="6" rx="7" ry="3" />
      <path d="M2 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M2 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
      <path d="M16 9.5c3 .3 6 1.3 6 2.5s-3 2.2-6 2.5" />
    </svg>
  );
}
export function MessageIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
export function CalendarIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
export function BookIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
export function FileTextIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M8 13h8M8 17h8M8 9h2" />
    </svg>
  );
}
export function ReceiptIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M4 2h16v20l-3-2-3 2-2-2-2 2-3-2-3 2Z" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </svg>
  );
}
export function ClockIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
export function LockIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
export function KeyIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <circle cx="8" cy="15" r="4" />
      <path d="M10.5 12.5 20 3M17 6l3 3M14 9l2 2" />
    </svg>
  );
}
export function DatabaseIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}
export function PhoneIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
export function MailIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7 10-7" />
    </svg>
  );
}
export function MapPinIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
export function EyeIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
export function SchoolIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M3 21h18M4 21V10l8-5 8 5v11" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}
export function WarningIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M12 3 2 20h20L12 3z" />
      <path d="M12 10v4M12 17h.01" />
    </svg>
  );
}
export function EyeOffIcon({ className }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export const ROLE_ICONS = [
  { label: "Administrator", Icon: ShieldIcon },
  { label: "Teacher", Icon: TeacherIcon },
  { label: "Student", Icon: StudentIcon },
  { label: "Parent", Icon: ParentIcon },
  { label: "Accountant", Icon: AccountantIcon },
];
