const avatarImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD0Q85UraqYLgDptXVbtUmDaFB9w-oytbVX9hd3-45fNl-OzpjWEPJPDuJRt9Lr3XtdSN9l87iJkDKkBCcPzfwR9r3cML6wDLhfgkmr9jPv9s1qvCAuaffzBAIMnpLqnIEfe3eIZaMP_eYmGSMOLDWXVl4Jy0tRdnwyw2HJlhFJa_TCH6JqmoKC3OKaC1qyEWG85DD66d3UdSzD7zPElxFkM-hNuwPOvakl4rD4Go8wvv28NSd-i1phOEd1DvSaEeKPVE_PnesQg2I",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAM6xZNCrWJolMTBww8Gr84p-lBRThiZL8Z8pUSN1igTw_j_QSH1vNbfIsCCskpHl5AuHNjmcdrmL0a_kb3OgBoNmwc5W6k__tUb8dN7-tjDWgUlTJmsMQt31kr1sRB40QY3kanIZtyKE_MW7rtV8mqnMKVFBYd1PWvaeUlxXOii8caTXESB2OLwsanF4RmM9s9Cn_pTwI1AQLjl3PXnHi3zbrCeA5-uDp7zBNcn-XeslzFlGPjWPBbImDt8FA98y4Vtpbsfai-HDY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA06KDHbdD93a8WxOTlMvvyOaruKr1zuwa6c_heAxA5K38NIh6tsfCUYIVV09bIWFfaJfqsDhwFToR0L14nHfCc3COLJRVMcqUwt49w-zkp-5_-TgPng6itg8MmpItnyEoyvrbaNZLOjJM5qw4xgzDcUUELgIfMGGNKBnsYOeV8soJf75cvS6eoB91PF3WPv0xGxldtf_IhslixvNMpIu84xHvtyyBOC26Ph2VkPbFb5zOp7CYi8i7alh_98-HZ-RiP-RfQGL-VA_c",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCqHS52wbWJlx_qs7c26-g5yp_-vyLtRBgSihRWK52IM5ncbDJ9_flu42NWW9nOOfHLcO0w3PFDmb4LCY48kepcJ6FoJ1oJm9XHVrkCcEW4EJW0fUegRbPbm0H2UQUnZPTQghdyndmgeA6IdsVVLY9FC4gkriGwqdovojSuH5JAqipzNNMg28FM3WEujQNWo97MpVakPiHLYxDpsQDD0u52N3LVObynZE-5ySMs2ajWIBD72J31bRLjFZDQySKA9u_QrWbbpHUKdc4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCeClvtmuGyv8fh7jW15IzAdopKSfHeHFiDVp_FEqf5ZqROwzDsEsgDttYhUo0pvR-UkCxM_JovoZLIQVNyxnDRvcEvciAGhv2VBQlOgNVmdGP5Ic3FXQsIRzPKJ2swOKqcDm-uXk_AJKBRa9DGfkCIjBdLQcnvUbFld8FlnAlU5WQv5Gjh6xp0mC4ME1NS-aUxwUxFbeq18XEVbfInq7GfG4j9kxIgqmXdaThy6c2q8lfyDsgjto_Xnq6vwKG7aFpIg4qtP9bfDTQ",
];

