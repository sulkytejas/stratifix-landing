import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stats = [
  { icon: "groups", value: "12+", label: "Nationalities" },
  { icon: "psychology", value: "50+", label: "AI Models" },
  { icon: "location_on", value: "Mumbai", label: "HQ Base" },
];

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu9t4oeRlLMw5x2nLcZyPOzbHYJ0njqb2tuDut6IjQA-eGIut3D4YKTZAi8bj_Y4-EBC8UlJUL4a14a5bc_EP5B9sxFak49ruDE7mEzyd8zsG6pG-NeKLG9MJ8qa52umj70dbAJeLEZc0oIwPWsNdR5nNUXg0TMLXSiKWXsuGG8stIFTSwMLAU7_HAXKbxeWyKOrHYZMRpPEuxYD_yNvNsUgBEdxREpYQB-rGJpQwrxR5vwOMz7Nvcw4a2EGg0bVXChOtiLHSYxT0",
    alt: "Professional workspace with high-end technology",
    offset: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5u4E6vbpNF-2RzscYbhKBQKtCRMEDAoKE7HQ7EsxnrF3NCh1vqjZnP_tOwm1mZIB0psLAitZR4gm_6qlw3I_cjq6A3NKGid43AvjfIcMl_Yq23pU7gPD-06xKhjC3t_nlikjmN-kJT_bsY0ivyQLcDBCRyvvf2-PFnDGFwjPiVyKXYfZDp6FW6j5Cx01dz5kjSKQeFdyFqrzhLwXgdGDKXJMywyoNA2oZr1Mvv-DCCIJY9GKJtTR8Guu6MSytF4Do5TloqmJkp6w",
    alt: "Light reflecting through glass prisms in corporate blue tones",
    offset: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuATcwflMWycdSZKhZudCoGdyhdkDm3YHQn3a0Yh1YOMMZMX3lA3G6VZ9w7LwaMrtefnuEPOkI-Lsy2FdndniwjjaLPgZ7B9aGTc_QXXg-pcVJoqR47Ig8Mr7zKoTvuWECM640IIvsDS1qLtAZFPenIIlkrjYsc4snj2yHdt7aRqib6qzG_9t_Aa-a2LiWchxuIq5cdL-2z-f009VOEcT_BUGRXiSGX3UN53W95yBec07nEtyqqrbbsyIyjT7gmWVMTi90vjYfnFuUA",
    alt: "Diverse team working together on data visualizations",
    offset: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA433aITsL27aLD2HUSWEIA-UwaBv4xWeUxXhuaJJbHHk8bcw7IkqQ7R-CPJzsC9Ssf6JSC5CR4N75MO4xqylWoxFuE7yvGxEhBPfpxzpj5sXdJDDS18oP8eyvd0wxAnxbO2DzeiHm5qLbkikDGmsX3oaiMYeUC_3R2iuEQHJZJO_la5c4BPifDlPGAEmSwCyUTlvSQAE2HGiE-dgkLtlT_cznjVO6vJ9oQO3QseJ7MCPFSdENT6WN32oXRexHz7KRlXeaRWgi4O2U",
    alt: "Modern high-tech office building architecture",
    offset: true,
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[614px] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Diverse team collaborating in a modern office"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-wWQr02T5hFW52GZHXbNFTdKpX_0JyVipS3ANuBidPzGXK5iH2Bmk2F-dvzJAw00ZWy-M_g1Y9BQf3_LhUXTRBA1p3ttkSJPzvBeqNtys6Ywe4hKgouuSctwwu2TxaFfVwxSW65rlPKyZZ3vRNm9obM8TR2gRlC37hQU4KoLKHA-fQ9jDKpFHKAH1wXwCCX0KGdn9kfhEn-CHETV80Hnzbfj9ZQOPibuglyWyTJTfvF8GaY8d-ExSpjX3xmttIAJqwysIKpW6h4o"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase">
              Our Mission
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tighter leading-none mb-4 font-headline">
              About Us
            </h1>
            <div className="w-24 h-1.5 bg-tertiary-fixed-dim rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-[1.1] tracking-tight font-headline">
                The minds behind the AI coaching platform
              </h2>
              <div className="mt-12 p-8 bg-surface-container-low rounded-xl border-l-4 border-tertiary-fixed-dim">
                <p className="text-on-surface-variant italic text-lg font-medium leading-relaxed">
                  "Technology is just the tool. The collective intelligence of
                  our diverse team is the catalyst for real executive
                  transformation."
                </p>
              </div>
            </div>
            {/* Right */}
            <div className="lg:col-span-7 space-y-8">
              <div className="text-xl leading-relaxed text-on-surface-variant">
                <p className="mb-6">
                  Stratyfix is the company behind the leading AI coaching
                  platform. And who is behind Stratyfix? A lot of different
                  people:{" "}
                  <span className="text-primary font-semibold">
                    psychologists, data scientists, AI specialists, business
                    experts
                  </span>{" "}
                  and many more.
                </p>
                <p className="mb-6">
                  Stratyfix has employees from over a dozen countries with many
                  different backgrounds. Each of them makes Stratyfix what it is
                  today: a platform dedicated to providing the best possible
                  coaching experience, always changing, always improving.
                </p>
              </div>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-primary mb-3">
                      {s.icon}
                    </span>
                    <div className="text-2xl font-bold text-primary">
                      {s.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diversity Gallery */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold text-primary tracking-tight mb-4 font-headline">
                Built on Diversity
              </h3>
              <p className="text-on-surface-variant">
                Our team's multi-disciplinary background allows us to approach
                AI from a human-centric perspective, blending behavioral science
                with cutting-edge engineering.
              </p>
            </div>
            <button className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-3 rounded-md font-bold tracking-tight hover:brightness-110 transition-all flex items-center gap-2">
              View Openings{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {galleryImages.map((img) => (
              <div
                key={img.alt}
                className={`aspect-[3/4] rounded-2xl overflow-hidden group ${
                  img.offset ? "md:mt-12" : ""
                }`}
              >
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt={img.alt}
                  src={img.src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
