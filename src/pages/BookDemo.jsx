import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DemoScheduler from "../components/DemoScheduler";
import DemoForm from "../components/DemoForm";
import DemoBenefits from "../components/DemoBenefits";

import ContactSalesModal from "../components/ContactSalesModal";

export default function BookDemo() {
  const [contactOpen, setContactOpen] = useState(false);

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
      <DemoFooter onContactSales={() => setContactOpen(true)} />
      <ContactSalesModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}

const FOOTER_LINKS = ["Privacy Policy", "Terms of Service", "Security", "Contact Sales"];

function DemoFooter({ onContactSales }) {
  return (
    <footer className="w-full py-12 border-t border-surface-container bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
        <Link to="/" className="text-lg font-black text-primary">
          Stratifix
        </Link>
        <div className="flex flex-wrap justify-center gap-8">
          {FOOTER_LINKS.map((label) =>
            label === "Contact Sales" ? (
              <button
                key={label}
                onClick={onContactSales}
                className="font-label text-xs font-medium uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all"
              >
                {label}
              </button>
            ) : (
              <a
                key={label}
                href="#"
                className="font-label text-xs font-medium uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all"
              >
                {label}
              </a>
            )
          )}
        </div>
        <div className="text-[10px] text-on-surface-variant font-medium">
          &copy; 2026 Stratifix Intelligence. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
