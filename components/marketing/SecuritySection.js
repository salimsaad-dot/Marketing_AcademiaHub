import { LockIcon, ShieldIcon, KeyIcon, DatabaseIcon, ClipboardCheckIcon } from "./icons";
import Reveal from "./Reveal";

// Every item here is a real, already-shipped and verified security measure
// — not an aspirational checklist. See the security-hardening history:
// account lockout, cookie-based JWT, RBAC, upload validation, password
// policy, session revocation, and a real audit trail are all live.
const MEASURES = [
  { label: "Account lockout", copy: "Repeated failed logins temporarily lock an account, blocking brute-force attempts.", Icon: LockIcon },
  { label: "Role-based access", copy: "Every one of the five roles can only reach the data and actions its role permits.", Icon: ShieldIcon },
  { label: "Secure sessions", copy: "Authentication tokens live in an httpOnly cookie, never exposed to page scripts.", Icon: KeyIcon },
  { label: "Protected data", copy: "Uploaded files are validated against their real content, not just a claimed file type.", Icon: DatabaseIcon },
  { label: "Audit trail", copy: "Grade changes and payments are logged, with a real viewer for administrators.", Icon: ClipboardCheckIcon },
];

export default function SecuritySection() {
  return (
    <section id="security" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Built with security in mind.
            </h2>
            <p className="mt-3 text-slate">Real, implemented measures — not a marketing checklist.</p>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {MEASURES.map(({ label, copy, Icon }) => (
            <div
              key={label}
              className="group rounded-xl border border-border bg-card p-5 shadow-[var(--shadow)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-wash text-teal transition-transform duration-200 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold text-ink">{label}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-quiet">{copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
