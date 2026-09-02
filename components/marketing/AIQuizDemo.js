import Reveal from "./Reveal";

const WORKFLOW = [
  "Teacher creates quiz",
  "AI generates questions",
  "Teacher reviews",
  "Quiz published",
  "Student attempts",
  "Automatic scoring",
  "Weakest skills identified",
];

export default function AIQuizDemo() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              From Quiz to Insight in Minutes.
            </h2>
            <p className="mt-3 text-slate">
              A teacher-initiated diagnostic quiz, generated and graded automatically.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3">
          {WORKFLOW.map((step, i) => (
            <div key={step} className="flex items-center gap-2 sm:gap-3">
              <span className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-ink transition-colors duration-200 ease-out hover:border-gold hover:text-gold sm:text-sm">
                {step}
              </span>
              {i < WORKFLOW.length - 1 && <span className="text-slate-quiet">&rarr;</span>}
            </div>
          ))}
        </Reveal>

        <Reveal delay={160} className="mx-auto mt-12 max-w-md rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-quiet">Example &middot; illustrative only</p>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="font-display text-base font-semibold text-ink">Kwame A.</p>
              <p className="text-sm text-slate-quiet">Mathematics</p>
            </div>
            <span className="rounded-full bg-teal-wash px-3 py-1 text-sm font-semibold text-teal">72%</span>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center justify-between rounded-lg bg-success/10 px-3 py-2">
              <span className="text-ink">Strongest skill</span>
              <span className="font-medium text-success">Algebraic expressions</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-danger-wash px-3 py-2">
              <span className="text-ink">Needs improvement</span>
              <span className="font-medium text-danger">Fractions</span>
            </div>
          </div>
          <div className="mt-4 rounded-lg border border-border bg-paper px-3.5 py-2.5 text-sm text-slate">
            Recommended next step: targeted practice on fractions.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
