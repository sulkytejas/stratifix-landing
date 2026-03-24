import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Features", href: "#features", active: true },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16 md:h-20">
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tighter text-primary font-headline"
        >
          Stratifix
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-headline font-medium text-sm tracking-tight">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-slate-600 hover:text-primary transition-colors hover:bg-slate-50 rounded-lg px-3 py-2"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/book-demo"
            className="bg-gradient-to-r from-primary to-primary-container text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all"
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary active:opacity-70 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-surface-container px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold font-headline text-on-surface-variant hover:text-primary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-surface-container space-y-3">
            <Link
              to="/book-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-gradient-to-r from-primary to-primary-container text-white py-3 rounded-xl text-sm font-bold text-center shadow-lg active:scale-95 transition-all"
            >
              Book Demo
            </Link>
          </div>
        </div>
      )}

      <div className="bg-slate-100 h-px w-full absolute bottom-0 opacity-20" />
    </nav>
  );
}
