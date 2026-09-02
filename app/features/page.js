import Navbar from "@/components/marketing/Navbar";
import FeaturesHero from "@/components/marketing/FeaturesHero";
import ModulesGrid from "@/components/marketing/ModulesGrid";
import ClosingBanner from "@/components/marketing/ClosingBanner";
import Footer from "@/components/marketing/Footer";

export const metadata = {
  title: "Features — Academia Hub",
  description: "Explore the core modules that power Academia Hub — academics, attendance, finance, communication and more.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navbar />
      <FeaturesHero />
      <ModulesGrid />
      <ClosingBanner
        headline="One Platform. Unlimited Possibilities."
        copy="All the tools your school needs, working together to save you time and improve outcomes."
      />
      <Footer />
    </div>
  );
}
