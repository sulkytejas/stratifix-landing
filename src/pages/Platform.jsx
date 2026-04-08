import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SessionGenerator from "../components/SessionGenerator";
import PersonaFeatures from "../components/PersonaFeatures";
import AIRoleplay from "../components/AIRoleplay";
import CoachingIntelligence from "../components/CoachingIntelligence";
import GuidedFeedback from "../components/GuidedFeedback";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import PortfolioPerformance from "../components/PortfolioPerformance";
import EnterpriseReadiness from "../components/EnterpriseReadiness";

const features = [
  {
    title: "Enterprise readiness",
    desc: "Scalable, global, and enterprise-ready infrastructure.",
    href: "#enterprise-readiness",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB93QzuqF6GXg6sozRn2rlwA4jtZk8BbzlVsX-HOQpGOx3mQ8v4h5QAAUmMxzreBD5P-gysQVJD_ya47qwbgqnMOelhZMhhosN3p3JXiqWgsSL0MgGGbZvLe8oosddJvcbkE_5_DtB4q7NiTuTJuDutds-PH1aCBSFX7ZazKE1hMQwx3kc1QtNIo9gQfULpX_vEoNefcZucaYBMi0j0C2tfIobv_vImPp5NU37Oty-tEbwbvrGBut1YZOea5DdubZ96PbZVl_FZ768",
    alt: "High-end corporate office building glass facade",
  },
  {
    title: "Session generator",
    desc: "Transform your ideas into AI-powered coaching content.",
    href: "#session-generator",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpIrI-J-SvmexAtlCEqXcWixfBGcRuX_Ioq13qie29J6fWzEzXL0LKn8Z1SVGy1LZuenLQcmQDWuY7d5u-8x7P6iy6UwKo6y8KcGfzgvkOHxM9RdGboBWovONtfnMbrOunTHGyTwGr9Z9ch_H-H_vgvlGzl2Kw5D1YeihGsVC3_D06DqZXxUpeMs90tlsmU7ij6GBN3gdNNIdy3rGzsO-oXzelW6RcSITwBfvZnAhRuTF3BpKZTvWXrbr9bOgNN7bU_EmkXOQZn-k",
    alt: "Modern sleek digital interface with futuristic graphs",
  },
  {
    title: "Persona generator",
    desc: "Create virtual twins of your customers and bring them to life.",
    href: "#persona-generator",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi7YgGt-fMdiz5Bk-fjcNJ7yeze0kMVD_YYYQgKccgYCSedyLLS72bcGaS-XWbnxE6LXyzh3zO_OxOTzgKRvbcvpLLfDNZpCfwSpZIALux6mqG1Wr1gWf0Q-rSNSr1O_bl-DHdt2ACEIe3CGZQRlytnMDhyDk2q1tLmWh-2CO8a098WvBKPtadUa4MNT1fyIxq3bEmc9iIxuasXSV3mdhJ1KCa6CMSTBHa_L5epA2E8waXXk5vEUMY4fv2KGq6zbEwesxUeXOL5JM",
    alt: "Realistic close-up portrait of a professional businessman",
  },
  {
    title: "AI role play",
    desc: "AI role playing to prepare your sales reps for one-shot-moments.",
    href: "#ai-roleplay",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNo0pfQzcYHE59J-a0BYhI-J2YNy43w3R2ulIS6Xhow1OzRNlQAoXPCkd2099yJEnPu6fx9u3mFz2fbPz0u4Qll3bRJYZd-87lN3mKLCIucAmYITm5HJ_7ARI-c7NXYQDXSZ3meGQhhP_8ncNP4Di2cykfsPdxQg56YD6gnd0JwJ9GwXWtUHR5FxvxABzc1HfwDUEWQU-klKcGTtHXLsGr69y-pikXdPBhdWsYqPNrJD-3nJac2EQnaC5lWF4V9pvjSA-IUl-pdeg",
    alt: "Two professionals in a modern office having a simulated conversation",
  },
  {
    title: "Guided AI feedback",
    desc: "The AI coaches your sales reps and provides actionable feedback.",
    href: "#guided-feedback",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOSO2QW8WG9Lfy1rZaN21pCW1Ib_hIXfQcWu2cb1OHjxaLGQk8zWginq5mVZPhO-XJgkmOjv3L7vCaN6fZGuUQlZoh8OHUHLds-MLeww5RurgflUg6z3rGK6u7RCVc06NyHbCmQ8xTqiPlA61jLnRyMJ2tQkTW6k1ljwExyM1Gzh2f7duuU-aia1Gt2TW7-LBgopNVLIPLlsOzl5iRm_lJ58Ux4Yndf_d6MGldnFEBZyyl0AfJU_lNieZA5Iym97H1wZfTX3ES2v0",
    alt: "A tablet displaying real-time feedback scores and coaching tips",
  },
  {
    title: "Analytics",
    desc: "Measure engagement, skill development, and business impact.",
    href: "#analytics",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYtObxUlNVQiwKZENIqPXSMC1xmpgYAFyuoozHMC3ZS1AJCJgmS4RRdmvdtjjzscBIRRkQ8uNw99Jh5hf4ZWKTYE9bsLk2dpgTgsfC989yaDhD5fW7ZSvYFfjSRQUa95A-F_ePIlZ4Ugglx2PYDkKHtBxZOU0bQSzTlXh-BvFb9mJErqav_g9ygpMJI4pHXaaowcDTaGSgTRJFdi0sYuvCd9NcQfGiq5gKib5OUHiktJspFyJorkhxxCCdvhkKesCI9A-c3MPtH8M",
    alt: "Dynamic data visualization dashboard showing growth metrics",
  },
];

