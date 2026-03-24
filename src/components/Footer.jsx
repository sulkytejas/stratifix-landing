const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#", underlined: true },
    { label: "Roleplay AI", href: "#" },
    { label: "Analytics", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Sales Guides", href: "#" },
    { label: "Success Stories", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Mobile Footer */}
      <div className="md:hidden bg-primary text-on-primary px-8 pt-16 pb-32">
        <div className="mb-12">
          <div className="text-2xl font-extrabold tracking-tighter font-headline mb-4 uppercase">
            Stratifix
          </div>
          <p className="text-on-primary/60 text-sm leading-relaxed max-w-xs">
            Building the next generation of sales athletes through
            high-fidelity AI simulation.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold uppercase tracking-widest opacity-40">
              Product
            </h5>
            {FOOTER_LINKS.Product.map((link) => (
              <a key={link.label} className="text-sm font-medium" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold uppercase tracking-widest opacity-40">
              Company
            </h5>
            {FOOTER_LINKS.Company.map((link) => (
              <a key={link.label} className="text-sm font-medium" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="pt-8 border-t border-on-primary/10 flex flex-col gap-4">
          <div className="flex gap-4">
            <span className="material-symbols-outlined opacity-60">
              language
            </span>
            <span className="material-symbols-outlined opacity-60">
              public
            </span>
          </div>
          <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">
            &copy; 2026 Stratifix Intelligence. All rights reserved.
          </p>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block border-t border-slate-200 bg-surface font-body text-sm leading-relaxed">
        <div className="bg-surface-container px-12 py-16">
          <div className="grid grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <span className="text-lg font-black text-primary mb-4 block">
                  {category}
                </span>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={`text-slate-500 hover:text-primary transition-colors ${
                          link.underlined
                            ? "underline decoration-tertiary-fixed decoration-2 underline-offset-4"
                            : ""
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200 text-left">
            <p className="text-slate-500">
              &copy; 2026 Stratifix. The Digital Concierge for Executive
              Sales.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
