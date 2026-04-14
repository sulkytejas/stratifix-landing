export default function Infrastructure() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl font-bold font-headline text-primary mb-8">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-on-surface-variant mb-10 text-lg">
              Built for organizations that take data privacy seriously.
              Military-grade security with seamless ecosystem integration.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">
                  verified_user
                </span>
                <div>
                  <h4 className="font-bold">SOC2 Type II</h4>
                  <p className="text-xs text-on-surface-variant">
                    Global compliance standard
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">
                  gavel
                </span>
                <div>
                  <h4 className="font-bold">GDPR / DPDP</h4>
                  <p className="text-xs text-on-surface-variant">
                    Strict data residency control
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-10 opacity-40 grayscale">
              <span className="text-xl font-black">SALESFORCE</span>
              <span className="text-xl font-black">HUBSPOT</span>
              <span className="text-xl font-black">MICROSOFT</span>
              <span className="text-xl font-black">ZOOM</span>
            </div>
          </div>
          <div className="bg-primary-container p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-[120px]">
                hub
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-6">Your Data, Your Rules</h3>
            <p className="text-on-primary/70 mb-8 leading-relaxed">
              Stratyfix offers regional data residency options, ensuring your
              proprietary training content and employee data stay exactly where
              you need them. Air-gapped deployments available for regulated
              industries.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">
                  check_circle
                </span>{" "}
                Local Cloud Hosting
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">
                  check_circle
                </span>{" "}
                AES-256 Encryption at Rest
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">
                  check_circle
                </span>{" "}
                Zero-Retention AI Logging
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
