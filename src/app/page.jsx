import LandingPage from "@/components/LandingPage";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/about/AboutSection"; // About Us section
import StatsSection from "@/components/StatsSection"; // Import StatsSection
import ResultsSection from "@/components/ResultsSection";
import QuoteSection from "@/components/QuoteSection";
import PricingSection from "@/components/PricingSection";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="w-full">
      <LandingPage />
      <ServicesSection id="services" />
      <AboutSection id="about" /> {/* About Us appears below Services */}
      <StatsSection /> {/* Stats Section appears below About Us */}
      <ResultsSection />
      <QuoteSection />
      <PricingSection />
      <Banner />
    </main>
  );
}
