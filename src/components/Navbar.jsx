import { useState } from "react";
import { Link } from "react-router-dom";

const industries = [
  { label: "Technology", to: "/solutions/technology" },
  { label: "Telecommunications", to: "/solutions/telecommunications" },
];
const useCases = [
  { label: "AI Sales Training", to: "/solutions/ai-sales-training" },
  { label: "Leadership Coaching", to: "/solutions/leadership-coaching" },
  { label: "Onboarding", to: "/solutions/onboarding" },
  { label: "Customer Service Training", to: "/solutions/customer-service-training" },
];

export default function Navbar() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <header className="w-full top-0 sticky z-50 bg-[#f7f9fb] dark:bg-slate-900">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tighter text-[#001944] dark:text-white font-headline"
        >
          Stratyfix
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-headline text-sm font-medium tracking-tight">
          <Link
            className="text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white transition-colors"
            to="/platform"
          >
            Platform
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors ${
                solutionsOpen
                  ? "text-[#001944] dark:text-white"
                  : "text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white"
              }`}
            >
              Solutions
              <span
                className={`material-symbols-outlined text-base transition-transform ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-outline-variant/20 p-8 flex gap-16 min-w-[420px]">
                  <div>
                    <h4 className="text-xs font-bold text-[#001944] dark:text-white uppercase tracking-wider mb-4">
                      Industries
                    </h4>
                    <div className="flex flex-col gap-3">
                      {industries.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="text-sm text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white transition-colors font-medium"
                          onClick={() => setSolutionsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#001944] dark:text-white uppercase tracking-wider mb-4">
                      Use cases
                    </h4>
                    <div className="flex flex-col gap-3">
                      {useCases.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="text-sm text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white transition-colors font-medium"
                          onClick={() => setSolutionsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors ${
                aboutOpen
                  ? "text-[#001944] dark:text-white"
                  : "text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white"
              }`}
            >
              About us
              <span
                className={`material-symbols-outlined text-base transition-transform ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {aboutOpen && (
              <div className="absolute top-full right-0 pt-2">
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-outline-variant/20 p-6 min-w-[200px]">
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/about"
                      className="text-sm text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white transition-colors font-medium"
                      onClick={() => setAboutOpen(false)}
                    >
                      About Stratyfix
                    </Link>
                    <Link
                      to="/pricing"
                      className="text-sm text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white transition-colors font-medium"
                      onClick={() => setAboutOpen(false)}
                    >
                      Pricing
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/book-demo"
            className="hidden md:inline-flex px-6 py-2.5 bg-primary text-white rounded-md font-semibold text-sm hover:opacity-90 active:scale-95 duration-150 transition-all"
          >
            Get Started
          </Link>
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#001944] dark:bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#001944] dark:bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#001944] dark:bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden bg-[#f7f9fb] dark:bg-slate-900 border-t border-[#f2f4f6] dark:border-slate-800 px-8 py-6 flex flex-col gap-4 font-headline text-sm font-medium tracking-tight">
          <Link
            className="text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white transition-colors py-2"
            to="/platform"
            onClick={() => setMobileOpen(false)}
          >
            Platform
          </Link>
          <div>
            <button
              className="flex items-center gap-1 text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white transition-colors py-2 w-full"
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
            >
              Solutions
              <span
                className={`material-symbols-outlined text-base transition-transform ${
                  mobileSolutionsOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {mobileSolutionsOpen && (
              <div className="pl-4 flex flex-col gap-3 mt-2">
                <p className="text-xs font-bold text-[#001944] dark:text-white uppercase tracking-wider">Industries</p>
                {industries.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-sm text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="text-xs font-bold text-[#001944] dark:text-white uppercase tracking-wider mt-2">Use cases</p>
                {useCases.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-sm text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              className="flex items-center gap-1 text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white transition-colors py-2 w-full"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            >
              About us
              <span
                className={`material-symbols-outlined text-base transition-transform ${
                  mobileAboutOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {mobileAboutOpen && (
              <div className="pl-4 flex flex-col gap-3 mt-2">
                <Link
                  to="/about"
                  className="text-sm text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  About Stratyfix
                </Link>
                <Link
                  to="/pricing"
                  className="text-sm text-[#454652] dark:text-slate-400 hover:text-[#001944] dark:hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Pricing
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/book-demo"
            className="mt-2 px-6 py-2.5 bg-primary text-white rounded-md font-semibold text-sm hover:opacity-90 active:scale-95 duration-150 transition-all text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      )}
      <div className="bg-[#f2f4f6] dark:bg-slate-800 h-[1px] w-full"></div>
    </header>
  );
}