export default function Platform() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-8 md:px-16 pt-16 pb-24 overflow-hidden">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left Text Column */}
          <div className="lg:col-span-5 z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tight font-headline">
              Explore Stratyfix's AI coaching platform
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              The all-in-one sales coaching solution for enterprises, from
              onboarding to fine-tuning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/book-demo"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-primary/20 transition-all"
              >
                Try for free
              </Link>
              <Link
                to="/book-demo"
                className="border border-outline-variant/30 px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface-container transition-all"
              >
                Book a demo
              </Link>
            </div>
          </div>

          {/* Right Visual Column (Video Preview) */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-tertiary-fixed/20 blur-3xl opacity-50 -z-10 rounded-full"></div>
            <div className="relative bg-surface-container-lowest rounded-[2rem] shadow-2xl shadow-on-surface/5 overflow-hidden border border-white/50">
              <div className="grid grid-cols-1 md:grid-cols-4 h-full">
                {/* Video Feed Area */}
                <div className="md:col-span-3 relative aspect-[4/3] bg-surface-container">
                  <img
                    className="w-full h-full object-cover grayscale-[0.2] contrast-110"
                    alt="Professional female executive engaged in a high-quality video call"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjAqI7hqiVSf69XTcqBO4rCr6gOWdbupQL5OmsNHPP8E5Ysr5YOCcvlLJFbsr2jpa7QdLRHbli8JQqGguZ7Itly2bde-r-KRutKq5vMEgY-5gqRj1C0_H9_r_YaGW_NpNGFonl-KdfMkg5cJ_iBiHxIB8YAP7pAZphHI-XOsHDPi4KxA5BnVoWTEYGVAfkPMYs2jUBHSo9vD7VTDlKDvVTQo5Yu2_0Uz6imYYERPtXijOEEoJSovZXdC_jQ9fgSF2_78qlY6brlnI"
                  />
                  {/* Overlay UI Elements */}
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <span className="bg-primary px-4 py-1.5 rounded-full text-[11px] font-bold text-white uppercase tracking-wider">
                      Beginning
                    </span>
                    <div className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></div>
                      <span className="text-white text-xs font-medium">
                        Recording Live
                      </span>
                    </div>
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-2xl">
                      <span
                        className="material-symbols-outlined text-4xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        play_arrow
                      </span>
                    </button>
                  </div>
                  {/* Bottom ID Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-lg p-4 rounded-2xl flex items-center justify-between border border-white/50 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white font-bold">
                          JM
                        </div>
                        <div>
                          <div className="text-sm font-bold text-primary">
                            Jacky Milston
                          </div>
                          <div className="text-[10px] text-on-surface-variant font-medium">
                            Enterprise Account Executive
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="material-symbols-outlined text-on-surface-variant text-xl">
                          mic
                        </span>
                        <span className="material-symbols-outlined text-on-surface-variant text-xl">
                          videocam
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Transcription Tab Area */}
                <div className="hidden md:flex flex-col bg-surface-container-low border-l border-outline-variant/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
                      Transcription
                    </h3>
                    <span className="material-symbols-outlined text-sm text-outline">
                      more_horiz
                    </span>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2 opacity-50">
                      <div className="h-2 w-1/3 bg-outline-variant rounded-full"></div>
                      <div className="h-2 w-full bg-outline-variant rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-1/4 bg-primary rounded-full"></div>
                      <div className="h-2 w-full bg-primary/20 rounded-full"></div>
                      <div className="h-2 w-3/4 bg-primary/20 rounded-full"></div>
                    </div>
                    <div className="space-y-2 opacity-30">
                      <div className="h-2 w-1/3 bg-outline-variant rounded-full"></div>
                      <div className="h-2 w-full bg-outline-variant rounded-full"></div>
                    </div>
                  </div>
                  <div className="mt-auto pt-6">
                    <div className="bg-tertiary-fixed/20 p-3 rounded-xl border border-tertiary-fixed-dim/30">
                      <span className="text-[10px] font-bold text-on-tertiary-fixed-variant uppercase mb-1 block">
                        AI Tip
                      </span>
                      <p className="text-[11px] text-on-tertiary-fixed leading-tight">
                        Emphasize the long-term ROI here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((f) => (
            <a
              key={f.title}
              href={f.href}
              className="group p-6 rounded-3xl bg-surface-container-low hover:bg-surface-container-lowest border border-transparent hover:border-outline-variant/20 transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform">
                <img
                  className="w-full h-full object-cover"
                  alt={f.alt}
                  src={f.img}
                />
              </div>
              <h4 className="text-sm font-bold text-primary mb-2">
                {f.title}
              </h4>
              <p className="text-[11px] text-on-surface-variant leading-relaxed">
                {f.desc}
              </p>
            </a>
          ))}
        </div>
      </main>

      <div id="session-generator">
        <SessionGenerator />
      </div>

      <div id="persona-generator">
        <PersonaFeatures />
      </div>

      <div id="ai-roleplay">
        <AIRoleplay />
      </div>

      <CoachingIntelligence />

      <div id="guided-feedback">
        <GuidedFeedback />
      </div>

      <div id="analytics">
        <AnalyticsDashboard />
        <PortfolioPerformance />
      </div>

      <div id="enterprise-readiness">
        <EnterpriseReadiness />
      </div>

      <Footer />
    </>
  );
}
