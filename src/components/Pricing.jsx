import { useState } from "react";
import { Link } from "react-router-dom";
import ContactSalesModal from "./ContactSalesModal";

const PLANS = [
  {
    name: "Starter",
    tier: "Individual",
    price: "\u20B94,999",
    period: "/mo/user",
    features: [
      "5 AI Personas",
      "Real-time emotion basic",
      "Email support",
    ],
    cta: "Start Trial",
    action: "demo",
    highlighted: false,
  },
  {
    name: "Growth",
    tier: "Advanced",
    price: "\u20B912,499",
    period: "/mo/user",
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Unlimited AI Personas",
      "Advanced Sentiment Analytics",
      "API Integration",
    ],
    cta: "Go Growth",
    action: "demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tier: "Custom",
    price: "Custom",
    period: "",
    features: [
      "Custom AI Personas",
      "Dedicated Success Manager",
      "SSO & Role-based Access",
    ],
    cta: "Contact Sales",
    action: "contact",
    highlighted: false,
  },
];

export default function Pricing() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="pricing" className="px-6 py-20 md:py-32 bg-surface-container-low md:bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold font-headline text-primary mb-4 tracking-tight md:tracking-normal">
            Pricing Plans
          </h2>
          <p className="hidden md:block text-on-surface-variant">
            Invest in your team's top-line growth.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
          {PLANS.map((plan) => (
            <PricingCard
              key={plan.name}
              {...plan}
              onContactSales={() => setContactOpen(true)}
            />
          ))}
        </div>
      </div>

      <ContactSalesModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </section>
  );
}

function PricingCard({ name, tier, price, period, badge, features, cta, action, highlighted, onContactSales }) {
  const ctaButton =
    action === "contact" ? (
      <button
        onClick={onContactSales}
        className={`w-full py-3 rounded-xl font-bold transition-all text-center ${
          highlighted
            ? "md:py-4 bg-tertiary-fixed text-on-tertiary-fixed shadow-lg hover:scale-[1.02]"
            : "border border-primary text-primary hover:bg-primary hover:text-on-primary"
        }`}
      >
        {cta}
      </button>
    ) : (
      <Link
        to="/book-demo"
        className={`block w-full py-3 rounded-xl font-bold transition-all text-center ${
          highlighted
            ? "md:py-4 bg-tertiary-fixed text-on-tertiary-fixed shadow-lg hover:scale-[1.02]"
            : "border border-primary text-primary hover:bg-primary hover:text-on-primary"
        }`}
      >
        {cta}
      </Link>
    );

  if (highlighted) {
    return (
      <div className="bg-primary p-8 md:p-10 rounded-3xl text-on-primary flex flex-col relative overflow-hidden border border-primary-container shadow-2xl md:shadow-none md:border-0">
        {badge && (
          <div className="absolute top-4 right-4 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
            {badge}
          </div>
        )}
        <div className="text-[10px] font-bold uppercase tracking-widest text-on-primary/60 mb-2">
          {tier}
        </div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="text-4xl font-extrabold mb-6">
          {price}
          {period && (
            <span className="text-sm font-normal text-on-primary/60">
              {period}
            </span>
          )}
        </div>
        <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 md:gap-3 text-sm">
              <span className="material-symbols-outlined text-tertiary-fixed text-lg md:text-[18px]">
                check_circle
              </span>
              {feature}
            </li>
          ))}
        </ul>
        {ctaButton}
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl ghost-border flex flex-col border border-outline-variant/10 md:border-0">
      <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
        {tier}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>
      <div className="text-4xl font-extrabold text-primary mb-6">
        {price}
        {period && (
          <span className="text-sm font-normal text-on-surface-variant">
            {period}
          </span>
        )}
      </div>
      <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 md:gap-3 text-sm text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-tertiary-fixed-dim md:text-primary text-lg md:text-[18px]">
              check_circle
            </span>
            {feature}
          </li>
        ))}
      </ul>
      {ctaButton}
    </div>
  );
}
