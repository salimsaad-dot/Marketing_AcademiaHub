// Fixed literal colors, same "always dark" rule as every other dark hero
// this session. Full-bleed background photo (user-supplied, real — not
// stock) with a left-to-right dark scrim so the headline stays readable;
// content is left-aligned to match where the old 2-column layout's text
// sat. No stat-overlay card — the reference mockup's "250+ Schools,"
// "25,000+ Students," "1.5M+ Data Points" are fabricated numbers this
// project can't back up, dropped entirely rather than replaced with a
// thinner honest substitute. The earlier icon-in-a-circle visual is
// dropped now that a real photo fills the section — the two competed
// visually more than either alone.
export default function ForSchoolsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-[#F8FAFC]">
      <img
        src="/marketing/for-schools-hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-[#0F172A]/40" />
      <div className="relative mx-auto flex min-h-[440px] max-w-6xl items-center px-5 py-16 sm:min-h-[520px] sm:px-8 sm:py-24">
        <div className="marketing-fade-up max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-bright">For Schools</span>
          <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Built for Schools. Designed for Impact.
          </h1>
          <p className="mt-5 max-w-md text-[#94A3B8]">
            Academia Hub helps schools work smarter, communicate better and achieve more —
            every single day.
          </p>
        </div>
      </div>
    </section>
  );
}
