import Navbar from "@/components/marketing/Navbar";
import AIIntelligenceHero from "@/components/marketing/AIIntelligenceHero";
import IntelligenceTabs from "@/components/marketing/IntelligenceTabs";
import AIQuizDemo from "@/components/marketing/AIQuizDemo";
import AIExamDemo from "@/components/marketing/AIExamDemo";
import InsightsDashboardPreview from "@/components/marketing/InsightsDashboardPreview";
import ClosingBanner from "@/components/marketing/ClosingBanner";
import Footer from "@/components/marketing/Footer";

export const metadata = {
  title: "AI Intelligence — Academia Hub",
  description: "See how Academia Hub's Intelligence Engine turns everyday school data into insight — student, class and attendance intelligence, plus AI-generated quizzes and AI-assisted exam papers.",
};

export default function AIIntelligencePage() {
  return (
    <div className="min-h-full bg-paper">
      <Navbar />
      <AIIntelligenceHero />
      <IntelligenceTabs />
      <AIQuizDemo />
      <AIExamDemo />
      <InsightsDashboardPreview />
      <ClosingBanner
        headline="Intelligence that Empowers Educators."
        copy="Our AI doesn't replace teachers — it empowers them with insights to help every student succeed."
      />
      <Footer />
    </div>
  );
}
