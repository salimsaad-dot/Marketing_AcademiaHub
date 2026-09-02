import Navbar from "@/components/marketing/Navbar";
import HowItWorksHero from "@/components/marketing/HowItWorksHero";
import StepFlow from "@/components/marketing/StepFlow";
import ClosingBanner from "@/components/marketing/ClosingBanner";
import Footer from "@/components/marketing/Footer";

export const metadata = {
  title: "How It Works — Academia Hub",
  description: "See how Academia Hub connects administrators, teachers, students, parents and accounts on one platform.",
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navbar />
      <HowItWorksHero />
      <StepFlow />
      <ClosingBanner
        headline="From Daily Tasks to Big Decisions."
        copy="See how Academia Hub makes everything flow better, for your school."
      />
      <Footer />
    </div>
  );
}
