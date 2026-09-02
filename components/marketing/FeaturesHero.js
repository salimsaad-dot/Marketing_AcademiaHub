// Fixed literal colors, not the ink/paper/slate tokens — same "always
// dark" panel rule as IntelligenceSection.js/FeatureSections.js's dark
// variant, since those tokens flip between light/dark app-theme.
export default function FeaturesHero() {
  return (
    <section className="bg-[#0F172A] py-16 text-[#F8FAFC] sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="marketing-fade-up">
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-bright">Features</span>
          <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Everything Your School Needs.
          </h1>
          <p className="mt-5 max-w-md text-[#94A3B8]">
            A complete suite of tools to manage academics, administration, communication
            and finances — all in one platform.
          </p>
        </div>
        <div className="marketing-fade-up overflow-hidden rounded-2xl border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.25),0_16px_36px_rgba(0,0,0,0.45)] [animation-delay:120ms]">
          <img
            src="/marketing/admin-dashboard.png"
            alt="The Academia Hub Administrator Dashboard"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
