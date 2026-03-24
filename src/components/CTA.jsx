import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="hidden md:block py-32 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-tertiary-fixed/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold font-headline text-white mb-8">
          Start Scaling Your Sales Team Today
        </h2>
        <p className="text-on-primary/70 text-xl mb-12 max-w-2xl mx-auto">
          Join 200+ Indian enterprise teams using AI to build their next
          generation of sales leaders.
        </p>
        <Link
          to="/book-demo"
          className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-12 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-tertiary-fixed-dim transition-all active:scale-95"
        >
          Start Your 14-Day Free Trial
        </Link>
      </div>
    </section>
  );
}
