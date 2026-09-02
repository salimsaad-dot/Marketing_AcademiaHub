import { SparkleIcon, TrendingUpIcon, ShieldIcon, UsersIcon } from "./icons";
import Reveal from "./Reveal";

const VALUES = [
  { label: "Innovation", copy: "We continually explore new ideas and technologies.", Icon: SparkleIcon },
  { label: "Impact", copy: "We focus on real problems and real results.", Icon: TrendingUpIcon },
  { label: "Integrity", copy: "We protect data, respect people, and do the right thing.", Icon: ShieldIcon },
  { label: "Partnership", copy: "We grow when our schools grow. We're in this together.", Icon: UsersIcon },
];

export default function ValuesGrid() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-balance text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What Drives Us.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ label, copy, Icon }) => (
            <div
              key={label}
              className="group rounded-xl border border-border bg-card p-5 text-center shadow-[var(--shadow)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-gold-wash text-gold transition-transform duration-200 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">{label}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-quiet">{copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
