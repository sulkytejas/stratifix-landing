import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 bg-gradient-to-b from-surface-container-lowest to-surface md:bg-none">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="z-10 max-w-md md:max-w-none mx-auto md:mx-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed-dim/20 border border-tertiary-fixed-dim/30 md:bg-surface-container md:border-0 text-on-surface-variant text-[10px] md:text-xs font-bold mb-6 tracking-widest md:tracking-wide uppercase">
            <span className="hidden md:flex h-2 w-2 rounded-full bg-tertiary-fixed-dim animate-pulse" />
            AI Coaching v4.0
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-[1.1] text-primary mb-6 md:mb-8 tracking-tight md:tracking-tighter">
            Win every deal with{" "}
            <span className="ai-gradient-text md:inline">AI-powered</span>{" "}
            roleplay practice
            <span className="hidden md:inline">.</span>
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-8 md:mb-10 max-w-xl font-medium md:font-normal">
            Master discovery, overcome objections, and close enterprise deals
            with high-fidelity voice roleplays.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Link
              to="/book-demo"
              className="bg-gradient-to-r from-primary to-primary-container md:bg-none md:bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center md:justify-start gap-3 shadow-lg md:shadow-xl shadow-primary/10 hover:shadow-2xl transition-all active:scale-95 md:active:scale-100"
            >
              Book a Demo
              <span className="material-symbols-outlined hidden md:inline">
                arrow_forward
              </span>
            </Link>
            <a
              href="#features"
              className="bg-surface-container-highest md:bg-surface-container-lowest text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center md:justify-start gap-3 ghost-border md:ghost-border hover:bg-surface-container-low transition-all active:scale-95 md:active:scale-100"
            >
              View Features
            </a>
          </div>
        </div>

        <HeroCard />
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative -mx-6 md:mx-0 px-6 md:px-0">
      <div className="absolute -inset-4 bg-gradient-to-tr from-tertiary-fixed/20 to-primary/5 rounded-[2rem] blur-3xl hidden md:block" />
      <div className="relative glass-panel rounded-3xl md:rounded-[2rem] p-6 md:p-8 ghost-border shadow-[0_24px_48px_-12px_rgba(25,28,30,0.08)] md:shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-tertiary-fixed md:bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary md:text-primary">
                psychology
              </span>
            </div>
            <div>
              <div className="text-sm font-bold font-headline md:text-primary">
                AI Buyer: Sarah
              </div>
              <div className="text-[10px] md:text-xs text-on-surface-variant font-bold uppercase tracking-wider md:tracking-normal md:font-normal md:normal-case">
                Tone: Skeptical
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center md:gap-1">
            {/* Mobile: live feedback indicator */}
            <div className="w-2 h-2 rounded-full bg-error animate-pulse md:hidden" />
            <span className="text-[10px] font-bold uppercase tracking-widest md:hidden">
              Live Feedback
            </span>
            {/* Desktop: audio bars */}
            <span className="hidden md:block w-1 h-4 bg-tertiary-fixed-dim rounded-full" />
            <span className="hidden md:block w-1 h-8 bg-tertiary-fixed-dim rounded-full" />
            <span className="hidden md:block w-1 h-6 bg-tertiary-fixed-dim rounded-full" />
            <span className="hidden md:block w-1 h-10 bg-primary rounded-full" />
          </div>
        </div>

        {/* Mobile: Audio Visualizer */}
        <div className="flex items-end justify-center gap-1 h-24 mb-8 md:hidden">
          {[8, 12, 20, 16, 24, 14, 10].map((h, i) => (
            <div
              key={i}
              className="w-1 bg-tertiary-fixed-dim rounded-full"
              style={{ height: `${(h / 24) * 100}%` }}
            />
          ))}
        </div>

        {/* Desktop: Chat Bubbles */}
        <div className="hidden md:block space-y-6">
          <div className="bg-surface-container-low p-4 rounded-xl rounded-tl-none mr-12 text-sm text-on-surface-variant border-l-4 border-tertiary-fixed-dim">
            "The ROI isn't clear enough for us to commit this quarter. Can you
            explain the TCO over 3 years?"
          </div>
          <div className="bg-primary p-4 rounded-xl rounded-tr-none ml-12 text-sm text-on-primary font-medium">
            "I completely understand the focus on TCO. If we look at the
            automation efficiency gain..."
          </div>
        </div>

        {/* Emotion Detection */}
        <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 md:bg-transparent md:border-0 md:border-t md:border-outline-variant/20 md:rounded-none md:mt-8 md:pt-8 md:p-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-primary md:text-on-surface-variant flex items-center gap-2 uppercase tracking-tighter md:tracking-normal">
              <span className="material-symbols-outlined text-tertiary-fixed-dim md:text-current text-lg md:text-[16px]">
                mood
              </span>
              <span className="md:hidden">Emotion Detected</span>
              <span className="hidden md:inline">Emotion Detection</span>
            </span>
            <span className="hidden md:inline text-xs font-bold text-tertiary-fixed-dim uppercase">
              92% Confidence
            </span>
          </div>
          {/* Mobile: text insight */}
          <p className="text-sm text-on-surface italic md:hidden">
            "Sarah is showing signs of 'defensiveness' regarding pricing. Pivot
            to ROI analysis immediately."
          </p>
          {/* Desktop: progress bar */}
          <div className="hidden md:block w-full h-2 bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-tertiary-fixed-dim w-[92%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
