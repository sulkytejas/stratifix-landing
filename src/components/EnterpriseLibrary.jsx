const templates = [
  {
    tag: "Sales",
    title: "Discovery & Qualification",
    desc: "Practice uncovering pain points and qualifying opportunities with realistic buyer personas.",
    uses: "2.4k",
  },
  {
    tag: "Onboarding",
    title: "First 90 Days Pitch Readiness",
    desc: "Get new hires pitch-ready with guided mock calls and real-time coaching feedback.",
    uses: "1.8k",
  },
  {
    tag: "Leadership",
    title: "Difficult Performance Conversations",
    desc: "Navigate sensitive feedback, burnout signals, and promotion discussions with empathy.",
    uses: "1.2k",
  },
  {
    tag: "Compliance",
    title: "Anti-Bribery & Ethics Scenarios",
    desc: "Train teams to recognize and handle ethical dilemmas under pressure.",
    uses: "950",
  },
  {
    tag: "Product",
    title: "Technical Value Positioning",
    desc: "Translate complex product features into business outcomes that resonate with buyers.",
    uses: "1.5k",
  },
  {
    tag: "Support",
    title: "Escalation De-escalation",
    desc: "Practice calming frustrated customers and turning complaints into loyalty moments.",
    uses: "1.1k",
  },
];

export default function EnterpriseLibrary() {
  return (
    <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold font-headline text-primary mb-4">
              Ready-to-Use Scenario Library
            </h2>
            <p className="text-on-surface-variant">
              Launch training in minutes with 50+ pre-built scenarios across
              every department.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((tpl) => (
            <div
              key={tpl.title}
              className="p-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 bg-surface-container text-xs font-bold rounded">
                  {tpl.tag}
                </div>
                <span className="material-symbols-outlined text-outline">
                  more_horiz
                </span>
              </div>
              <h4 className="font-bold text-lg mb-2">{tpl.title}</h4>
              <p className="text-sm text-on-surface-variant mb-6">{tpl.desc}</p>
              <div className="flex items-center gap-2 text-xs font-medium text-tertiary">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  bolt
                </span>{" "}
                {tpl.uses} sessions this month
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
