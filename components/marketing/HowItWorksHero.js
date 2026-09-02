import { ShieldIcon, TeacherIcon, StudentIcon, ParentIcon, AccountantIcon, SchoolIcon } from "./icons";

// The reference mockup's hub diagram used a glowing purple isometric
// building; this reuses the same 5 real role icons already established
// everywhere else on the site (Hero.js, RoleCards.js) around a plain
// SchoolIcon center, in ink+gold, positioned with CSS rather than an
// image asset.
const NODES = [
  { label: "Administrator", sub: "Manage & monitor", Icon: ShieldIcon, pos: "left-1/2 top-0 -translate-x-1/2" },
  { label: "Teachers", sub: "Teach & assess", Icon: TeacherIcon, pos: "left-0 top-1/2 -translate-y-1/2" },
  { label: "Parents", sub: "Stay informed", Icon: ParentIcon, pos: "right-0 top-1/2 -translate-y-1/2" },
  { label: "Students", sub: "Learn & grow", Icon: StudentIcon, pos: "bottom-0 left-1/4 -translate-x-1/2" },
  { label: "Accountant", sub: "Manage finances", Icon: AccountantIcon, pos: "bottom-0 right-1/4 translate-x-1/2" },
];

export default function HowItWorksHero() {
  return (
    <section className="bg-[#0F172A] py-16 text-[#F8FAFC] sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="marketing-fade-up">
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-bright">How It Works</span>
          <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Simple. Connected. Powerful.
          </h1>
          <p className="mt-5 max-w-md text-[#94A3B8]">
            Academia Hub brings everyone together on one platform. Here's how it works.
          </p>
        </div>

        <div className="marketing-fade-up relative mx-auto h-64 w-64 max-w-full [animation-delay:120ms] sm:h-80 sm:w-80">
          <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-gold/30 bg-white/5">
            <SchoolIcon className="h-9 w-9 text-gold-bright" />
          </div>
          {NODES.map(({ label, sub, Icon, pos }) => (
            <div key={label} className={`group absolute flex flex-col items-center gap-1.5 text-center ${pos}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-[transform,background-color] duration-200 ease-out group-hover:scale-110 group-hover:bg-white/10">
                <Icon className="h-5 w-5 text-teal" />
              </div>
              <p className="text-xs font-semibold text-[#F8FAFC]">{label}</p>
              <p className="text-[10px] text-[#94A3B8]">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