export default function PersonaFeatures() {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Column 1: Credible background stories */}
        <div className="flex flex-col">
          <div className="bg-surface-container-low p-8 rounded-xl h-full flex flex-col">
            <div className="mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary-fixed">
                  psychology
                </span>
              </div>
              <h3 className="font-headline font-bold text-2xl text-primary mb-4">
                Credible background stories
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Create new personas or select from our persona library. Include
                information about demographics &amp; professional background,
                values &amp; traits, and needs &amp; pains, to mirror real
                client interactions.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex-grow">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  Key insights
                </span>
                <span className="material-symbols-outlined text-primary text-sm">
                  verified
                </span>
              </div>
              <div className="space-y-5">
                {[
                  { label: "Demographic information", pct: "100%", status: "Completed" },
                  { label: "Professional overview", pct: "100%", status: "Completed" },
                  { label: "Character", pct: "85%", status: "Completed" },
                  { label: "Look & appearance", pct: "40%", status: "Optional", dim: true },
                ].map((row) => (
                  <div key={row.label} className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter">
                      <span>{row.label}</span>
                      <span className={row.dim ? "text-primary opacity-40" : "text-tertiary-fixed-dim"}>
                        {row.status}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${row.dim ? "bg-primary-container" : "bg-tertiary-fixed-dim"}`}
                        style={{ width: row.pct }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/20">
                <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter mb-2 block">
                  Persona needs &amp; pains
                </label>
                <div className="bg-surface-container-high rounded-sm p-3 text-xs text-on-surface leading-relaxed italic">
                  "Struggling with inconsistent quarterly revenue growth and
                  high churn in mid-market accounts..."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Photorealistic avatars */}
        <div className="flex flex-col">
          <div className="bg-surface-container-low p-8 rounded-xl h-full flex flex-col">
            <div className="mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary-fixed">
                  face
                </span>
              </div>
              <h3 className="font-headline font-bold text-2xl text-primary mb-4">
                Photorealistic avatars
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Choose matching avatars, and voices. We offer the most realistic
                avatars in the industry, featuring 93 photorealistic avatars
                with 38 voices in 10+ languages, enabling you to localize your
                coaching experience with a few clicks.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex-grow">
              <div className="grid grid-cols-3 gap-3 mb-8">
                {avatarImages.map((src, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg overflow-hidden ${
                      i === 0
                        ? "border-2 border-tertiary-fixed shadow-lg relative"
                        : "border border-outline-variant/30 hover:border-tertiary-fixed/50 transition-colors"
                    }`}
                  >
                    <img
                      className="w-full h-full object-cover"
                      alt={`Avatar ${i + 1}`}
                      src={src}
                    />
                    {i === 0 && (
                      <div className="absolute inset-0 bg-tertiary-fixed/10 pointer-events-none"></div>
                    )}
                  </div>
                ))}
                <div className="aspect-square rounded-lg overflow-hidden border border-outline-variant/30 flex items-center justify-center bg-surface-container">
                  <span className="text-primary font-bold text-xs">+88</span>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter block">
                  Voice selection
                </label>
                <div className="bg-surface-container-high rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer border border-transparent hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">
                      record_voice_over
                    </span>
                    <span className="text-sm font-medium text-primary">
                      Dorothy (Female)
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant">
                    expand_more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Configurable behavior */}
        <div className="flex flex-col">
          <div className="bg-surface-container-low p-8 rounded-xl h-full flex flex-col">
            <div className="mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary-fixed">
                  settings_input_component
                </span>
              </div>
              <h3 className="font-headline font-bold text-2xl text-primary mb-4">
                Configurable behavior
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Your client personas act freely within pre-defined boundaries.
                Define their attitude towards your company and determine the
                difficulty levels of simulated conversations. Reuse personas by
                linking them to different sessions.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex-grow">
              <div className="mb-8">
                <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter block mb-4">
                  Attitude
                </label>
                <div className="flex p-1 bg-surface-container-high rounded-xl gap-1">
                  <button className="flex-1 py-2 text-[10px] font-bold uppercase rounded-lg bg-white shadow-sm text-primary transition-all">
                    Positive
                  </button>
                  <button className="flex-1 py-2 text-[10px] font-bold uppercase rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all">
                    Neutral
                  </button>
                  <button className="flex-1 py-2 text-[10px] font-bold uppercase rounded-lg text-on-surface-variant hover:bg-surface-container-highest transition-all">
                    Negative
                  </button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter block">
                    Personality
                  </label>
                  <div className="bg-surface-container-high rounded-lg px-4 py-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      Bold
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">
                      tune
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-tighter block">
                    Personal values
                  </label>
                  <div className="bg-surface-container-high rounded-lg px-4 py-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      Loyalty
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">
                      verified_user
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 rounded-xl bg-primary-container/5 border border-primary-container/10 flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  info
                </span>
                <p className="text-[11px] text-on-primary-container leading-relaxed">
                  Personas automatically adapt their phrasing based on their
                  difficulty level and current sentiment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
