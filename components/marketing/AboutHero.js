import { CheckIcon } from "./icons";

const PILLARS = [
  { label: "Our Mission", copy: "To create simple, powerful tools that schools genuinely love using." },
  { label: "Our Vision", copy: "A world where every school uses its own data to unlock every student's potential." },
  { label: "Our Promise", copy: "Committed to innovation, security, reliability and your success." },
];

// No "Our Journey So Far" stat card here — the reference mockup's
// "Founded 2023," "250+ Schools Onboarded," "12+ Core Modules" (we
// actually have 9, see the Features page) are all fabricated. A stated
// mission/vision is honest framing (it's a goal, not a factual claim
// about scale), so that copy is kept; specific numbers are not invented
// to back it up.
//
// Full-bleed background photo (user-supplied, real — not stock), same
// treatment as AIIntelligenceHero.js/ForSchoolsHero.js: left-to-right dark
// scrim over the fixed-dark literal colors, content left-aligned in a
// single column now that the old icon-in-a-circle visual is gone (dropped
// for the same reason as the other two — it competed with the real photo
// rather than adding anything once one was available).
export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-[#F8FAFC]">
      <img
        src="/marketing/about-hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-[#0F172A]/40" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="marketing-fade-up max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-bright">About Us</span>
          <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            We're Building Smarter Schools for a Better Future.
          </h1>
          <p className="mt-5 max-w-md text-[#94A3B8]">
            Our mission is to empower schools with intelligent technology that simplifies
            management, improves learning, and helps every student succeed.
          </p>
          <div className="mt-6 space-y-3">
            {PILLARS.map(({ label, copy }) => (
              <div key={label} className="flex gap-2.5">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright" />
                <p className="text-sm text-[#94A3B8]">
                  <span className="font-semibold text-[#F8FAFC]">{label}:</span> {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
