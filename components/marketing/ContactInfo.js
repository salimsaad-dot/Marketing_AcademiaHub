import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "./icons";

// Real values only. The reference mockup showed a separate "Support"
// email distinct from the general one — only one real email exists for
// this project, so that row isn't duplicated under two labels. No city
// was confirmed for the office address and no specific days were
// confirmed for the hours, so neither is added beyond what was given.
const DETAILS = [
  { label: "Phone", value: "0577428684", Icon: PhoneIcon },
  { label: "Email", value: "salimsaad135@gmail.com", Icon: MailIcon },
  { label: "Office", value: "9 Okapi Street", Icon: MapPinIcon },
  { label: "Support Hours", value: "9am – 3pm", Icon: ClockIcon },
];

export default function ContactInfo() {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-wide text-gold">Contact Us</span>
      <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
        Let's Build a Smarter School Together.
      </h1>
      <p className="mt-5 max-w-md text-slate">
        Have questions or want to see Academia Hub in action? We'd love to hear from you.
      </p>

      <div className="mt-8 space-y-4">
        {DETAILS.map(({ label, value, Icon }) => (
          <div key={label} className="group flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-wash text-gold transition-transform duration-200 ease-out group-hover:scale-110">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-slate-quiet">{label}</p>
              <p className="text-sm font-medium text-ink">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
