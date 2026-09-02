import Navbar from "@/components/marketing/Navbar";
import AboutHero from "@/components/marketing/AboutHero";
import ValuesGrid from "@/components/marketing/ValuesGrid";
import FounderSection from "@/components/marketing/FounderSection";
import ClosingBanner from "@/components/marketing/ClosingBanner";
import Footer from "@/components/marketing/Footer";

export const metadata = {
  title: "About — Academia Hub",
  description: "The mission, vision and values behind Academia Hub — a school management platform built to make schools smarter.",
};

export default function AboutPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navbar />
      <AboutHero />
      <ValuesGrid />
      <FounderSection />
      <ClosingBanner
        headline="Want to Be Part of Our Story?"
        copy="See how Academia Hub can help your school work smarter, starting today."
      />
      <Footer />
    </div>
  );
}
