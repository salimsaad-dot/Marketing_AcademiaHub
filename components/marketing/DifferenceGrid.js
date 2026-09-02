import { ClockIcon, TrendingUpIcon, MessageIcon, SparkleIcon, EyeIcon, UsersIcon } from "./icons";
import Reveal from "./Reveal";

const DIFFERENCES = [
  { label: "Save Time", copy: "Automate everyday tasks and reduce manual work across the school.", Icon: ClockIcon },
  { label: "Improve Learning", copy: "AI insights help identify learning gaps and student outcomes early.", Icon: TrendingUpIcon },
  { label: "Stay Connected", copy: "Connect teachers, parents and students in real time.", Icon: MessageIcon },
  { label: "Make Better Decisions", copy: "Real-time data and reports help you lead with confidence.", Icon: SparkleIcon },
  { label: "Increase Transparency", copy: "Keep parents informed and build trust in your school.", Icon: EyeIcon },
  { label: "Scale With You", copy: "Whether small or large, our platform grows with your school.", Icon: UsersIcon },
];

export default function DifferenceGrid() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-balance text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            The Difference Your School Deserves.
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENCES.map(({ label, copy, Icon }) => (
            <div
              key={label}
              className="group rounded-xl border border-border bg-card p-5 shadow-[var(--shadow)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-wash text-gold transition-transform duration-200 group-hover:scale-110">
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
