const wizardSteps = [
  { label: "Goal and description", status: "completed" },
  { label: "Conversation dynamics", status: "completed" },
  { label: "Conversation generation", status: "active" },
  { label: "Conversation customization", status: "future" },
  { label: "Buyer persona generator", status: "future" },
  { label: "Learner group", status: "future" },
];

const checkpoints = [
  "Automated transcription of custom playbooks into AI persona behaviors.",
  "Real-time tone analysis and sentiment matching for immersive training.",
  "Multi-modal feedback including body language and objection handling.",
];

function WizardStep({ label, status }) {
  if (status === "completed") {
    return (
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <span
            className="material-symbols-outlined text-white text-xs"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check
          </span>
        </div>
        <span className="text-xs font-semibold text-primary">{label}</span>
      </div>
    );
  }
  if (status === "active") {
    return (
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center bg-white">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
        </div>
        <span className="text-xs font-bold text-primary">{label}</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full border border-outline-variant flex items-center justify-center"></div>
      <span className="text-xs font-medium text-on-surface-variant">
        {label}
      </span>
    </div>
  );
}

export default function CoachingFeature() {
  return (
    <>
      {/* Feature Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline font-extrabold text-primary text-4xl tracking-tight max-w-2xl">
            How our features enable your business case
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Coaching Session Generator Interface */}
          <div className="lg:col-span-8 bg-surface-container-low rounded-xl p-8 flex flex-col md:flex-row gap-8 items-stretch relative overflow-hidden">
            {/* Sidebar Wizard */}
            <div className="w-full md:w-64 flex flex-col gap-6 shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  settings_suggest
                </span>
                <span className="font-headline font-bold text-sm uppercase tracking-wider text-on-surface-variant">
                  Configuration
                </span>
              </div>
              <div className="space-y-4">
                {wizardSteps.map((step) => (
                  <WizardStep
                    key={step.label}
                    label={step.label}
                    status={step.status}
                  />
                ))}
              </div>
            </div>
            {/* Main Preview Area */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="relative rounded-xl overflow-hidden aspect-video shadow-2xl bg-on-background">
                <img
                  className="w-full h-full object-cover opacity-90"
                  alt="Professional female corporate persona in a modern office environment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT58NRVLkNm5Rhl0i_491ZtkHW520iL1184PU3AKIWX4n3-mjciEM6P5Dle1d1RKBZFBoFhq0kBKUnkzHG75b8WM5aTiMOIuEvslIvU1KYptbvFQRObdfJvpbf08vxO8-x0C2fVI1HLoc6RTGWkRN84_z7S9eiBGY6egDs8z5o9idSsly4Oo9DJsWXHKj-caWVMRRmLDCNNuYNBt9Uy4CYXARMufQKg5YE21hCwxjDbIhhXVZm3c9qFEa6aYDkp_Cjbm213daz_ts"
                />
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                {/* Timer Badge */}
                <div className="absolute top-4 right-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 bg-error rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold font-headline text-primary">
                    00:08:12 Elapsed time
                  </span>
                </div>
                {/* Controls */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        pause
                      </span>
                    </button>
                    <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">
                        mic_none
                      </span>
                    </button>
                  </div>
                  <div className="h-1 bg-white/30 flex-1 mx-6 rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary-fixed w-1/3"></div>
                  </div>
                </div>
              </div>
              {/* Action Bar */}
              <div className="flex items-center justify-between bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-tertiary-fixed/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary text-lg">
                      auto_awesome
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary">
                      AI Persona Ready
                    </p>
                    <p className="text-[10px] text-on-surface-variant">
                      Optimal simulation parameters met
                    </p>
                  </div>
                </div>
                <button className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-lg font-headline font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-lg">
                  <span>Send and start coaching</span>
                  <span className="material-symbols-outlined text-sm">
                    send
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Right Column: Text Content */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
              Coaching generator &amp; hub
            </div>
            <h3 className="font-headline font-bold text-3xl text-primary leading-tight mb-6">
              Create virtual role plays in 20+ languages in minutes, not weeks
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              With our flexible AI coaching generator, you can upload your sales
              documentation and turn any complex concept into an automated,
              high-impact AI role play with actionable feedback.
            </p>
            <ul className="space-y-5">
              {checkpoints.map((text) => (
                <li key={text} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[14px] text-on-tertiary-fixed font-bold">
                      check
                    </span>
                  </div>
                  <p className="text-sm font-medium text-on-surface leading-snug">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Counter (Asymmetric Layout) */}
      <section className="bg-primary py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-32">
          <div className="flex-1">
            <h4 className="font-headline text-tertiary-fixed text-5xl font-extrabold mb-4">
              40%
            </h4>
            <p className="text-white/70 font-medium">
              Faster onboarding for new sales associates using AI role-play
              simulators.
            </p>
          </div>
          <div className="flex-1 md:mt-12">
            <h4 className="font-headline text-tertiary-fixed text-5xl font-extrabold mb-4">
              12x
            </h4>
            <p className="text-white/70 font-medium">
              Increase in objection handling proficiency compared to traditional
              training.
            </p>
          </div>
          <div className="flex-1 md:mt-24">
            <h4 className="font-headline text-tertiary-fixed text-5xl font-extrabold mb-4">
              20+
            </h4>
            <p className="text-white/70 font-medium">
              Languages supported natively for global enterprise sales
              consistency.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
