// Fixed literal colors, same "always dark" rule as FeaturesHero.js/
// IntelligenceSection.js. Full-bleed background photo (user-supplied, real —
// not stock) with a left-to-right dark scrim so the headline stays readable
// against whatever the photo contains; content is left-aligned to match
// where the old 2-column layout's text sat. Replaces the earlier sparkle-
// in-a-circle motif (which itself had replaced the reference mockup's
// glowing-3D-brain cliché) — dropped rather than layered on top of the
// photo, since a real photo plus a decorative icon competed visually more
// than either alone.
export default function AIIntelligenceHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] text-[#F8FAFC]">
      <img
        src="/marketing/ai-intelligence-hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-[#0F172A]/40" />
      <div className="relative mx-auto flex min-h-[440px] max-w-6xl items-center px-5 py-16 sm:min-h-[520px] sm:px-8 sm:py-24">
        <div className="marketing-fade-up max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-bright">AI Intelligence</span>
          <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Smarter Data. Better Decisions.
          </h1>
          <p className="mt-5 max-w-md text-[#94A3B8]">
            Our Intelligence Engine turns everyday school data into insight that helps
            teachers and administrators understand, act, and improve outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
