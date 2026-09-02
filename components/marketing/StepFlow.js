import { ClipboardCheckIcon, TeacherIcon, StudentIcon, DatabaseIcon, SparkleIcon, CheckIcon } from "./icons";
import Reveal from "./Reveal";

// A genuinely accurate description of the real product flow — not
// aspirational copy. Kept close to the reference mockup's own wording
// since it already matches reality: enrollment/setup, then teaching and
// attendance, then student-side engagement, then data aggregation, then
// the real Intelligence Engine, then teacher/admin action.
const STEPS = [
  { n: "01", label: "Set Up Your School", copy: "Add your school details, academic structure, classes and users.", Icon: ClipboardCheckIcon },
  { n: "02", label: "Manage & Teach", copy: "Teachers plan lessons, take attendance, create assignments and assessments.", Icon: TeacherIcon },
  { n: "03", label: "Students Engage", copy: "Students learn, complete assignments, take quizzes and receive feedback.", Icon: StudentIcon },
  { n: "04", label: "Data Comes Together", copy: "Academic, attendance and financial data is captured in real time.", Icon: DatabaseIcon },
  { n: "05", label: "AI Analyzes Data", copy: "Our Intelligence Engine identifies patterns and generates insights.", Icon: SparkleIcon },
  { n: "06", label: "Take Action", copy: "Make informed decisions, support students and improve outcomes.", Icon: CheckIcon },
];

export default function StepFlow() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-balance text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A Seamless Flow That Powers Your School.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(({ n, label, copy, Icon }) => (
            <div
              key={n}
              className="group rounded-xl border border-border bg-card p-5 shadow-[var(--shadow)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-white transition-transform duration-200 group-hover:scale-110">{n}</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-wash text-teal transition-transform duration-200 group-hover:scale-110">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <h3 className="mt-3 font-display text-base font-semibold text-ink">{label}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-quiet">{copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
