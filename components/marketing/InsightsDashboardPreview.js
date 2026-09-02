import { WarningIcon, ClockIcon, ClipboardCheckIcon } from "./icons";
import Reveal from "./Reveal";

// 4 illustrative example cards, one per real alert TYPE this system
// actually has — a class-wide decline alert, an attendance-pattern
// alert, a diagnostic-quiz score summary, and at-risk/remedial tagging.
// Every specific number/name is fictional; this is a public,
// unauthenticated page, so no real student or class data can appear
// here, ever.
const INSIGHTS = [
  {
    label: "Class Performance Alert",
    context: "Basic 8 Mathematics",
    detail: "Performance has declined by 7.4% in the last 3 weeks.",
    Icon: WarningIcon,
    tone: "warning",
  },
  {
    label: "Attendance Insight",
    context: "Basic 7B",
    detail: "Attendance rate is 92% this term. 5 students at risk.",
    Icon: ClockIcon,
    tone: "teal",
  },
  {
    label: "Assessment Insight",
    context: "Science Quiz",
    detail: "Average score 61%. Most missed: Diagram Interpretation.",
    Icon: ClipboardCheckIcon,
    tone: "gold",
  },
  {
    label: "Student At Risk",
    context: "3 Students",
    detail: "Identified as at-risk based on performance and attendance.",
    Icon: WarningIcon,
    tone: "danger",
  },
];

const TONE_CLASSES = {
  warning: "bg-warning/10 text-warning",
  teal: "bg-teal-wash text-teal",
  gold: "bg-gold-wash text-gold",
  danger: "bg-danger-wash text-danger",
};

export default function InsightsDashboardPreview() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              AI Insights Dashboard
            </h2>
            <p className="mt-3 text-slate">Get a real-time overview of what matters most.</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-quiet">Example &middot; illustrative only</p>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INSIGHTS.map(({ label, context, detail, Icon, tone }) => (
            <div
              key={label}
              className="group rounded-xl border border-border bg-card p-5 shadow-[var(--shadow)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            >
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${TONE_CLASSES[tone]} transition-transform duration-200 group-hover:scale-110`}>
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="mt-3 font-display text-sm font-semibold text-ink">{label}</h3>
              <p className="text-xs text-slate-quiet">{context}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate">{detail}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
