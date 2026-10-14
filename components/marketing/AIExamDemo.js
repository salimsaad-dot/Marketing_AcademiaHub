import { CheckIcon, FileTextIcon } from "./icons";
import Reveal from "./Reveal";

// AI-Assisted Exam Setting (app/dashboard/exam-setting in the product),
// shipped 2026-09-19 but missing from this site until 2026-10-14. The
// workflow mirrors the real one step for step: the teacher picks topics
// taught this term, Gemini drafts a marks blueprint, generation is
// blocked until the per-topic marks total exactly matches the paper,
// then questions are generated, edited and finalized into two PDFs.
// Copy stays honest about the V1 boundary — printed papers, not in-app
// exam-taking — and the Question Bank line is real (reuse from past
// finalized papers, no AI call).
const WORKFLOW = [
  "Teacher picks topics taught",
  "AI drafts a marks blueprint",
  "Teacher adjusts the marks",
  "AI writes the questions",
  "Teacher edits & approves",
  "Paper + marking scheme PDFs",
];

// Illustrative only: totals exactly 100, the same check the product enforces.
const BLUEPRINT = [
  { topic: "Fractions & decimals", marks: 25 },
  { topic: "Algebraic expressions", marks: 30 },
  { topic: "Angles & polygons", marks: 25 },
  { topic: "Data handling", marks: 20 },
];

export default function AIExamDemo() {
  const total = BLUEPRINT.reduce((sum, row) => sum + row.marks, 0);
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              From Topics Taught to a Printed Paper.
            </h2>
            <p className="mt-3 text-slate">
              AI-assisted exam setting, grounded in the GES/NaCCA curriculum: objective,
              theory and practical questions, with the teacher in control at every step.
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
          <div className="mt-3">
            <p className="font-display text-base font-semibold text-ink">Basic 8 Mathematics</p>
            <p className="text-sm text-slate-quiet">End of Term 1 &middot; 100 marks</p>
          </div>
          <ul className="mt-4 divide-y divide-border rounded-lg border border-border text-sm">
            {BLUEPRINT.map(({ topic, marks }) => (
              <li key={topic} className="flex items-center justify-between gap-3 px-3 py-2">
                <span className="text-ink">{topic}</span>
                <span className="font-medium text-slate">{marks}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between rounded-lg bg-success/10 px-3 py-2 text-sm">
            <span className="flex items-center gap-1.5 text-ink">
              <CheckIcon className="h-4 w-4 text-success" />
              Marks match the paper
            </span>
            <span className="font-semibold text-success">{total} / 100</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {["Question paper", "Marking scheme"].map((label) => (
              <div key={label} className="flex items-center gap-2 rounded-lg border border-border bg-paper px-3 py-2.5 text-slate">
                <FileTextIcon className="h-4 w-4 shrink-0 text-gold" />
                <span>{label} PDF</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-md text-center text-sm text-slate-quiet">
            Already set papers before? The Question Bank builds a new paper from
            questions in your subject&rsquo;s past papers. No AI needed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
