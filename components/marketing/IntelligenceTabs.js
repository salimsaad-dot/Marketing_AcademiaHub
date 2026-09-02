"use client";

import { useState } from "react";
import { SparkleIcon, UsersIcon, ClockIcon, ClipboardCheckIcon, CoinsIcon, CheckIcon } from "./icons";
import Reveal from "./Reveal";

// Same tab-switcher pattern as app/dashboard/diagnostics/page.js's TABS —
// a flat array + pill buttons, not a new invented pattern.
const TABS = [
  {
    key: "student",
    label: "Student Intelligence",
    Icon: SparkleIcon,
    blurb: "Understand each student's strengths, weaknesses and learning behavior to provide the right support at the right time.",
    points: ["Identify weak skills automatically", "Track learning progress over time", "Get personalized recommendations", "Detect at-risk students early"],
  },
  {
    key: "class",
    label: "Class Intelligence",
    Icon: UsersIcon,
    blurb: "Discover patterns in class-wide performance and spot the topics a whole class is struggling with.",
    points: ["Spot class-wide weak topics", "Compare performance across classes", "Track trends over the term", "Surface patterns before term's end"],
  },
  {
    key: "attendance",
    label: "Attendance Intelligence",
    Icon: ClockIcon,
    blurb: "Detect attendance patterns as they emerge, so a decline is caught early, not discovered at the end of term.",
    points: ["Flag emerging absence patterns", "Compare attendance across classes", "Link attendance to performance", "Notify staff automatically"],
  },
  {
    key: "assessment",
    label: "AI Assessment",
    Icon: ClipboardCheckIcon,
    blurb: "Generate curriculum-grounded quizzes, score responses automatically, and identify each student's weakest skills.",
    points: ["AI-generated, curriculum-grounded questions", "100% server-side automatic scoring", "Weakest-skill identification per attempt", "Zero manual grading required"],
  },
  {
    key: "financial",
    label: "Financial Intelligence",
    Icon: CoinsIcon,
    blurb: "Turn fee collection and payment data into a clear picture of the school's finances — what's outstanding, what's overdue, and where to focus first.",
    points: ["Outstanding balances broken down by class", "Collection rate compared term over term", "Overdue invoices flagged automatically", "AI-summarized 'what needs attention' for the accountant"],
  },
];

// Every number/name below is a fictional, hardcoded example — never a
// real API call. This page is public and unauthenticated; real student
// or class data can never appear here, even demo data.
const EXAMPLES = {
  student: (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display text-base font-semibold text-ink">Ama Serwaa</p>
          <p className="text-sm text-slate-quiet">Basic 8A</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-quiet">Overall</p>
          <p className="font-display text-lg font-semibold text-teal">72%</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {[["Mathematics", 72], ["English", 81], ["Science", 65], ["Social Studies", 78]].map(([subj, pct]) => (
          <div key={subj} className="flex items-center gap-3 text-sm">
            <span className="w-28 shrink-0 text-slate-quiet">{subj}</span>
            <div className="h-2 flex-1 rounded-full bg-border">
              <div className="h-2 rounded-full bg-teal" style={{ width: `${pct}%` }} />
            </div>
            <span className="w-9 text-right font-medium text-ink">{pct}%</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-danger-wash px-3.5 py-2.5 text-sm text-danger">
        Weakest skill: Fractions (36%)
      </div>
    </div>
  ),
  class: (
    <div>
      <p className="font-display text-base font-semibold text-ink">Basic 8 Mathematics</p>
      <p className="text-sm text-slate-quiet">Class-wide mastery breakdown</p>
      <div className="mt-4 space-y-2">
        {[["Mastered", 45, "bg-success"], ["Developing", 30, "bg-teal"], ["Beginning", 15, "bg-warning"], ["Struggling", 10, "bg-danger"]].map(([label, pct, color]) => (
          <div key={label} className="flex items-center gap-3 text-sm">
            <span className="w-24 shrink-0 text-slate-quiet">{label}</span>
            <div className="h-2 flex-1 rounded-full bg-border">
              <div className={`h-2 rounded-full ${color}`} style={{ width: `${pct}%` }} />
            </div>
            <span className="w-9 text-right font-medium text-ink">{pct}%</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-danger-wash px-3.5 py-2.5 text-sm text-danger">
        Performance has declined 7.4% this term — weakest area: Fractions
      </div>
    </div>
  ),
  attendance: (
    <div>
      <p className="font-display text-base font-semibold text-ink">Basic 7B</p>
      <p className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-3xl font-semibold text-teal">92%</span>
        <span className="text-sm text-slate-quiet">attendance rate this term</span>
      </p>
      <div className="mt-4 rounded-lg bg-warning/10 px-3.5 py-2.5 text-sm text-ink">
        5 students showing a declining attendance pattern over the last 3 weeks.
      </div>
      <div className="mt-2 rounded-lg border border-border px-3.5 py-2.5 text-sm text-slate">
        Recommended action: a pastoral check-in for the affected students.
      </div>
    </div>
  ),
  assessment: (
    <div>
      <p className="font-display text-base font-semibold text-ink">Basic 8 Science — Diagnostic Quiz</p>
      <p className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-3xl font-semibold text-teal">61%</span>
        <span className="text-sm text-slate-quiet">average score, 10 questions</span>
      </p>
      <div className="mt-4 rounded-lg bg-danger-wash px-3.5 py-2.5 text-sm text-danger">
        Most missed: Diagram Interpretation
      </div>
      <div className="mt-2 rounded-lg border border-border px-3.5 py-2.5 text-sm text-slate">
        Scored automatically the moment every student submitted — no manual grading.
      </div>
    </div>
  ),
  financial: (
    <div>
      <p className="font-display text-base font-semibold text-ink">Term 2 Fee Collection</p>
      <p className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-3xl font-semibold text-teal">78%</span>
        <span className="text-sm text-slate-quiet">collection rate, up 6% from last term</span>
      </p>
      <div className="mt-4 space-y-2">
        {[["Basic 3", "GHS 2,100"], ["Basic 7", "GHS 1,850"], ["Basic 5", "GHS 960"]].map(([cls, amt]) => (
          <div key={cls} className="flex items-center justify-between text-sm">
            <span className="text-slate-quiet">{cls} outstanding</span>
            <span className="font-medium text-ink">{amt}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-danger-wash px-3.5 py-2.5 text-sm text-danger">
        3 classes have overdue balances — Basic 3 needs the most attention this term.
      </div>
    </div>
  ),
};

export default function IntelligenceTabs() {
  const [tab, setTab] = useState(TABS[0].key);
  const active = TABS.find((t) => t.key === tab);

  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap justify-center gap-1.5 rounded-xl border border-border bg-card p-2">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-150 ease-out ${
                tab === t.key ? "bg-gold text-white" : "text-slate-quiet hover:bg-paper"
              }`}
            >
              <t.Icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </Reveal>

        <Reveal delay={80} className="mt-8 grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow)] sm:p-8 lg:grid-cols-2">
          <div key={`${tab}-info`} className="marketing-content-fade">
            <h3 className="font-display text-xl font-semibold text-ink">{active.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{active.blurb}</p>
            <ul className="mt-4 space-y-2">
              {active.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-ink">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-quiet">Example &middot; illustrative only</p>
            <div key={`${tab}-example`} className="marketing-content-fade rounded-xl border border-border bg-paper p-5">{EXAMPLES[tab]}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
