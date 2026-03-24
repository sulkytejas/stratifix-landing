const BENEFITS = [
  {
    icon: "clinical_notes",
    title: "Personalized walkthrough of the platform.",
    description:
      "Tailored exploration of features most relevant to your specific sales cycle and hierarchy.",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    hoverBg: "group-hover:bg-primary",
    hoverText: "group-hover:text-on-primary",
  },
  {
    icon: "record_voice_over",
    title: "Live demo of an AI roleplay session.",
    description:
      "Watch our AI handle objections and provide real-time emotional feedback during a mock discovery call.",
    iconBg: "bg-tertiary-fixed/30",
    iconColor: "text-on-tertiary-fixed",
    hoverBg: "group-hover:bg-tertiary-fixed",
    hoverText: "",
  },
  {
    icon: "analytics",
    title: "Review of custom analytics for your team.",
    description:
      "Understand the data models we use to track coachability, sentiment, and performance gaps.",
    iconBg: "bg-primary-container/20",
    iconColor: "text-on-primary-container",
    hoverBg: "group-hover:bg-primary-container",
    hoverText: "group-hover:text-on-primary",
  },
];

export default function DemoBenefits() {
  return (
    <section className="mt-24">
      <h3 className="font-headline text-3xl font-bold text-primary mb-12">
        Benefits of the Demo
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BENEFITS.map((benefit) => (
          <div
            key={benefit.title}
            className="group p-8 bg-surface-container-low rounded-xl transition-all hover:bg-surface-container-highest"
          >
            <div
              className={`h-12 w-12 ${benefit.iconBg} rounded-lg flex items-center justify-center mb-6 ${benefit.iconColor} ${benefit.hoverBg} ${benefit.hoverText} transition-colors`}
            >
              <span className="material-symbols-outlined">{benefit.icon}</span>
            </div>
            <h4 className="font-headline text-lg font-bold mb-3">
              {benefit.title}
            </h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
