const MOBILE_FEATURES = [
  {
    icon: "person_search",
    title: "Realistic Buyer Personas",
    description:
      "AI tuned to mimic C-suite executives, procurement leads, and skeptical managers.",
  },
  {
    icon: "monitoring",
    title: "Real-time Emotion Detection",
    description:
      "Get notified the instant your tone shifts from confident to apologetic.",
  },
  {
    icon: "model_training",
    title: "Adaptive Coaching",
    description:
      "The AI learns your weaknesses and increases difficulty as you improve.",
  },
  {
    icon: "lock",
    title: "Enterprise Grade Security",
    description:
      "SOC2 compliant environment where your data is never used for training models.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-20 md:text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-primary mb-4 tracking-tight md:tracking-normal">
            Elite Coaching Features
          </h2>
          <div className="w-16 h-1 bg-tertiary-fixed-dim md:hidden" />
          <p className="hidden md:block text-on-surface-variant max-w-2xl mx-auto">
            Built for the modern B2B sales cycle where every interaction counts.
          </p>
        </div>

        {/* Mobile: List Layout */}
        <div className="flex flex-col gap-10 md:hidden">
          {MOBILE_FEATURES.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl shrink-0">
                {feature.icon}
              </span>
              <div>
                <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Bento Grid */}
        <div className="hidden md:grid grid-cols-12 gap-6">
          {/* Feature 1 - AI Buyer Personas */}
          <div className="col-span-8 bg-surface-container-lowest p-10 rounded-[2rem] ghost-border group hover:bg-surface-container transition-all">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim mb-6">
                  face_6
                </span>
                <h3 className="text-2xl font-bold font-headline text-primary mb-4">
                  Realistic AI Buyer Personas
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Practice against 50+ industry-specific personas, from
                  skeptical CFOs to visionary CTOs, each with their own unique
                  negotiation style and cultural nuances.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-semibold text-primary">
                    <span className="material-symbols-outlined text-[18px]">
                      check_circle
                    </span>
                    Vertical-specific pain points
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-primary">
                    <span className="material-symbols-outlined text-[18px]">
                      check_circle
                    </span>
                    Dynamic objection engine
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-surface-container rounded-3xl overflow-hidden relative">
                <img
                  className="w-full h-full object-cover opacity-80"
                  alt="Abstract visualization of diverse business professional silhouettes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnT05-n5eU7HLO58kFntAjTNhvv4vZLLwC13MP6sfR9PBAJY6ehCBRV13RaY9m2VvOUMKzqm8Mg2NVY8mSV2ikS74KPFvYrMz-WQ5AWu7SaG6l2NlrobuE2Rdx5FY7o4bCFRCfCRrPrG4sRgIh2MtjAxPcE4LvvQF6VpFmoK447jBEpj3u5IDe_vaFhAggQAQIQgEfxJuqfGTRndYm1wcmDY-fdZmmhtztI29f0wqTUqWzgpWAMGhT3MyygnMrrAFoYVSYggLPp3E"
                />
              </div>
            </div>
          </div>

          {/* Feature 2 - Emotion Detection */}
          <div className="col-span-4 bg-primary p-10 rounded-[2rem] text-on-primary">
            <span className="material-symbols-outlined text-4xl text-tertiary-fixed mb-6">
              analytics
            </span>
            <h3 className="text-2xl font-bold font-headline mb-4">
              Real-time Emotion Detection
            </h3>
            <p className="text-on-primary/80 leading-relaxed mb-8">
              Powered by Hume AI to measure rapport, sentiment, and buying
              signals through vocal prosody.
            </p>
            <div className="space-y-4">
              <div className="h-1 bg-on-primary/10 rounded-full w-full">
                <div className="h-full bg-tertiary-fixed w-3/4" />
              </div>
              <div className="h-1 bg-on-primary/10 rounded-full w-full">
                <div className="h-full bg-tertiary-fixed w-1/2" />
              </div>
              <div className="h-1 bg-on-primary/10 rounded-full w-full">
                <div className="h-full bg-tertiary-fixed w-5/6" />
              </div>
            </div>
          </div>

          {/* Feature 3 - Adaptive Coaching */}
          <div className="col-span-4 bg-surface-container-high p-10 rounded-[2rem]">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">
              psychology
            </span>
            <h3 className="text-2xl font-bold font-headline text-primary mb-4">
              Adaptive Coaching
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              The system learns your weaknesses and dynamically adjusts roleplay
              difficulty to push your limits.
            </p>
          </div>

          {/* Feature 4 - Enterprise Security */}
          <div className="col-span-8 bg-surface-container-lowest p-10 rounded-[2rem] ghost-border flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-headline text-primary mb-4">
                Enterprise Grade Security
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                SOC2 Type II compliant with dedicated data residency in India.
                Your conversations are yours alone.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  security
                </span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  encrypted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
