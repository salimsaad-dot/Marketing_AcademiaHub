import Navbar from "@/components/marketing/Navbar";
import ForSchoolsHero from "@/components/marketing/ForSchoolsHero";
import DifferenceGrid from "@/components/marketing/DifferenceGrid";
import ClosingBanner from "@/components/marketing/ClosingBanner";
import Footer from "@/components/marketing/Footer";

export const metadata = {
  title: "For Schools — Academia Hub",
  description: "See how Academia Hub helps schools save time, improve learning, and make better decisions with one connected platform.",
};

export default function ForSchoolsPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navbar />
      <ForSchoolsHero />
      <DifferenceGrid />
      <ClosingBanner
        headline="Ready to Make Your School Smarter?"
        copy="Discover how one connected platform can simplify school management and turn everyday data into meaningful insights."
      />
      <Footer />
    </div>
  );
}
