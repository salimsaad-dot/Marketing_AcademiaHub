import { SparkleIcon, UsersIcon, TrendingUpIcon, ClipboardCheckIcon, ClockIcon } from "./icons";
import Reveal from "./Reveal";

// Every capability below maps to a real, already-shipped feature — not
// aspirational copy. Student/Class Intelligence: Learning Checks' weak-
// topic detection. Attendance Intelligence: evaluateAttendanceAlerts'
// real deterministic pattern detection. AI Assessment: Diagnostic Quiz +
// AI Practice, both Gemini-generated and server-side scored.
const CAPABILITIES = [
  {
    label: "Student Intelligence",
    copy: "Identify individual learning gaps from recorded assessments and recommend targeted practice.",
    Icon: SparkleIcon,
  },
  {
    label: "Class Intelligence",
    copy: "Discover patterns in class-wide performance and flag topics a whole class is struggling with.",
    Icon: UsersIcon,
  },
  {
    label: "Attendance Intelligence",
    copy: "Detect attendance patterns as they emerge, so a decline is caught early, not at term's end.",
    Icon: ClockIcon,
  },
  {
    label: "AI Assessment",
    copy: "Generate curriculum-grounded quizzes, score responses automatically, and identify weakest skills.",
    Icon: ClipboardCheckIcon,
  },
];

// Fixed literal colors, not the ink/paper/slate tokens — this panel is
// deliberately dark regardless of the app's own light/dark theme (same
// reasoning as DashboardShell's sidebar, which hardcodes bg-[#0F172A] for
// the same "always dark" requirement). The ink/paper/slate tokens flip
// between light and dark mode, so using them here would invert this
// section to a light panel with unreadable dark-on-dark text whenever the
// app itself is in dark mode.
export default function IntelligenceSection() {
  return (
    <section id="ai-intelligence" className="bg-[#0F172A] py-16 text-[#F8FAFC] sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-bright">
              <SparkleIcon className="h-3.5 w-3.5" />
              Intelligence Engine
            </span>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Your school already has the data.
              <br />
              We help you understand it.
            </h2>
            <p className="mt-4 max-w-md text-[#94A3B8]">
              Attendance, grades, assessments, assignments and fees already flow through
              Academia Hub every day. The Intelligence Engine turns that recorded activity
              into insight a teacher or administrator can act on.
            </p>
          </Reveal>

          <div
            className="intel-animate rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            style={{ animation: "intel-alert-in 500ms ease-out" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-bright">
              Academic Insight &middot; Basic 8 Mathematics
            </p>
            <p className="mt-3 text-lg font-medium leading-snug">
              Class performance has declined by 7.4% over the last assessment period.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#94A3B8]">
              <span>
                Weakest area: <span className="font-semibold text-[#F8FAFC]">Fractions</span>
              </span>
            </div>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-[#94A3B8]">
              Recommended action: targeted practice for affected students.
            </div>
          </div>
        </div>

        <Reveal delay={80} className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map(({ label, copy, Icon }) => (
            <div
              key={label}
              className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-[transform,background-color] duration-200 ease-out hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold-bright transition-transform duration-200 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-[#F8FAFC]">{label}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#94A3B8]">{copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
