const tools = [
  {
    icon: "interactive_space",
    title: "Live AI Roleplay",
    desc: "Dynamic conversation simulations with adaptive personas.",
  },
  {
    icon: "psychology_alt",
    title: "Emotion Analysis",
    desc: "Micro-expression and tone tracking in real-time.",
  },
  {
    icon: "database",
    title: "RAG Engine",
    desc: "Instant retrieval of technical product documentation.",
  },
  {
    icon: "track_changes",
    title: "Objection Map",
    desc: "Visualizing path to 'Yes' through logical barriers.",
  },
  {
    icon: "query_stats",
    title: "KPI Projection",
    desc: "AI forecasting of deal probability and velocity.",
  },
  {
    icon: "verified",
    title: "Brand Compliance",
    desc: "Ensuring messaging stays within enterprise guardrails.",
  },
  {
    icon: "language",
    title: "Dialect Sync",
    desc: "Adapting vocabulary to specific regional nuances.",
  },
  {
    icon: "partner_reports",
    title: "Stakeholder IQ",
    desc: "Identifying decision-maker hierarchies instantly.",
  },
  {
    icon: "history_edu",
    title: "Call Synthesis",
    desc: "Automated high-level executive summaries.",
  },
  {
    icon: "shield",
    title: "Ethics Filter",
    desc: "Real-time prevention of non-compliant claims.",
  },
];

export default function CommandSuite() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold font-headline text-primary mb-4">
            The Command Suite
          </h2>
          <p className="text-on-surface-variant max-w-2xl">
            Ten specialized AI instruments engineered for the elite enterprise
            sales professional.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 hover:shadow-lg transition-all group"
            >
              <span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform">
                {tool.icon}
              </span>
              <h3 className="font-bold text-sm mb-2">{tool.title}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
