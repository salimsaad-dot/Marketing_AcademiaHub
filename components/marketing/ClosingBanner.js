import Link from "next/link";

// A lightweight closing CTA for secondary pages — unlike Home's
// FinalCta.js or the dedicated Contact page, this doesn't embed the full
// demo-request form itself; it just links to the real /contact page.
export default function ClosingBanner({ headline, copy }) {
  return (
    <section className="bg-[#0F172A] py-14 text-[#F8FAFC]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <div>
          <h2 className="font-display text-xl font-semibold sm:text-2xl">{headline}</h2>
          {copy && <p className="mt-1.5 max-w-md text-sm text-[#94A3B8]">{copy}</p>}
        </div>
        <Link href="/contact" className="shrink-0 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-gold-bright active:scale-[0.98]">
          Request a Demo
        </Link>
      </div>
    </section>
  );
}
