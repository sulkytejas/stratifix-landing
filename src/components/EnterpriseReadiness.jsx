export default function EnterpriseReadiness() {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">
      {/* Header */}
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6 leading-tight font-headline">
          Stratyfix's AI coaching platform: Scalable, global, and
          enterprise-ready
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          Empower your global sales force with a secure, integrated, and
          multilingual intelligence layer designed for the complexities of
          modern enterprise operations.
        </p>
      </div>

      {/* Three-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Languages */}
        <div className="flex flex-col bg-surface-container-low rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
          <div className="p-8 pb-4">
            <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-tertiary-fixed">
                language
              </span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 font-headline">
              10+ languages
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Available in 10+ languages (English, German, French, Spanish,
              Portuguese, Italian, etc.), with semi-automated content
              translation features.
            </p>
          </div>
          <div className="mt-auto bg-surface-container-lowest mx-6 mb-8 rounded-xl border border-outline-variant/20 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                Active Workspace
              </span>
              <span className="text-[10px] bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-full">
                AI Live
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 bg-surface-container rounded-lg">
                <span className="material-symbols-outlined text-primary text-sm">
                  translate
                </span>
                <span className="text-sm font-medium">English (US)</span>
                <span
                  className="material-symbols-outlined text-xs ml-auto"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-surface-container/50 rounded-lg transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-outline text-sm">
                  translate
                </span>
                <span className="text-sm font-medium text-on-surface-variant">
                  Deutsch
                </span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-surface-container/50 rounded-lg transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-outline text-sm">
                  translate
                </span>
                <span className="text-sm font-medium text-on-surface-variant">
                  Français
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="flex flex-col bg-surface-container rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
          <div className="p-8 pb-4">
            <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-tertiary-fixed">
                hub
              </span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 font-headline">
              Enterprise integrations
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              At-rest API for integration with LMS, CRM, and other software.
              Stratyfix's analytics are exportable to external reporting
              software.
            </p>
          </div>
          <div className="mt-auto bg-surface-container-lowest mx-6 mb-8 rounded-xl border border-outline-variant/20 p-6 shadow-sm">
            <div className="grid grid-cols-3 gap-4 grayscale opacity-70">
              {[
                { icon: "cloud", label: "SALESFORCE" },
                { icon: "groups", label: "TEAMS" },
                { icon: "analytics", label: "HUBSPOT" },
                { icon: "grid_view", label: "GOOGLE" },
                { icon: "database", label: "SAP" },
                { icon: "school", label: "CORNERSTONE" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-low border border-outline-variant/10"
                >
                  <span className="material-symbols-outlined text-xl mb-1">
                    {item.icon}
                  </span>
                  <span className="text-[9px] font-bold">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-12 bg-tertiary-fixed-dim rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Privacy & Access */}
        <div className="flex flex-col bg-surface-container-high rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
          <div className="p-8 pb-4">
            <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-tertiary-fixed">
                admin_panel_settings
              </span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 font-headline">
              User access and privacy
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Single sign-on, data anonymization, and cohort management.
              Stratyfix is GDPR and EU AI Act compliant, and ISO 27001
              certified.
            </p>
          </div>
          <div className="mt-auto bg-surface-container-lowest mx-6 mb-8 rounded-xl border border-outline-variant/20 overflow-hidden shadow-sm">
            <div className="bg-primary p-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-white text-lg">
                lock
              </span>
              <span className="text-white text-xs font-bold">
                Enterprise SSO Active
              </span>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] text-on-surface-variant font-bold uppercase">
                  Identity Provider
                </label>
                <div className="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/20">
                  <span className="text-xs font-medium">
                    Azure Active Directory
                  </span>
                  <span
                    className="material-symbols-outlined text-xs text-on-tertiary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="h-8 flex-1 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded">
                  CONTINUE WITH OKTA
                </div>
                <div className="w-8 h-8 flex items-center justify-center border border-outline-variant/20 rounded">
                  <span className="material-symbols-outlined text-sm">
                    more_horiz
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-16 pt-8 border-t border-outline-variant/10 flex flex-wrap justify-center gap-12 opacity-60">
        {[
          { icon: "security", label: "GDPR Compliant" },
          { icon: "workspace_premium", label: "ISO 27001" },
          { icon: "policy", label: "EU AI Act Ready" },
        ].map((badge) => (
          <div key={badge.label} className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              {badge.icon}
            </span>
            <span className="text-xs font-bold tracking-widest uppercase">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
