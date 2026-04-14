import { Link } from "react-router-dom";

export default function SalesDNA() {
  return (
    <section className="relative min-h-[900px] flex items-center overflow-hidden py-24">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-surface-container-low -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container -z-10 skew-x-[-12deg] translate-x-24 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/20 shadow-sm">
            <span
              className="material-symbols-outlined text-tertiary-fixed-dim text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">
              Persona Generation
            </span>
          </div>

          <h2 className="font-headline text-4xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tighter">
            Build hyper-realistic virtual clients that speak your customers'
            language – literally
          </h2>

          <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
            Create virtual twins of your real clients, complete with unique
            needs, pains, and behaviors, and bring them to life through video and
            phone role-plays, choosing from 93 photorealistic avatars, 38 voices,
            and 14+ languages to make every scenario feel real, wherever your
            team is in the world.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/book-demo"
              className="bg-gradient-to-br from-primary-container to-primary text-on-primary font-headline font-bold px-10 py-4 rounded-xl flex items-center gap-3 shadow-2xl hover:brightness-110 transition-all active:scale-95"
            >
              Start Coaching
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-outline-variant/30 text-primary font-semibold bg-white/50">
              <span className="material-symbols-outlined text-tertiary-fixed-dim">
                language
              </span>
              <span className="text-sm">14+ Languages Supported</span>
            </div>
          </div>

          {/* AI Insight Chip */}
          <div className="pt-8 flex items-center gap-6">
            <div className="h-[1px] w-12 bg-outline-variant/30"></div>
            <div className="flex items-center gap-3 bg-surface-container-lowest px-4 py-2 rounded-lg border border-tertiary-fixed-dim/30">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
              <span className="text-xs font-medium text-on-surface-variant uppercase tracking-widest">
                AI Intelligence Active
              </span>
            </div>
          </div>
        </div>

        {/* Right Content: Avatar Creation UI */}
        <div className="lg:col-span-6 relative h-[500px] sm:h-[600px] lg:h-[700px] w-full flex justify-center items-center">
          {/* Background Stack Card */}
          <div className="absolute w-[300px] sm:w-[350px] lg:w-[400px] h-[420px] sm:h-[480px] lg:h-[550px] bg-white rounded-[40px] shadow-2xl -rotate-6 translate-x-8 lg:translate-x-12 opacity-60 overflow-hidden">
            <img
              alt="Office background preview"
              className="w-full h-full object-cover blur-[2px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRwhX2z1l6fxEQWH0BhzVs5SjUN57l89s_GZqo0KfBszwEnohTAaRcUUlqTT_rCK2hBj09L-nepO3G-45twCYV8HHJeeMZwJeCMMWH8JPZsLGegR8BcUA2MnzUeWOuOLeklfqHYEkColMe9j9Hg11qXu6Xyyk6onmdCbQOQf6Aei6SkM_kiJazM_9SpbTFhCvLcAerLCQxfiCQhWZFaDQeuArBMlR1Cr63i3AxR7HSYxZWk2WsmyNeSgSSNxTCCugekYv80M4qqWU"
            />
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm shadow-md px-4 py-2 rounded-full flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">
                wallpaper
              </span>
              <span className="text-[10px] font-bold uppercase tracking-tight text-primary">
                Choose background
              </span>
            </div>
          </div>

          {/* Primary Avatar Selection Card */}
          <div className="relative w-[320px] sm:w-[370px] lg:w-[420px] h-[460px] sm:h-[530px] lg:h-[600px] bg-white rounded-[40px] shadow-2xl z-10 overflow-hidden border border-white/50">
            <img
              alt="Portrait of a smiling professional woman with curly hair"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Y_eURnPuEX_PAADh3EygVn0_ENFjgCYEWMmnAPbruWvo_p7WuLqgLFkSmnXBonx74qqdkrxpjw2-5Aqb9XJ0uBpeWvv5fHtBgUlI9dBVHFtQAZyfnabVrGlLvBnpqIyVBKlAIXhGAJfJQ2KXv25yKlqebHYq6E_7_KiFVSFDS-3DTg-6mkAk6UGeHNJtl_pH_bW3_cJtOkrYjwBx1q1J8QrnA4nNXeHY_poA-Kgx35cNetCqEUCW3-3kvyMg_qKwpG6LVuCewwQ"
            />

            {/* Floating Controls */}
            <div className="absolute top-1/3 left-4 sm:left-6 bg-white/90 backdrop-blur-sm shadow-md px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-tight text-primary">
                Choose avatar
              </span>
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </div>

            <div className="absolute top-1/2 right-4 sm:right-6 glass-panel px-4 py-3 rounded-full flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">
                groups
              </span>
              <span className="text-xs font-bold text-primary hidden sm:inline">
                Behavioral goals
              </span>
              <span className="material-symbols-outlined text-primary-container text-xl leading-none">
                add_circle
              </span>
            </div>

            {/* Overlay Brief Panel (Bottom) */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 glass-panel rounded-3xl p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">BHB</span>
                </div>
                <h3 className="font-headline font-bold text-primary text-sm">
                  Finalizing the electric vehicle purchase
                </h3>
              </div>
              <p className="text-[10px] text-on-surface-variant leading-relaxed mb-4 sm:mb-6">
                You need to provide Mrs. Andersen with a comprehensive overview
                of electric vehicle technology, highlighting its
                environmental...
              </p>
              <button className="w-full bg-gradient-to-br from-primary-container to-primary text-white py-3 rounded-xl font-bold text-xs shadow-lg">
                Start Coaching
              </button>
            </div>
          </div>

          {/* Decorative Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] opacity-20">
            <div className="w-full h-full rounded-full border border-primary-container animate-[ping_3s_linear_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Floating Voice Activity Indicator */}
      <div className="absolute bottom-12 right-12 glass-panel p-6 rounded-2xl shadow-2xl hidden md:block z-20">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-primary text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              graphic_eq
            </span>
            <span className="font-headline font-bold text-primary text-sm">
              Real-time Synthesis
            </span>
          </div>
          <div className="flex items-end gap-[3px] h-8">
            {[4, 6, 8, 5, 7, 3, 6].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-tertiary-fixed-dim rounded-full animate-pulse"
                style={{
                  height: `${h * 4}px`,
                  animationDuration: `${1 + i * 0.2}s`,
                }}
              />
            ))}
          </div>
          <p className="text-[10px] text-on-surface-variant tracking-widest uppercase font-bold">
            38 Premium Voices Active
          </p>
        </div>
      </div>
    </section>
  );
}
