const columns = [
  {
    tag: "Engagement activator",
    tagClass: "bg-primary-container/10 text-primary",
    desc: "Compare activation rates, session completion, and drive engagement with a few clicks. Choose to view aggregated data across learner cohorts, compare group or individual results.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjW3NGtfEQ0r8DbRQjHUaxVEYv_SEbgnDuy1UnOS6Nla5Z8yYd3YJLkv6j4QOcCxBERuqIhYU0tCq1LQK9ldlPiWNTmB3iT2I3FoVqBx2irf1lel8KrkPqJpNVY3_sfD5ukhLxQDcD-zcp-snY2mEH1jX1tOP18MpPQJHgnbOXcwl8fqhaW4MD3PdJVejk5_u6tWtcICoZvRKDdWw0k_lxMrbmODQoS2heDWJLzaOukJfmtmtuOqn15lj1j79mzC_vSpV08Z9mFsM",
    alt: "Data visualization showing a multi-stage conversion funnel and activation chart",
  },
  {
    tag: "Behavioral impact",
    tagClass: "bg-tertiary-fixed-dim/20 text-tertiary",
    desc: "Assess communication and factual knowledge in coaching sessions against objectives, measuring skill development, communication style, brand alignment, and knowledge retention across cohorts for training effectiveness.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5G6i90qPTqeAts_ps9ZOb3xMsIQRRobnM9Frm0i_LDqK7kwGNZaKunHAg5MBl6Np_qQhaAdAhuYGEvm8YmE1fbUkLT28CC1h0bAsyOEN9rh2_OAifF0AQ9v2FkiOs6nbzKT4t8dBZ6A2RJbudKvZYFv0uPP6ozsoEtb166d8C-FcB1kOl69GkTAUHeCVtg1Q65F74R00-51zfef7veE37Ju8SC0lF2yJ2pEMOdq74y9yugG3mgtg8LFIWKG8J_9OzB4NM4gP7XxU",
    alt: "Line graph showing upward performance trends with soft radial glow",
  },
  {
    tag: "Business impact",
    tagClass: "bg-secondary-container text-secondary",
    desc: "Connect relevant performance data to measure ROI of your coaching programs and to predict business outcomes (e.g. sales performance or NPS). Gain deep insights into user communication to ensure adherence to brand guidelines and overall standards.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjYveWf8Z-nImrTe_RRRjo45zpkIUDlgskaRGIpdPcVJ2HQGeAroZjtgZri1v_54CPGrt97A23EdCQhGKq_iN9RU9oB-myhfmWIs8p4rob3HGWtkSXcIDBL7RU2QaMyZBGUt2MeKv8o__Vmtsg59GvPnTBAGdwg5cEq1rQEG-fir5COZf2nSRMlJlTXhPO3g3xoKSOTcl6CiqVdmTTiLhHwKjCFc47omlbJ5S96ZHnbxW0QXck2ZDxu9eysQIOKVTUgF9nmdUbQ0U",
    alt: "Dashboard view of ROI metrics and NPS scores with circular progress bars",
  },
];

export default function PortfolioPerformance() {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {columns.map((col) => (
          <div
            key={col.tag}
            className="flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-500"
          >
            <div className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${col.tagClass}`}
                >
                  {col.tag}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-on-surface-variant mb-10 flex-grow font-medium">
                {col.desc}
              </p>
              <div className="mt-auto bg-surface-container-low rounded-xl p-4 overflow-hidden">
                <img
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                  alt={col.alt}
                  src={col.img}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
