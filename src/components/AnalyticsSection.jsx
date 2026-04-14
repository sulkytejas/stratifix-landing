import { useState } from "react";

const categories = [
  {
    name: "Sales Training",
    title: "Retail Sales: Objection Handling & Upselling",
    subtitle:
      "Review how objection handling, empathy and persona-fit landed after the retail storage role-play.",
    overallScore: 50,
    scores: [
      { label: "Applied Knowledge", value: 50, color: "text-amber-500" },
      { label: "Active Listening", value: 25, color: "text-red-500" },
      { label: "Empathy", value: 75, color: "text-blue-600" },
      { label: "Confidence", value: 83, color: "text-blue-600" },
      { label: "Persona-Oriented\u2026", value: 25, color: "text-red-500" },
    ],
    opportunities: [
      {
        label: "Acknowledge the heavy storage demands of 4K video for her bakery",
        tag: "APPLIED KNOWLEDGE",
      },
      {
        label: "Validate her concern about keeping the phone for 3\u20134 years",
        tag: "APPLIED KNOWLEDGE",
      },
      {
        label: "Pitch the 256GB or 512GB model as a hassle-free investment",
        tag: "ACTIVE LISTENING",
      },
    ],
    moment: {
      time: "00:45",
      text: "The biggest overall lever is to validate her concern about keeping the phone for 3\u20134 years. This is the moment that currently limits the total impact most.",
    },
    replayTime: "00:00 / 03:12",
    replayImage: "/images/analytics/sales.jpeg",
    replayLabels: { left: "Virtual Client", right: "Sales Specialist" },
  },
  {
    name: "Product Training",
    title: "Product Training: Pharma New Drug Launch",
    subtitle:
      "See where product value, safety positioning and physician alignment held up in the new-drug launch role-play.",
    overallScore: 62,
    scores: [
      { label: "Applied Knowledge", value: 78, color: "text-blue-600" },
      { label: "Active Listening", value: 54, color: "text-amber-500" },
      { label: "Empathy", value: 58, color: "text-amber-500" },
      { label: "Confidence", value: 70, color: "text-blue-600" },
      { label: "Persona-Oriented\u2026", value: 47, color: "text-amber-500" },
    ],
    opportunities: [
      {
        label: "Acknowledge the doctor\u2019s comfort with current treatments",
        tag: "APPLIED KNOWLEDGE",
      },
      {
        label: "Highlight the specific safety profile improvements of the new drug",
        tag: "CONFIDENCE",
      },
      {
        label: "Provide a brief patient case study example",
        tag: "PERSONA-ORIENTED COMM",
      },
    ],
    moment: {
      time: "00:28",
      text: "The biggest overall lever is to highlight the specific safety profile improvements of the new drug. This is the moment that currently limits the total impact most.",
    },
    replayTime: "00:00 / 02:24",
    replayImage: "/images/analytics/product.jpeg",
    replayLabels: { left: "Virtual Client", right: "Pharma Rep" },
  },
  {
    name: "Leadership Training",
    title: "Leadership Training: Handling Employee Burnout",
    subtitle:
      "Review how your empathy, pacing and leadership presence came across in the burnout support conversation.",
    overallScore: 68,
    scores: [
      { label: "Applied Knowledge", value: 55, color: "text-amber-500" },
      { label: "Active Listening", value: 61, color: "text-blue-600" },
      { label: "Empathy", value: 44, color: "text-red-500" },
      { label: "Confidence", value: 72, color: "text-blue-600" },
      { label: "Persona-Oriented\u2026", value: 58, color: "text-amber-500" },
    ],
    opportunities: [
      {
        label: "Acknowledge their hard work and current stress levels",
        tag: "EMPATHY",
      },
      {
        label: "Ask open-ended questions to understand the root cause",
        tag: "ACTIVE LISTENING",
      },
      {
        label: "Collaborate on a plan to redistribute workload",
        tag: "CONFIDENCE",
      },
    ],
    moment: {
      time: "01:18",
      text: "The biggest overall lever is to ask open-ended questions to understand the root cause. This is the moment that currently limits the total impact most.",
    },
    replayTime: "00:00 / 03:06",
    replayImage: "/images/analytics/leadership.jpeg",
    replayLabels: { left: "Virtual Client", right: "Team Manager" },
  },
  {
    name: "Onboarding Training",
    title: "Sales Onboarding: B2B SaaS Mock Pitch",
    subtitle:
      "Check whether your cloud security pitch sounded like business value or like a feature dump in the onboarding role-play.",
    overallScore: 57,
    scores: [
      { label: "Applied Knowledge", value: 63, color: "text-blue-600" },
      { label: "Active Listening", value: 49, color: "text-amber-500" },
      { label: "Empathy", value: 52, color: "text-amber-500" },
      { label: "Confidence", value: 66, color: "text-blue-600" },
      { label: "Persona-Oriented\u2026", value: 38, color: "text-red-500" },
    ],
    opportunities: [
      {
        label: "Hook the prospect with a relevant industry challenge",
        tag: "PERSONA-ORIENTED COMM",
      },
      {
        label: "Introduce the cloud security module as the specific solution",
        tag: "APPLIED KNOWLEDGE",
      },
      {
        label: "End with a strong call to action or discovery question",
        tag: "CONFIDENCE",
      },
    ],
    moment: {
      time: "00:25",
      text: "The biggest overall lever is to introduce the cloud security module as the specific solution. This is the moment that currently limits the total impact most.",
    },
    replayTime: "00:00 / 01:48",
    replayImage: "/images/analytics/onboarding.jpeg",
    replayLabels: { left: "Virtual Client", right: "New Rep" },
  },
];

