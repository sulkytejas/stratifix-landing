import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-transparent opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white font-headline mb-8 tracking-tighter">
            Ready to transform your <br />
            <span className="text-tertiary-fixed-dim">sales DNA?</span>
          </h2>
          <p className="text-on-primary/70 text-xl max-w-2xl mx-auto mb-12">
            Join the elite sales organizations scaling their intelligence with
            Stratyfix AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/book-demo"
              className="px-10 py-5 bg-tertiary-fixed text-on-tertiary-fixed font-black rounded-lg shadow-2xl hover:scale-105 transition-all text-lg"
            >
              Book a Strategic Consultation
            </Link>
            <Link
              to="/pricing"
              className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all text-lg"
            >
              Explore Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
