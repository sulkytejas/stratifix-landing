import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DemoScheduler from "../components/DemoScheduler";
import DemoForm from "../components/DemoForm";
import DemoBenefits from "../components/DemoBenefits";

export default function BookDemo() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="mb-16 max-w-3xl">
          <h1 className="font-headline text-5xl font-extrabold text-primary leading-tight tracking-tighter mb-6">
            Experience the Future of Sales Coaching.
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed">
            See how our emotion-aware AI can transform your team's performance.
          </p>
        </section>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <DemoScheduler />
          <DemoForm />
        </div>

        <DemoBenefits />
      </main>
      <Footer />
    </>
  );
}
