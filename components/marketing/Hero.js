import Link from "next/link";
import { ShieldIcon, TeacherIcon, StudentIcon, ParentIcon, AccountantIcon } from "./icons";

// A real screen recording of the live product (public/marketing/hero-demo.mp4),
// replacing the earlier static admin-dashboard.png screenshot. Plays like an
// enhanced screenshot rather than a video someone watches deliberately —
// autoplay/muted/loop/no controls, the standard SaaS-landing-page pattern —
// so it needs muted+playsInline for autoplay to actually be allowed by
// browsers (a video with sound can never autoplay). Trimmed+compressed by
// the user from an original ~97MB/75s export down to ~2MB/16s.
function DashboardScreenshot() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-hover)]">
      <video
        src="/marketing/hero-demo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full"
      />
    </div>
  );
}

const ROLE_STRIP = [
  { label: "Administrators", Icon: ShieldIcon },
  { label: "Teachers", Icon: TeacherIcon },
  { label: "Students", Icon: StudentIcon },
  { label: "Parents", Icon: ParentIcon },
  { label: "Accountants", Icon: AccountantIcon },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="marketing-fade-up">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
            GES-Aligned &middot; AI-Powered
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Run Your School <span className="text-gold">Smarter.</span>
          </h1>
          <p className="mt-5 max-w-lg text-balance text-base leading-relaxed text-slate sm:text-lg">
            A complete school management platform that connects administrators, teachers,
            students, parents and accounts — while turning school data into intelligent insights.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-gold-bright active:scale-[0.98]">
              Request a Demo
            </Link>
            <Link href="/features" className="rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-ink transition-[background-color,transform] duration-200 ease-out hover:bg-paper active:scale-[0.98]">
              Explore the Platform
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {ROLE_STRIP.map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-slate-quiet">
                <Icon className="h-4 w-4 text-teal" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="marketing-fade-up [animation-delay:120ms]">
          <DashboardScreenshot />
        </div>
      </div>
    </section>
  );
}
