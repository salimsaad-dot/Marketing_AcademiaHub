import Navbar from "./Navbar";
import Hero from "./Hero";
import RoleCards from "./RoleCards";
import IntelligenceSection from "./IntelligenceSection";
import AIQuizDemo from "./AIQuizDemo";
import { AcademicManagementSection, SchoolOperationsSection, FinanceSection, CommunicationSection } from "./FeatureSections";
import SecuritySection from "./SecuritySection";
import FinalCta from "./FinalCta";
import Footer from "./Footer";

// Order matches the blueprint's own "Recommended Homepage Flow": Navbar →
// Hero → Key capabilities → Intelligence → AI Quiz → Academic Management →
// School Operations → Finance → Communication → Security → Final CTA →
// Footer. The Demo Video section from the blueprint is deliberately not
// built — no walkthrough video exists yet.
export default function MarketingHome() {
  return (
    <div className="min-h-full bg-paper">
      <Navbar />
      <Hero />
      <RoleCards />
      <IntelligenceSection />
      <AIQuizDemo />
      <AcademicManagementSection />
      <SchoolOperationsSection />
      <FinanceSection />
      <CommunicationSection />
      <SecuritySection />
      <FinalCta />
      <Footer />
    </div>
  );
}
