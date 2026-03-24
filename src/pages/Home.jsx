import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrainingScenarios from "../components/TrainingScenarios";
import Features from "../components/Features";
import AdvancedAnalytics from "../components/AdvancedAnalytics";
import AnalyticsEngine from "../components/AnalyticsEngine";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottomNav";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20 overflow-x-hidden">
        <Hero />
        <TrainingScenarios />
        <Features />
        <AdvancedAnalytics />
        <AnalyticsEngine />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
