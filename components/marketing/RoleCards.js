import { ShieldIcon, TeacherIcon, StudentIcon, ParentIcon, AccountantIcon } from "./icons";
import Reveal from "./Reveal";

const ROLES = [
  { label: "Administrator", copy: "Manage the entire school — enrollment, staff, classes and reporting, from one place.", Icon: ShieldIcon },
  { label: "Teachers", copy: "Teach, assess and monitor progress with Gradebook, Attendance, Assignments and AI-generated quizzes.", Icon: TeacherIcon },
  { label: "Students", copy: "Learn, submit assignments, and practice weak topics with AI-generated quizzes any time.", Icon: StudentIcon },
  { label: "Parents", copy: "Stay connected to your child's education — grades, attendance, invoices and messages.", Icon: ParentIcon },
  { label: "Accounts", copy: "Manage fees, invoices, payments and financial reporting for the whole school.", Icon: AccountantIcon },
];

export default function RoleCards() {
  return (
    <section id="features" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              One Platform. Every Role.
            </h2>
            <p className="mt-3 text-slate">
              Powerful tools designed for everyone in your school ecosystem.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ROLES.map(({ label, copy, Icon }) => (
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
