const steps = [
  {
    num: "01",
    icon: "target",
    title: "Set goals",
    desc: "Define specific deal objectives, stakeholder personas, and technical complexities of your upcoming engagement.",
  },
  {
    num: "02",
    icon: "forum",
    title: "Simulate",
    desc: "Engage in high-fidelity vocal or text roleplay with AI that adapts its resistance levels based on your performance.",
  },
  {
    num: "03",
    icon: "insights",
    title: "Advice & insights",
    desc: "Receive instant post-action debriefs highlighting missed opportunities and refined narrative suggestions.",
  },
];

export default function StrategicLoop() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold font-headline mb-4">
            The Strategic Loop
          </h2>
          <p className="text-on-primary/60">
            Professional growth through systematic AI interaction.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <span className="text-5xl font-black text-white/10 absolute top-4 right-8">
                {step.num}
              </span>
              <div className="w-12 h-12 bg-tertiary-fixed-dim rounded-lg flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-on-primary/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
