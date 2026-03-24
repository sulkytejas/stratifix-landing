const COACHING_FEATURES = [
  {
    icon: "psychology_alt",
    title: "Deep Sentiment Analysis",
    description:
      "Understand how the customer actually felt during specific objection responses.",
  },
  {
    icon: "auto_awesome",
    title: "Auto-Generated Coaching Plans",
    description:
      "Personalized training paths based on performance gaps identified in real calls.",
  },
];

const rapportBars = [40, 55, 48, 75, 85, 100];

export default function AnalyticsEngine() {
  return (
    <section className="hidden md:block py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <ScoreCard
                score="84/100"
                label="Active Listening"
                percentage={84}
                color="bg-primary"
                textColor="text-primary"
              />
              <ScoreCard
                score="92/100"
                label="Objection Handling"
                percentage={92}
                color="bg-tertiary-fixed-dim"
                textColor="text-tertiary-fixed-dim"
              />

              <div className="col-span-2 bg-surface-container-lowest p-8 rounded-2xl ghost-border relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-xs font-bold text-on-surface-variant uppercase mb-4">
                    Rapport Building Trend
                  </div>
                  <div className="flex items-end gap-2 h-24">
                    {rapportBars.map((height, i) => {
                      let color = "bg-surface-variant";
                      if (i >= 3 && i < 5) color = "bg-primary";
                      if (i === 5) color = "bg-tertiary-fixed-dim";
                      return (
                        <div
                          key={i}
                          className={`flex-1 ${color} rounded-t-lg`}
                          style={{ height: `${height}%` }}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-4">
                  <span className="px-2 py-1 rounded bg-tertiary-fixed/10 text-tertiary-fixed-dim text-[10px] font-bold">
                    +12% WoW
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-tertiary-fixed-dim font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
              The Analytics Engine
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary mb-8 leading-tight">
              Quantify every soft skill with LLM precision.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Stop guessing how your team is performing. Our proprietary engine
              analyzes 200+ conversational markers to provide actionable scores
              on rapport, technical accuracy, and discovery depth.
            </p>

            <div className="flex flex-col gap-6">
              {COACHING_FEATURES.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreCard({ score, label, percentage, color, textColor }) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-2xl ghost-border">
      <div className={`text-3xl font-extrabold font-headline ${textColor} mb-1`}>
        {score}
      </div>
      <div className="text-xs font-bold text-on-surface-variant uppercase mb-4">
        {label}
      </div>
      <div className="h-1.5 w-full bg-surface-variant rounded-full">
        <div
          className={`h-full ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
