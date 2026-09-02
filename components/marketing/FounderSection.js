import Link from "next/link";
import Reveal from "./Reveal";

// A real photo (public/marketing/founder.png) and a first-person story,
// placed between ValuesGrid and ClosingBanner — the rest of this page is
// institutional mission/vision copy with no actual person in it, and for a
// product that's going to hold a school's student and financial records,
// a school administrator deciding whether to trust it benefits from seeing
// there's a real, accountable person behind it.
export default function FounderSection() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="grid gap-10 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow)] sm:p-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
          <div className="group mx-auto h-52 w-52 flex-shrink-0 overflow-hidden rounded-full border-4 border-gold-wash transition-transform duration-300 ease-out hover:scale-[1.03] sm:h-64 sm:w-64 lg:h-72 lg:w-72">
            {/* eslint-disable-next-line @next/next/no-img-element -- static marketing asset, not a build-time-optimized page image */}
            <img
              src="/marketing/founder.png"
              alt="The founder of Academia Hub"
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-gold">Why I Built This</span>
            <h2 className="mt-2 text-balance font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Built for Schools That Deserve Better Tools.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
              I built Academia Hub after seeing, firsthand, how much time and information basic
              schools in Ghana lose to paper — attendance registers that never get compared,
              report cards computed by hand, and parents who only find out their child is
              struggling once it&apos;s already a crisis. Eagle Vision Basic School gave me the
              chance to build something real for a real school, not just a theoretical project.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
              Academia Hub is my answer to that: a platform that doesn&apos;t just store school
              data, but actually uses it — catching a struggling student early, keeping parents
              genuinely informed, and giving administrators and accountants a clear picture
              instead of a stack of paper. I&apos;m building this to be something any school in
              Ghana could pick up and use, not just one.
            </p>
            <p className="mt-5 text-sm font-medium text-ink">
              If you&apos;re a school administrator with questions about how this could work for
              you,{" "}
              <Link href="/contact" className="text-gold transition-colors duration-150 ease-out hover:text-gold-bright hover:underline">
                reach out directly
              </Link>{" "}
              — I&apos;m building this alongside real schools, not from a distance.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
