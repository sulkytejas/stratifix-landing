export default function GuidedFeedback() {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">
      {/* Header */}
      <div className="mb-10">
        <span className="inline-block px-3 py-1 bg-primary-container text-on-primary-container text-[11px] font-bold tracking-widest uppercase rounded-full mb-4">
          Guided AI feedback
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-4 leading-tight font-headline">
          The AI coaches your sales reps and provides actionable feedback
        </h2>
        <p className="max-w-3xl text-on-surface-variant text-lg leading-relaxed">
          Stratyfix's AI coach conducts an extensive video analysis of sales
          reps' verbal and nonverbal behavior in role plays. It helps them
          develop self-awareness, warmth, and competence, ultimately
          transforming them into trusted advisors.
        </p>
      </div>

      {/* Dashboard */}
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Left Nav Rail */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
          <div className="p-6 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-3 text-primary font-bold text-sm mb-6">
              <span className="material-symbols-outlined">arrow_back</span>
              Guided AI Coaching
            </div>
            <div className="space-y-4">
              <div className="h-[1px] bg-outline-variant/20"></div>
              <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg border-l-4 border-primary">
                <span className="material-symbols-outlined text-primary">
                  analytics
                </span>
                <span className="text-sm font-semibold text-primary">
                  Performance Analysis
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high/40 rounded-lg transition-colors">
                <span className="material-symbols-outlined">history</span>
                <span className="text-sm">Session History</span>
              </div>
              <div className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high/40 rounded-lg transition-colors">
                <span className="material-symbols-outlined">target</span>
                <span className="text-sm">KPI Targets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Module */}
        <div className="col-span-12 lg:col-span-9 space-y-6">
          {/* Action Header */}
          <div className="flex flex-wrap justify-between items-center bg-surface-container-low px-6 py-4 rounded-xl border border-outline-variant/10 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-tertiary-fixed-dim rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-primary tracking-tight">
                LIVE ANALYSIS ACTIVE
              </span>
            </div>
            <div className="flex gap-4">
              {["Details", "Repeat", "Sessions"].map((label) => (
                <button
                  key={label}
                  className="px-5 py-2 text-[11px] font-extrabold tracking-widest text-on-surface-variant border border-outline-variant/30 rounded hover:bg-white transition-all uppercase"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Bento Analysis Shell */}
          <div className="grid grid-cols-12 gap-6">
            {/* Video Analysis Area */}
            <div className="col-span-12 xl:col-span-7 space-y-6">
              <div className="relative aspect-video bg-inverse-surface rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
                <img
                  alt="Learner in video session"
                  className="w-full h-full object-cover opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw6uuqDVRPg5fl_vojZGv4omLHjUaQRzRyQLlbIZ4XD0ZJINBX8rIq9Sa_T2hiY8cFspG8Web0mU-kHSU5AeD4ehiBynpOdxJhBheNDhcy2pSZrQHXvwQoIYZYW_hCfl7GRg6WIkM4jJO5Nl1-_4o3ws8DtCl3dftd_VXAeRfpz_n0Y0E102i3xJxCofcZvBzIvgENhmQlQVOcsmfHitjKrjTBBYBDKw8PgfwvyDgz3kG006naXUl6auL2Jtgaaf_fI2NN0ox4_gA"
                />
                {/* Video Overlays */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <span className="bg-primary/80 backdrop-blur px-3 py-1.5 rounded-lg text-white text-[11px] font-bold uppercase tracking-wider">
                    Learner
                  </span>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex flex-col items-center">
                    <span className="text-[10px] text-white/70 font-bold uppercase tracking-tighter">
                      Session Score
                    </span>
                    <span className="text-2xl font-black text-tertiary-fixed-dim">
                      84%
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-4 mb-4">
                    <button className="w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center transition-all">
                      <span
                        className="material-symbols-outlined text-white"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        play_arrow
                      </span>
                    </button>
                    <div className="flex-1 h-1.5 bg-white/20 rounded-full relative">
                      <div className="absolute top-0 left-0 w-2/3 h-full bg-tertiary-fixed-dim rounded-full"></div>
                      <div className="absolute -top-6 left-0 text-[10px] text-white/60 font-bold">
                        Beginning
                      </div>
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white/60 font-bold">
                        Main part
                      </div>
                      <div className="absolute -top-6 right-0 text-[10px] text-white/60 font-bold">
                        End
                      </div>
                    </div>
                    <span className="text-xs text-white/80 font-mono">
                      12:45 / 18:20
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl shadow-lg flex items-center justify-center gap-4 group hover:scale-[1.01] active:scale-[0.98] transition-all">
                <span className="text-sm font-extrabold tracking-widest uppercase">
                  Next Session: Value Selling
                </span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* AI Feedback Panel */}
            <div className="col-span-12 xl:col-span-5 flex flex-col bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm overflow-hidden">
              {/* Tabs */}
              <div className="flex bg-surface-container-low border-b border-outline-variant/20">
                <button className="flex-1 py-4 text-[11px] font-black tracking-[0.2em] text-primary border-b-2 border-primary bg-white uppercase">
                  AI Feedback
                </button>
                <button className="flex-1 py-4 text-[11px] font-black tracking-[0.2em] text-on-surface-variant hover:bg-surface-container-high transition-colors uppercase">
                  Transcript
                </button>
              </div>
              {/* Content */}
              <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                {/* Coach Intro */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-tertiary-fixed-dim">
                    <img
                      alt="AI Persona"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdcYQgM_RXzX0n9Ph8DBhCa_W2jUwbjwLS9_HQ-nc2_oFsC0hmoaf3KvnI-J66uqMBbZVk0br9sZG0B7rKVFFBChNCvg7zczNSLd2dIV0pA7NKbb5HTFq1t07nyFdoaY9A2fUJF2X2kSBRl5O3UaTi8J50wIQaWAJMDk2uOl_prg9vo6_A6fEx4BzYqfRmpTKo_LFQpRCCH0C2YyI0C7V4oyCUytsv1sSlH75ZG3WHwQfASqPX0Kl49OcUFT7ZjSci0eb8jhUma2M"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">
                      AI Coach
                    </p>
                    <div className="p-4 bg-surface-container rounded-2xl rounded-tl-none border border-outline-variant/10">
                      <p className="text-sm leading-relaxed text-on-surface">
                        You have created a good relationship with the customer,
                        but{" "}
                        <span className="font-bold text-primary">
                          3 key areas
                        </span>{" "}
                        need some improvement. Let's have a look at one specific
                        thing you said during the conversation.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Specific Feedback Card */}
                <div className="space-y-3 pl-14">
                  <div className="p-5 bg-primary-fixed/30 border border-primary-fixed-dim/50 rounded-2xl">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-primary italic">
                        "Well, this is a good question."
                      </span>
                      <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded font-mono">
                        03:16
                      </span>
                    </div>
                    <p className="text-sm text-on-surface-variant">
                      After your statement Joe started to doubt that you're
                      interested in her problems. But don't worry, we can make
                      it better together! An expert, for example, would have
                      handled it this way.
                    </p>
                  </div>
                </div>
                {/* CTA */}
                <div className="pt-4">
                  <button className="w-full py-4 border-2 border-dashed border-tertiary-fixed-dim bg-tertiary-fixed/5 text-on-tertiary-fixed font-bold text-xs rounded-xl flex items-center justify-center gap-3 hover:bg-tertiary-fixed/10 transition-colors uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">
                      rocket_launch
                    </span>
                    Start my guided AI-Coaching review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
