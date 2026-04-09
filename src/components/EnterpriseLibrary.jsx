const templates = [
  {
    tag: "BFSI",
    title: "C-Suite Negotiation",
    desc: "High-stakes budget defense for financial services executives.",
    uses: "1.2k",
  },
  {
    tag: "SaaS",
    title: "Competitive Rip-and-Replace",
    desc: "Strategic framing when displacing established market incumbents.",
    uses: "850",
  },
  {
    tag: "Tech",
    title: "Technical Veto Handling",
    desc: "Neutralizing CTO/Architect objections during procurement.",
    uses: "2.4k",
  },
];

export default function EnterpriseLibrary() {
  return (
    <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold font-headline text-primary mb-4">
              Enterprise Library
            </h2>
            <p className="text-on-surface-variant">
              Access 30+ pre-configured strategic frameworks.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((tpl) => (
            <div
              key={tpl.title}
              className="p-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 bg-surface-container text-xs font-bold rounded">
                  {tpl.tag}
                </div>
                <span className="material-symbols-outlined text-outline">
                  more_horiz
                </span>
              </div>
              <h4 className="font-bold text-lg mb-2">{tpl.title}</h4>
              <p className="text-sm text-on-surface-variant mb-6">{tpl.desc}</p>
              <div className="flex items-center gap-2 text-xs font-medium text-tertiary">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  bolt
                </span>{" "}
                {tpl.uses} Uses this month
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
