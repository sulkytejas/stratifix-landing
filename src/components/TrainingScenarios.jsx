const SCENARIOS = [
  {
    icon: "search_check",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    title: "Discovery Calls",
    description:
      "Uncover hidden pain points and budget cycles with active listening drills and gap analysis techniques.",
  },
  {
    icon: "forum",
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    title: "Objection Handling",
    description:
      "Deflect pricing concerns and technical pushback with fluid, confident responses and strategic empathy.",
  },
  {
    icon: "call",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-secondary",
    title: "Cold Calling",
    description:
      "Nail your hook and handle 'no' with grace. Practice opening lines that convert skeptical prospects into meetings.",
  },
  {
    icon: "handshake",
    iconBg: "bg-error-container",
    iconColor: "text-error",
    title: "Closing the Deal",
    description:
      "Master the final negotiation. Navigate procurement hurdles and secure signatures with high-stakes simulations.",
  },
];

export default function TrainingScenarios() {
  return (
    <section className="px-6 py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <span className="hidden md:block text-tertiary-fixed-dim font-bold tracking-[0.3em] uppercase text-xs mb-4">
            Simulation Library
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold font-headline text-primary mb-4 tracking-tight md:tracking-normal">
            Master Every Conversation
          </h2>
          <p className="hidden md:block text-on-surface-variant max-w-2xl mx-auto">
            Prepare for the full sales lifecycle with hyper-realistic voice
            simulations designed for Indian enterprise contexts.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCENARIOS.map((scenario) => (
            <ScenarioCard key={scenario.title} {...scenario} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScenarioCard({ icon, iconBg, iconColor, title, description }) {
  return (
    <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-outline-variant/10 md:border-0 md:shadow-none ghost-border hover:shadow-xl transition-all group">
      <div
        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${iconBg} md:bg-primary/5 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-colors`}
      >
        <span
          className={`material-symbols-outlined text-2xl md:text-3xl ${iconColor} md:text-current`}
        >
          {icon}
        </span>
      </div>
      <h4 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">
        {title}
      </h4>
      <p className="text-sm text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}
