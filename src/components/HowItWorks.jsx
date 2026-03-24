const STEPS = [
  {
    number: 1,
    title: "Practice",
    mobileTitle: "Define Your Scenario",
    description:
      "Engage in lifelike voice conversations with our AI buyer personas tailored to your product.",
    mobileDescription:
      "Select an industry, prospect title, and specific deal stage to simulate.",
    highlighted: true,
  },
  {
    number: 2,
    title: "Feedback",
    mobileTitle: "Live Roleplay",
    description:
      "Receive instant, objective scoring on your delivery, empathy, and product knowledge.",
    mobileDescription:
      "Speak naturally with the AI. It reacts in real-time to your tone, speed, and word choice.",
    highlighted: true,
  },
  {
    number: 3,
    title: "Master",
    mobileTitle: "Analyze & Iterate",
    description:
      "Iterate and refine until your pitch is pitch-perfect. Scale best practices across the entire team.",
    mobileDescription:
      "Review a timestamped transcript with actionable AI coaching notes to improve.",
    highlighted: true,
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold font-headline text-primary mb-4 tracking-tight md:tracking-normal">
            Path to Mastery
          </h2>
          <p className="hidden md:block text-on-surface-variant">
            Simple to deploy, transformational for results.
          </p>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="flex flex-col gap-12 relative md:hidden">
          {STEPS.map((step) => (
            <div key={step.number} className="flex gap-6 relative z-10">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-on-primary font-bold text-xl font-headline">
                {step.number}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">{step.mobileTitle}</h4>
                <p className="text-sm text-on-surface-variant">
                  {step.mobileDescription}
                </p>
              </div>
            </div>
          ))}
          {/* Connecting Line */}
          <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-surface-container-highest -z-0" />
        </div>

        {/* Desktop: Horizontal Steps */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[2px] bg-surface-container-high -z-10" />

          {STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div
                className={`w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center text-3xl font-black shadow-2xl ${
                  step.number === 1
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-lowest ghost-border text-primary"
                }`}
              >
                {step.number}
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">
                {step.title}
              </h4>
              <p className="text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
