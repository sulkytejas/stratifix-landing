const INSIGHTS = [
  {
    icon: "graphic_eq",
    title: "Real-time Speech Metrics",
    description:
      "Precise measurement of talk-to-listen ratios, filler word frequency, speaking pace, and strategic silences.",
  },
  {
    icon: "auto_awesome",
    title: "LLM-Powered Insights",
    description:
      "Deep behavioral analysis of active listening, rapport construction, and the clarity of value articulation.",
  },
  {
    icon: "timeline",
    title: "Transcript Analysis",
    description:
      "Dynamic visualization of conversation flows identifying key moments where deals are won or lost.",
  },
];

export default function AdvancedAnalytics() {
  return (
    <section className="px-6 py-16 md:py-32 bg-surface-container md:bg-stratos-navy md:text-white overflow-hidden relative">
      <div className="hidden md:block absolute inset-0 opacity-10 radar-bg" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <h2 className="text-2xl font-extrabold tracking-tight font-headline text-primary mb-10 text-center">
            Advanced Sales Analytics
          </h2>
          <MobileAnalyticsCards />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col lg:flex-row gap-16 items-center mb-20">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-primary-fixed-dim text-xs font-bold mb-6 tracking-widest uppercase">
              Executive Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-8 leading-tight">
              Advanced Sales Analytics for{" "}
              <span className="text-tertiary-fixed-dim">Decision Makers</span>
            </h2>
            <p className="text-primary-fixed/70 text-lg leading-relaxed mb-10">
              The "Manager's Dashboard" translates voice data into strategic
              intelligence. Go beyond simple scoring with high-fidelity speech
              forensics and deep behavioral modeling.
            </p>

            <div className="space-y-8">
              {INSIGHTS.map((insight) => (
                <div key={insight.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-tertiary-fixed-dim">
                      {insight.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{insight.title}</h4>
                    <p className="text-sm text-primary-fixed/60">
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <DesktopAnalyticsGrid />
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileAnalyticsCards() {
  const sentimentBars = [40, 60, 85, 50, 95, 70];

  return (
    <div className="flex flex-col gap-4">
      {/* Skill Radar */}
      <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/10">
        <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-6">
          Skill Proficiency Matrix
        </h3>
        <div className="relative w-full aspect-square flex items-center justify-center">
          <div className="absolute inset-0 border border-dashed border-outline-variant/30 rounded-full" />
          <div className="absolute inset-[25%] border border-dashed border-outline-variant/30 rounded-full" />
          <div className="absolute inset-[50%] border border-dashed border-outline-variant/30 rounded-full" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] font-bold">
            DISCOVERY
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-bold">
            NEGOTIATION
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold">
            OBJECTIONS
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-[10px] font-bold">
            CLOSING
          </div>
          <div className="w-3/4 h-2/3 bg-tertiary-fixed/40 border-2 border-tertiary-fixed rounded-lg rotate-12" />
        </div>
      </div>

      {/* Sentiment Velocity */}
      <div className="bg-primary p-6 rounded-3xl text-on-primary">
        <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-6">
          Sentiment Velocity
        </h3>
        <div className="flex items-end gap-2 h-32 mb-4">
          {sentimentBars.map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-tertiary-fixed-dim rounded-t"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold font-headline">+14%</span>
          <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
            Vs Last Week
          </span>
        </div>
      </div>
    </div>
  );
}

function DesktopAnalyticsGrid() {
  const sentimentBars = [30, 45, 60, 55, 90, 85];

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Skill Radar */}
      <div className="col-span-2 md:col-span-1 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
        <div className="text-xs font-bold text-primary-fixed-dim uppercase mb-6 tracking-wider">
          Skill Proficiency Matrix
        </div>
        <div className="relative h-48 flex items-center justify-center">
          <div className="absolute inset-0 radar-bg rounded-full scale-90" />
          <svg className="w-40 h-40 drop-shadow-lg" viewBox="0 0 100 100">
            <polygon
              fill="none"
              points="50,10 85,35 75,85 25,85 15,35"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
            <polygon
              fill="rgba(68, 221, 193, 0.3)"
              points="50,25 75,45 65,75 35,75 25,45"
              stroke="#44ddc1"
              strokeWidth="1.5"
            />
          </svg>
          <div className="absolute top-0 text-[10px] font-bold">EMPATHY</div>
          <div className="absolute bottom-0 text-[10px] font-bold">
            CLOSING
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] font-bold">
            TECH
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold">
            ROI
          </div>
        </div>
      </div>

      {/* Sentiment Velocity */}
      <div className="col-span-2 md:col-span-1 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
        <div className="text-xs font-bold text-primary-fixed-dim uppercase mb-6 tracking-wider">
          Sentiment Velocity
        </div>
        <div className="h-48 flex flex-col justify-end gap-1">
          <div className="flex items-end gap-1 h-32">
            {sentimentBars.map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-tertiary-fixed-dim rounded-t-sm"
                style={{
                  height: `${height}%`,
                  opacity: 0.2 + (i / sentimentBars.length) * 0.8,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-primary-fixed/40 pt-2 font-bold uppercase">
            <span>Discovery</span>
            <span>Closing</span>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <MetricCard
        value="42%"
        label="Talk Ratio"
        barWidth="42%"
        barColor="bg-tertiary-fixed-dim"
      />
      <MetricCard
        value="1.2/min"
        label="Filler Frequency"
        barWidth="20%"
        barColor="bg-error"
      />
    </div>
  );
}

function MetricCard({ value, label, barWidth, barColor }) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
      <div className="text-3xl font-black text-white mb-1">{value}</div>
      <div className="text-[10px] font-bold text-primary-fixed-dim uppercase tracking-widest">
        {label}
      </div>
      <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full ${barColor}`} style={{ width: barWidth }} />
      </div>
    </div>
  );
}
