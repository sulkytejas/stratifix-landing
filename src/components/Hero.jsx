import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-24 pb-20 bg-surface">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase mb-6">
            The Intelligent Executive
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-primary tracking-tight leading-[1.1] mb-8">
            Authority in every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              sales narrative
            </span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
            Empower your leadership with AI-driven executive coaching. We
            transform technical sales data into strategic narratives that win
            enterprise deals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/book-demo"
              className="px-8 py-4 bg-primary text-on-primary rounded-md font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Book a Strategic Consultation
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-tertiary-fixed opacity-20 blur-[100px] rounded-full"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest p-4 aspect-square">
            <img
              className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              alt="Professional AI persona silhouette with digital data overlay"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoHw6i-Mc6_7307W8DjLct9XwEadhrf8PeJcGSzcxhSp4ge8PJEi8BSZhQrwUOgnKo2YQhPwrKDpI14VCZX6Kg94mGZ5j-HousKoauG5ZGuKPqGn0TtjaUHVVPRG02zI7dwCKQCB3opXIs9k0y_aptz8-lr_lDE_EKnWG7mIZ_WTXqmhl-KccNsjVG2ryM2TKP7IUGzn1J9ayHRP6_-yKsfu7zHfEy1arg9jPFZioTIfEOkjK3qllhDFBbz1IqXJZUMnn27nex4m4"
            />
            <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-xl border border-outline-variant/20">
              <div className="flex items-center gap-4 mb-3">
                <span
                  className="material-symbols-outlined text-tertiary-fixed-dim"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  graphic_eq
                </span>
                <span className="font-bold text-sm text-primary tracking-tighter">
                  AI ANALYSIS ACTIVE
                </span>
              </div>
              <p className="text-on-surface-variant text-sm italic">
                "Sentiment tracking detected a 22% increase in confidence during
                the negotiation phase."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
