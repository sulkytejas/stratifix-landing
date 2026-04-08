import { Link } from "react-router-dom";

const FOOTER_COLUMNS = [
  {
    title: "Why Stratyfix",
    links: [
      { label: "AI coaching platform", to: "/platform" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Technology", to: "/solutions/technology" },
      { label: "Telecommunications", to: "/solutions/telecommunications" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "AI Sales Training", to: "/solutions/ai-sales-training" },
      { label: "Onboarding", to: "/solutions/onboarding" },
      { label: "Leadership Coaching", to: "/solutions/leadership-coaching" },
      {
        label: "Customer Service Training",
        to: "/solutions/customer-service-training",
      },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary w-full">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-10">
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-1">
          <Link
            to="/"
            className="text-2xl font-bold text-white font-headline mb-6 block tracking-tighter"
          >
            Stratyfix
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-[260px]">
            Stratyfix is an AI coaching platform that provides measurable,
            impactful and scalable sales coaching &amp; training for the
            enterprise.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Link Columns */}
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="space-y-4">
            <h5 className="text-white font-bold text-sm font-headline">
              {col.title}
            </h5>
            <nav className="flex flex-col gap-3">
              {col.links.map((link) =>
                link.to.startsWith("#") ? (
                  <a
                    key={link.label}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                    href={link.to}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; 2026 Stratyfix AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
