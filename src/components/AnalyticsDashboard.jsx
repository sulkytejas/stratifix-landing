const features = [
  {
    icon: "analytics",
    title: "Real-time Insights",
    desc: "Surface deep behavioral patterns and competence gaps before they impact your quarterly revenue. Our AI maps every conversation to your ideal sales motion.",
  },
  {
    icon: "auto_fix_high",
    title: "Automated Coaching",
    desc: "Bridge the gap between training and execution. Measure how many times reps apply coached behaviors in live customer environments.",
  },
  {
    icon: "rocket_launch",
    title: "Business Velocity",
    desc: "Turn your best performers' DNA into a scalable team framework. Reduce ramp time for new hires by 40% through behavior-first onboarding.",
  },
];

export default function AnalyticsDashboard() {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">
      <div className="grid grid-cols-12 gap-8">
        {/* Left: Charts */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Performance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-semibold text-on-surface-variant font-headline">
                  Number of people coached
                </h3>
                <span className="text-tertiary-fixed-dim text-xs font-bold">
                  +12%
                </span>
              </div>
              <div className="h-32 flex items-end">
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#001944", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#001944", stopOpacity: 0 }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 35 Q 20 25 40 30 T 80 15 T 100 5"
                    fill="none"
                    stroke="#001944"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 35 Q 20 25 40 30 T 80 15 T 100 5 L 100 40 L 0 40 Z"
                    fill="url(#grad1)"
                    opacity="0.1"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-semibold text-on-surface-variant font-headline">
                  Ideal behavior adoption
                </h3>
                <span className="text-tertiary-fixed-dim text-xs font-bold">
                  84%
                </span>
              </div>
              <div className="h-32 flex items-end">
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  <path
                    d="M0 38 Q 10 32 20 34 T 40 28 T 60 22 T 80 12 T 100 5"
                    fill="none"
                    stroke="#44ddc1"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Learner activity funnel */}
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-semibold text-on-surface-variant mb-6 font-headline">
              Learner activity funnel
            </h3>
            <div className="space-y-4">
              {[
                { label: "Assigned", value: "1,240", width: "100%", pl: "" },
                { label: "Started", value: "982", width: "80%", pl: "pl-8" },
                {
                  label: "Completed",
                  value: "745",
                  width: "60%",
                  pl: "pl-16",
                },
              ].map((row) => (
                <div key={row.label} className={`relative ${row.pl}`}>
                  <div className="flex justify-between mb-1 text-xs font-medium px-2">
                    <span>{row.label}</span>
                    <span>{row.value}</span>
                  </div>
                  <div className="w-full h-8 bg-surface-container rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{
                        width: row.width,
                        opacity: row.label === "Started" ? 0.8 : row.label === "Completed" ? 0.6 : 1,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warmth and competence scatter */}
          <div className="relative bg-surface-container-lowest p-8 rounded-xl shadow-md border-l-4 border-tertiary-fixed-dim">
            <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
              <div>
                <h3 className="text-xl font-bold text-primary font-headline">
                  Warmth and competence
                </h3>
                <p className="text-sm text-on-surface-variant">
                  Behavioral alignment across global sales teams
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-semibold">
                  Q3 2024
                </span>
                <span className="material-symbols-outlined text-outline">
                  more_vert
                </span>
              </div>
            </div>
            <div className="relative h-96 w-full bg-[#fcfdfe] border border-outline-variant/30 rounded-lg overflow-hidden">
              {/* Quadrant Labels */}
              <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-bold text-outline">
                Transactional focus
              </div>
              <div className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-bold text-tertiary-fixed-dim">
                Trusted advisor
              </div>
              <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest font-bold text-error/50">
                Low warmth, low competence
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-widest font-bold text-outline">
                Relationship heavy
              </div>
              {/* Axes */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/20"></div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-outline-variant/20"></div>
              {/* Scatter Points */}
              <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-primary rounded-full opacity-30"></div>
              <div className="absolute top-[60%] left-[70%] w-2 h-2 bg-primary rounded-full opacity-40"></div>
              <div className="absolute top-[40%] left-[45%] w-4 h-4 bg-primary rounded-full opacity-25"></div>
              {/* Active Point with Tooltip */}
              <div className="absolute top-[15%] left-[80%]">
                <div className="w-5 h-5 bg-tertiary-fixed-dim rounded-full shadow-[0_0_15px_rgba(68,221,193,0.5)] animate-pulse"></div>
                <div className="absolute top-8 right-0 w-64 bg-primary text-white p-5 rounded-xl shadow-2xl z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="material-symbols-outlined text-tertiary-fixed-dim"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      groups
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wide">
                      Cohort: Senior AEs Central South
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-primary-fixed-dim">
                        Competence
                      </span>
                      <span className="text-sm font-bold">93%</span>
                    </div>
                    <div className="w-full h-1 bg-primary-container rounded-full overflow-hidden">
                      <div
                        className="h-full bg-tertiary-fixed-dim"
                        style={{ width: "93%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-primary-fixed-dim">
                        Warmth
                      </span>
                      <span className="text-sm font-bold">71%</span>
                    </div>
                    <div className="w-full h-1 bg-primary-container rounded-full overflow-hidden">
                      <div
                        className="h-full bg-tertiary-fixed-dim"
                        style={{ width: "71%" }}
                      ></div>
                    </div>
                    <div className="pt-2 flex items-center gap-2 text-[10px] font-medium text-primary-fixed">
                      <span className="material-symbols-outlined text-xs">
                        history
                      </span>
                      21 Coaching repetitions this month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text & Features */}
        <div className="col-span-12 lg:col-span-4 lg:pl-8">
          <div className="lg:sticky lg:top-24">
            <div className="mb-10">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-tertiary-fixed-dim bg-tertiary-container px-3 py-1 rounded-full mb-6 inline-block">
                Platform Impact
              </span>
              <h2 className="text-4xl font-extrabold text-primary font-headline leading-tight mb-8">
                Drive and measure engagement, skill development, and business
                impact
              </h2>
              <div className="space-y-8">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary">
                        {f.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface font-headline mb-2">
                        {f.title}
                      </h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Highlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-tertiary-fixed-dim opacity-10 rounded-full blur-3xl"></div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined">lightbulb</span>
                Executive Summary
              </h4>
              <p className="text-xs text-primary-fixed leading-relaxed opacity-90">
                Based on current adoption rates, the South Central cohort is
                projected to exceed their Q3 target by 14.5%. Focus coaching on
                "Closing Urgency" to maximize this momentum.
              </p>
              <button className="mt-4 w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold transition-colors">
                View Detailed Forecast
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
