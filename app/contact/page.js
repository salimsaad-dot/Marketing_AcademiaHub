import Navbar from "@/components/marketing/Navbar";
import ContactInfo from "@/components/marketing/ContactInfo";
import WhatHappensNext from "@/components/marketing/WhatHappensNext";
import DemoRequestForm from "@/components/marketing/DemoRequestForm";
import Footer from "@/components/marketing/Footer";

export const metadata = {
  title: "Contact — Academia Hub",
  description: "Get in touch with Academia Hub or request a personalized demo for your school.",
};

export default function ContactPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navbar />
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_0.7fr_1.1fr]">
          <div className="marketing-fade-up">
            <ContactInfo />
          </div>
          <div className="marketing-fade-up [animation-delay:80ms]">
            <WhatHappensNext />
          </div>
          <div className="marketing-fade-up [animation-delay:160ms]">
            <DemoRequestForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
