import DemoRequestForm from "./DemoRequestForm";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Ready to make your school smarter?
          </h2>
          <p className="mt-4 text-slate">
            Discover how one connected platform can simplify school management and turn
            everyday data into meaningful insights. Tell us about your school and we'll
            reach out to schedule a walkthrough.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <DemoRequestForm />
        </Reveal>
      </div>
    </section>
  );
}
