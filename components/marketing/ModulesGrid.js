import { BookIcon, ClockIcon, StudentIcon, CoinsIcon, MessageIcon, TrendingUpIcon, UsersIcon, CalendarIcon, LockIcon } from "./icons";
import Reveal from "./Reveal";

// 9 real modules — every one of these exists and is shipped. The
// reference mockup this page was based on had a "Library Management"
// card, which is not a real Academia Hub feature (no book/library
// tracking exists anywhere in this system); swapped for Timetable
// Management, which is real and substantial (app/dashboard/timetable
// full admin CRUD + role-gated views). "Staff Management" (not "Human
// Resource" — matches this app's own terminology, lib/navItems.js calls
// it "Staff") copy is trimmed to what's actually tracked: records, roles,
// salary, department — not leave or performance reviews, which the
// mockup's "Human Resource" card claimed but this system doesn't have.
// Finance & Accounts copy also had "expenses" dropped after a later
// Financial Intelligence audit confirmed no expense-tracking feature
// exists anywhere in this system — caught in the same session, fixed
// immediately rather than left inconsistent with reality.
const MODULES = [
  { label: "Academic Management", copy: "Manage classes, subjects, timetables, lesson plans, assignments and grades.", Icon: BookIcon },
  { label: "Attendance Management", copy: "Take, monitor and analyze attendance across students, staff and classes.", Icon: ClockIcon },
  { label: "Student Management", copy: "Maintain student records, profiles, admissions and academic history.", Icon: StudentIcon },
  { label: "Finance & Accounts", copy: "Manage fee structures, invoices, payments and financial reports.", Icon: CoinsIcon },
  { label: "Communication", copy: "Send messages, announcements and stay connected with your school community.", Icon: MessageIcon },
  { label: "Reports & Analytics", copy: "Get real-time insights and generate detailed reports effortlessly.", Icon: TrendingUpIcon },
  { label: "Staff Management", copy: "Manage staff records, roles, departments and salaries.", Icon: UsersIcon },
  { label: "Timetable Management", copy: "Build and manage weekly class timetables across every grade.", Icon: CalendarIcon },
  { label: "System & Security", copy: "Role-based access, secure login, protected data and audit trails.", Icon: LockIcon },
];

export default function ModulesGrid() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Powerful Modules. Seamless Experience.
            </h2>
            <p className="mt-3 text-slate">Explore the core modules that power your school.</p>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map(({ label, copy, Icon }) => (
            <div
              key={label}
              className="group rounded-xl border border-border bg-card p-5 shadow-[var(--shadow)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-wash text-gold transition-transform duration-200 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">{label}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-quiet">{copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
