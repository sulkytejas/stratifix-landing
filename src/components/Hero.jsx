import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-24 pb-20 bg-surface">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase mb-6">
            AI-Powered Training Platform
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-primary tracking-tight leading-[1.1] mb-8">
            Train any team for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              any conversation
            </span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
            From sales and onboarding to leadership and compliance — Stratyfix
            uses lifelike AI role-play to prepare your people for the
            conversations that matter most.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/book-demo"
              className="px-8 py-4 bg-primary text-on-primary rounded-md font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-tertiary-fixed opacity-20 blur-[100px] rounded-full"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest p-4 aspect-[4/5] sm:aspect-square">
            <video
              className="w-full h-full object-cover rounded-xl"
              src="/videos/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