function ScoreRing({ value, size = "sm" }) {
  const color =
    value >= 60
      ? "text-blue-600"
      : value >= 45
      ? "text-amber-500"
      : "text-red-500";
  const bgColor =
    value >= 60
      ? "bg-blue-50 border-blue-200"
      : value >= 45
      ? "bg-amber-50 border-amber-200"
      : "bg-red-50 border-red-200";

  if (size === "lg") {
    return (
      <span
        className={`inline-flex items-center justify-center w-12 h-7 rounded-full text-sm font-extrabold border ${bgColor} ${color}`}
      >
        {value}%
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center justify-center w-11 h-6 rounded-full text-xs font-bold border ${bgColor} ${color}`}
    >
      {value}%
    </span>
  );
}

function OverallBar({ value }) {
  const greenW = Math.min(value, 50);
  const yellowW = Math.max(0, Math.min(value - 50, 25));
  return (
    <div className="flex items-center gap-1 mt-1">
      <div className="h-2.5 flex-1 bg-surface-variant rounded-full overflow-hidden flex">
        <div
          className="h-full bg-emerald-500 rounded-l-full"
          style={{ width: `${greenW}%` }}
        />
        <div
          className="h-full bg-amber-400"
          style={{ width: `${yellowW}%` }}
        />
      </div>
    </div>
  );
}

export default function AnalyticsSection() {
  const [activeCat, setActiveCat] = useState(3);
  const cat = categories[activeCat];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-on-primary py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-tertiary-fixed text-xs font-bold uppercase tracking-widest mb-6">
            Multimodal behavioral feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight font-headline">
            No other training platform{" "}
            <span className="text-tertiary-fixed">goes this deep</span>
          </h2>
          <p className="text-lg text-primary-fixed/80 max-w-3xl mx-auto">
            Stratyfix analyzes every role-play for verbal and nonverbal behavior,
            guides learners through their own recordings, showing them exactly
            what to improve and how &ndash; at a depth and scale no human
            trainer or any other solution can match.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 -mt-12 mb-20">

        {/* Analytics Card */}
        <div className="bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/10 overflow-hidden">
          {/* Card Header */}
          <div className="px-8 pt-8 pb-6">
            <div className="flex items-start gap-3 mb-1">
              <span className="material-symbols-outlined text-primary mt-0.5">
                videocam
              </span>
              <div>
                <h3 className="font-headline font-bold text-primary text-lg">
                  {cat.title}
                </h3>
                <p className="text-sm text-on-surface-variant mt-1">
                  {cat.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Scores Row */}
          <div className="px-8 pb-6">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {/* Overall Score */}
              <div className="p-4 rounded-xl border-2 border-primary/20 bg-primary/[0.02]">
                <div className="flex items-center justify-between mb-1">
                  <ScoreRing value={cat.overallScore} size="lg" />
                  <span className="material-symbols-outlined text-outline text-sm cursor-help">
                    info
                  </span>
                </div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-wider mt-2">
                  Overall Score
                </p>
                <OverallBar value={cat.overallScore} />
                <div className="flex justify-between mt-1">
                  <span className="text-[9px] text-on-surface-variant">
                    50%
                  </span>
                  <span className="text-[9px] text-on-surface-variant">
                    75%
                  </span>
                </div>
              </div>
              {/* Individual Scores */}
              {cat.scores.map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl border border-outline-variant/15 bg-surface-container-low"
                >
                  <div className="flex items-center justify-between mb-2">
                    <ScoreRing value={s.value} />
                    <span className="material-symbols-outlined text-outline text-sm cursor-help">
                      info
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-on-surface uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Opportunities */}
          <div className="px-8 pb-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-headline font-bold text-on-surface text-base">
                Top opportunities
              </h4>
              <span className="text-xs font-medium text-on-surface-variant border border-outline-variant/20 px-3 py-1 rounded-full">
                3 opportunities
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cat.opportunities.map((opp, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border-2 border-primary/15 bg-primary/[0.02] flex gap-3"
                >
                  <span className="text-sm font-bold text-primary mt-0.5">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-on-surface leading-snug mb-2">
                      {opp.label}
                    </p>
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full">
                        {opp.tag}
                      </span>
                      <span className="material-symbols-outlined text-outline text-xs cursor-help">
                        info
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Session Replay + Coaching Moments */}
          <div className="px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6">
              {/* Session Replay */}
              <div className="rounded-xl overflow-hidden bg-on-background relative">
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded z-10">
                  Session Replay
                </span>
                <div className="relative h-72">
                  <img
                    className="w-full h-full object-cover"
                    alt={`${cat.title} session replay`}
                    src={cat.replayImage}
                  />
                  <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {cat.replayLabels?.left || "Virtual Client"}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {cat.replayLabels?.right || "New Rep"}
                  </span>
                </div>
              </div>

              {/* Coaching Moments */}
              <div className="rounded-xl border border-outline-variant/15 bg-surface-container-low p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-headline font-bold text-primary text-base">
                    Coaching moments
                  </h4>
                  <span className="text-xs font-medium text-on-surface-variant border border-outline-variant/20 px-3 py-1 rounded-full">
                    1 moments
                  </span>
                </div>
                <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200/30 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                      <span className="text-sm font-bold font-mono text-on-surface">
                        {cat.moment.time}
                      </span>
                    </div>
                    <button className="w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-primary text-lg">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                  <p className="text-sm text-on-surface leading-relaxed">
                    {cat.moment.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap items-center justify-between mt-8">
          <div className="flex flex-wrap gap-6 border-b border-outline-variant/20 pb-1">
            {categories.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActiveCat(i)}
                className={`text-base pb-3 transition-colors ${
                  i === activeCat
                    ? "font-bold text-primary border-b-2 border-primary"
                    : "font-medium text-on-surface-variant hover:text-primary"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            {[
              { flag: "\ud83c\uddec\ud83c\udde7", code: "EN" },
              { flag: "\ud83c\udde9\ud83c\uddea", code: "DE" },
              { flag: "\ud83c\uddeb\ud83c\uddf7", code: "FR" },
              { flag: "\ud83c\uddea\ud83c\uddf8", code: "ES" },
            ].map((lang) => (
              <span
                key={lang.code}
                className="flex items-center gap-1 text-xs font-medium text-on-surface-variant"
              >
                <span>{lang.flag}</span>
                <span>{lang.code}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
