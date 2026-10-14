import {
  BookIcon, CalendarIcon, FileTextIcon, ClockIcon, TrendingUpIcon, ClipboardCheckIcon,
  UsersIcon, ShieldIcon, ReceiptIcon, CoinsIcon, FileTextIcon as InvoiceIcon, MessageIcon,
} from "./icons";
import Reveal from "./Reveal";

// Four content-variation sections sharing one visual pattern (headline +
// icon-bullet grid) — kept in one file since they're the same layout with
// different data, not four structurally distinct sections. Every bullet
// here maps to a real, already-shipped page in the actual product, not an
// aspirational feature list.
// `dark` sections use fixed literal colors, not the ink/paper/slate tokens
// — same reasoning as IntelligenceSection.js: those tokens flip between
// light and dark app-theme, which would invert an "always dark" panel to
// an unreadable light one whenever the app itself is in dark mode.
function FeatureGrid({ id, dark, eyebrow, headline, items }) {
  return (
    <section id={id} className={dark ? "bg-[#0F172A] py-16 text-[#F8FAFC] sm:py-24" : "bg-paper py-16 sm:py-24"}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            {eyebrow && (
              <span className={`text-xs font-semibold uppercase tracking-wide ${dark ? "text-gold-bright" : "text-gold"}`}>
                {eyebrow}
              </span>
            )}
            <h2 className={`mt-2 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl ${dark ? "text-[#F8FAFC]" : "text-ink"}`}>
              {headline}
            </h2>
          </div>
        </Reveal>
        <Reveal delay={80} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ label, copy, Icon }) => (
            <div
              key={label}
              className={
                dark
                  ? "group rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-[transform,background-color] duration-200 ease-out hover:-translate-y-1 hover:bg-white/[0.07]"
                  : "group rounded-xl border border-border bg-card p-5 shadow-[var(--shadow)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
              }
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110 ${dark ? "bg-gold/15 text-gold-bright" : "bg-teal-wash text-teal"}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className={`mt-4 font-display text-base font-semibold ${dark ? "text-[#F8FAFC]" : "text-ink"}`}>{label}</h3>
              <p className={`mt-1.5 text-sm leading-relaxed ${dark ? "text-[#94A3B8]" : "text-slate-quiet"}`}>{copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function AcademicManagementSection() {
  return (
    <FeatureGrid
      id="how-it-works"
      headline="Put learning at the center of your school."
      items={[
        { label: "Gradebook", copy: "Record and analyze student assessment results by term, subject and component.", Icon: ClipboardCheckIcon },
        { label: "Lesson Planning", copy: "Plan lessons ahead of time, tracked as draft, planned or completed automatically.", Icon: BookIcon },
        { label: "Assignments", copy: "Teachers create and grade; students submit — with real file uploads, start to finish.", Icon: FileTextIcon },
        { label: "Attendance", copy: "Mark daily attendance and catch patterns before they become a problem.", Icon: ClockIcon },
        { label: "Academic Progress", copy: "Track a student's performance across terms and academic years.", Icon: TrendingUpIcon },
        { label: "Assessments", copy: "AI-assisted exam papers, diagnostic quizzes and student practice, all curriculum-grounded.", Icon: ClipboardCheckIcon },
      ]}
    />
  );
}

export function SchoolOperationsSection() {
  return (
    <FeatureGrid
      dark
      eyebrow="Everything, Connected"
      headline="The entire school. Connected."
      items={[
        { label: "One shared platform", copy: "Students, teachers, parents, administration and accounts all work from the same real-time data.", Icon: UsersIcon },
        { label: "Role-based access", copy: "Every account sees exactly what its role needs — nothing more, nothing less.", Icon: ShieldIcon },
        { label: "One source of truth", copy: "A grade entered once, a fee paid once — visible instantly to everyone who needs to see it.", Icon: CalendarIcon },
      ]}
    />
  );
}

export function FinanceSection() {
  return (
    <FeatureGrid
      headline="Know where your school's money stands."
      items={[
        { label: "Fee Structures", copy: "Set fee structures per grade level and term.", Icon: CoinsIcon },
        { label: "Invoices", copy: "Generate and edit invoices individually or in bulk.", Icon: InvoiceIcon },
        { label: "Payments", copy: "Record payments and accept real online payments via Paystack.", Icon: ReceiptIcon },
        { label: "Financial Reports", copy: "Generate real PDF/CSV reports across 8 different report types.", Icon: FileTextIcon },
      ]}
    />
  );
}

export function CommunicationSection() {
  return (
    <FeatureGrid
      dark
      eyebrow="Stay Connected"
      headline="Keep everyone connected."
      items={[
        { label: "Administrator → Teacher", copy: "School-wide announcements and direct messages, delivered in-app and by email.", Icon: MessageIcon },
        { label: "Teacher → Parent", copy: "A direct line home about a student's progress, without needing a phone call.", Icon: MessageIcon },
        { label: "Accountant → Parent", copy: "Invoice-linked messages tied directly to a family's billing history.", Icon: ReceiptIcon },
      ]}
    />
  );
}
