// No specific response-time commitment (the reference mockup said
// "within 24 hours") — that's a real SLA promise nobody has agreed to
// keep, so the copy stays honest about the process without a number
// attached to it.
const STEPS = [
  { n: "01", label: "We Contact You", copy: "Our team will personally reach out to follow up." },
  { n: "02", label: "We Understand Your Needs", copy: "We learn about your school and your goals." },
  { n: "03", label: "You Get a Personalized Demo", copy: "We walk you through the platform tailored to your needs." },
  { n: "04", label: "Start Your Journey", copy: "Join schools already using Academia Hub to achieve more." },
];

export default function WhatHappensNext() {
  return (
    <div>
      <h2 className="font-display text-lg font-semibold text-ink">What Happens Next?</h2>
      <div className="mt-5 space-y-5">
        {STEPS.map(({ n, label, copy }) => (
          <div key={n} className="group flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-white transition-transform duration-200 ease-out group-hover:scale-110">
              {n}
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{label}</p>
              <p className="mt-0.5 text-sm text-slate-quiet">{copy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
