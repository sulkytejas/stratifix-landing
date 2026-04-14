import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ImpactMetrics from "../components/ImpactMetrics";
import CoachingFeature from "../components/CoachingFeature";
import AnalyticsSection from "../components/AnalyticsSection";
import SalesDNA from "../components/SalesDNA";
import StrategicLoop from "../components/StrategicLoop";
import TailoredEnvironments from "../components/TailoredEnvironments";
import EnterpriseLibrary from "../components/EnterpriseLibrary";
import BehavioralFeedback from "../components/BehavioralFeedback";
import Infrastructure from "../components/Infrastructure";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactMetrics />
        <CoachingFeature />
        <AnalyticsSection />
        <SalesDNA />
        <StrategicLoop />
        <TailoredEnvironments />
        <EnterpriseLibrary />
        <BehavioralFeedback />
        <Infrastructure />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
