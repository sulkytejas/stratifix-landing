import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SolutionPage({ data }) {
  const {
    hero,
    metrics,
    challenge,
    testimonial,
    mastery,
    features,
    impact,
    faqs,
  } = data;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-xs font-semibold tracking-wider uppercase">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              {hero.badge}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight font-headline">
              {hero.title}{" "}
              <span className="text-on-tertiary-container">
                {hero.titleHighlight}
              </span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
              {hero.description}
            </p>
            <div className="flex gap-4">
              <Link
                to="/book-demo"
                className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold shadow-2xl hover:translate-y-[-2px] transition-all"
              >
                Request Demo
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary-container rounded-[2rem] rotate-3 opacity-5"></div>
            <img
              className="relative z-10 w-full h-[500px] object-cover rounded-[2rem] shadow-2xl"
              alt={hero.imageAlt}
              src={hero.image}
            />
            <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl shadow-xl z-20 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="material-symbols-outlined text-tertiary-fixed-dim"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  trending_up
                </span>
                <span className="text-sm font-bold text-primary">
                  Live Insight
                </span>
              </div>
              <p className="text-xs text-on-surface-variant italic">
                {hero.insightQuote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-surface-container-low py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {metrics.map((m) => (
              <div key={m.label} className="space-y-2">
                <div className="font-headline text-4xl font-extrabold text-primary">
                  {m.value}
                </div>
                <div className="text-sm text-on-surface-variant font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-2xl mb-20">
            <h2 className="font-headline text-4xl font-bold text-primary mb-6">
              {challenge.title}
            </h2>
            <p className="text-lg text-on-surface-variant">
              {challenge.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-error-container flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-on-error-container">
                    warning
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  {challenge.card1.title}
                </h3>
                <p className="text-on-surface-variant">
                  {challenge.card1.description}
                </p>
              </div>
              <div className="mt-12 h-32 bg-surface-container-low rounded-xl overflow-hidden flex items-end px-4 gap-2">
                <div className="w-full bg-outline-variant opacity-20 h-1/2 rounded-t"></div>
                <div className="w-full bg-outline-variant opacity-20 h-2/3 rounded-t"></div>
                <div className="w-full bg-primary h-3/4 rounded-t"></div>
                <div className="w-full bg-outline-variant opacity-20 h-1/2 rounded-t"></div>
                <div className="w-full bg-tertiary-fixed-dim h-full rounded-t"></div>
              </div>
            </div>
            <div className="bg-primary text-on-primary p-10 rounded-[2rem]">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">
                {challenge.card2.title}
              </h3>
              <p className="text-white/70">{challenge.card2.description}</p>
              <div className="mt-20 flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-300"></div>
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-500"></div>
                <div className="w-10 h-10 rounded-full border-2 border-primary bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-fixed text-xs font-bold">
                  +2k
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <blockquote className="font-headline text-3xl font-medium text-primary leading-snug mb-10">
            "{testimonial.quote}"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img
              className="w-16 h-16 rounded-full object-cover"
              alt={testimonial.name}
              src={testimonial.avatar}
            />
            <div className="text-left">
              <div className="font-bold text-primary">{testimonial.name}</div>
              <div className="text-sm text-on-surface-variant">
                {testimonial.role}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mastery Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  className="w-full h-80 object-cover rounded-3xl shadow-lg"
                  alt={mastery.image1Alt}
                  src={mastery.image1}
                />
                <img
                  className="w-full h-80 object-cover rounded-3xl mt-12 shadow-lg"
                  alt={mastery.image2Alt}
                  src={mastery.image2}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="font-headline text-4xl font-bold text-primary">
                {mastery.title}
              </h2>
              <p className="text-lg text-on-surface-variant">
                {mastery.description}
              </p>
              <ul className="space-y-4">
                {mastery.checkpoints.map((cp) => (
                  <li key={cp} className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined text-tertiary-fixed-dim"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-medium text-primary">{cp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-headline text-4xl font-bold text-white mb-6">
              {features.title}
            </h2>
            <p className="text-white/60 text-lg">{features.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.items.map((f) => (
              <div
                key={f.title}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all"
              >
                <span className="material-symbols-outlined text-tertiary-fixed-dim mb-6 block text-3xl">
                  {f.icon}
                </span>
                <h4 className="font-headline text-xl font-bold text-white mb-3">
                  {f.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact/Measurement */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="font-headline text-4xl font-bold text-primary">
                {impact.title}
              </h2>
              <p className="text-lg text-on-surface-variant">
                {impact.description}
              </p>
              <div className="space-y-6">
                {impact.bars.map((bar) => (
                  <div
                    key={bar.label}
                    className="p-6 bg-surface-container rounded-2xl"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-primary">
                        {bar.label}
                      </span>
                      <span className="text-sm font-bold text-tertiary-container">
                        {bar.value}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                      <div
                        className="h-full bg-tertiary-fixed-dim"
                        style={{ width: bar.width }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                className="w-full rounded-[2.5rem] shadow-2xl border-8 border-surface-container"
                alt={impact.imageAlt}
                src={impact.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="font-headline text-4xl font-bold text-primary text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={faq.question}
                className="group bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10"
                open={i === 0}
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-bold text-primary">{faq.question}</span>
                  <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 text-on-surface-variant text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
