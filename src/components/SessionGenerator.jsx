export default function SessionGenerator() {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-16 py-24 overflow-hidden space-y-32">
      {/* Hero */}
      <div className="grid lg:grid-cols-12 gap-12 items-center mb-32">
        {/* Left Side: Visual Composition */}
        <div className="lg:col-span-7 relative">
          {/* Main Image Canvas */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-primary-container">
            <img
              className="w-full h-full object-cover opacity-60"
              alt="Focused professional executive in a modern office setting looking at holographic UI interfaces"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvvLbYoAGvYAJZ52BgBLWnIzHvRiNqjK_N5OFyrSnnOhpAsHrBRiufWOPqorWdkRmxCg5T9ajHZ-YxtY2JWt3ug6cNMlLBEC_VPjzjLNYQXrVWwt1MwxnOwW6AhkUI3KL93fZUnkiSLBIda10-U2OlPiifhqTobVrOswhqjQ4yANpCLy9_YADl2su59CoJOi3_XCTZWk3vsn-8oSzWAfYqf6ZgkpRxwnJX2A5ZitSlc87n07_Z_7W8G1eDwRPiXInaViZbHrbbKqQ"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-primary-container/40"></div>
          </div>

          {/* Floating UI: Progress Stepper */}
          <div className="absolute top-8 left-8 right-8 bg-white/85 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20">
            <div className="flex items-center justify-between px-4 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant -translate-y-1/2 -z-10"></div>
              <div className="absolute top-1/2 left-0 w-[66%] h-0.5 bg-primary -translate-y-1/2 -z-10"></div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    target
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  Goal
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    person
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  Persona
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center border-2 border-surface">
                  <span className="material-symbols-outlined text-sm">
                    school
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                  Learner
                </span>
              </div>
            </div>
          </div>

          {/* Floating UI: Conversation Stages */}
          <div className="absolute -bottom-6 left-12 bg-white p-5 rounded-2xl shadow-2xl border border-surface-variant w-64">
            <h4 className="text-xs font-bold text-on-surface-variant mb-4 uppercase tracking-widest">
              Conversation stages
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary-container">
                  <span className="material-symbols-outlined text-lg">
                    chat_bubble
                  </span>
                </div>
                <div className="h-2 w-24 bg-surface-container rounded-full"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-fixed/30 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-lg">
                    record_voice_over
                  </span>
                </div>
                <div className="h-2 w-32 bg-surface-container rounded-full"></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-outline">
                  <span className="material-symbols-outlined text-lg">
                    forum
                  </span>
                </div>
                <div className="h-2 w-20 bg-surface-container rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Central Modal Overlay: Behavioral Goal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-surface-container-lowest rounded-xl shadow-2xl p-6 border border-outline-variant/20">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-sm font-bold font-headline text-primary">
                Create behavioral goal
              </h3>
              <span className="material-symbols-outlined text-sm text-outline cursor-pointer">
                close
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-1">
                  Description
                </label>
                <div className="p-3 bg-surface-container-high rounded text-xs text-on-surface leading-relaxed italic">
                  "Handling price objections with value-based arguments during
                  the closing phase."
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-2">
                  Behavior shall be
                </label>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 px-3 rounded-md bg-tertiary text-white text-[10px] font-bold">
                    Shown
                  </button>
                  <button className="flex-1 py-1.5 px-3 rounded-md bg-surface-container-high text-on-surface-variant text-[10px] font-bold">
                    Avoided
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-1">
                  Assign a skill
                </label>
                <div className="w-full p-2.5 bg-surface-container-high rounded flex items-center justify-between">
                  <span className="text-xs text-on-surface">
                    Objection handling
                  </span>
                  <span className="material-symbols-outlined text-xs">
                    expand_more
                  </span>
                </div>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-white text-xs font-bold rounded-lg mt-2 shadow-lg shadow-primary/20">
                Create goal
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed text-on-primary-fixed text-[10px] font-bold uppercase tracking-widest rounded-full w-fit">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_fix_high
            </span>
            Session Generator
          </div>
          <h2 className="text-5xl lg:text-6xl font-extrabold font-headline leading-[1.1] text-primary">
            Transform your ideas into AI-powered coaching.
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
            Define objectives, customize personas, and simulate complex sales
            scenarios. Our digital concierge crafts high-fidelity coaching
            sessions within minutes.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all">
              Launch Generator
            </button>
          </div>
        </div>
      </div>

      {/* Context Tailoring Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed/30 border border-outline-variant/20">
            <span
              className="material-symbols-outlined text-primary text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              psychology
            </span>
            <span className="text-xs font-bold font-headline uppercase tracking-widest text-primary">
              Intelligent Core
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold font-headline text-primary leading-tight tracking-tighter">
            Context tailoring
          </h2>
          <p className="text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-xl">
            Upload sales scripts, product documents, or call transcripts. The AI
            digests your proprietary knowledge to ensure sessions are
            hyper-relevant to your market.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
              <div className="p-2 rounded-lg bg-surface-container-highest group-hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-primary">
                  description
                </span>
              </div>
              <div>
                <h4 className="font-bold text-primary">Knowledge Ingestion</h4>
                <p className="text-sm text-on-surface-variant">
                  The AI builds a custom semantic model based on your specific
                  industry jargon.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <div className="bg-surface-container-low rounded-2xl p-6 shadow-2xl shadow-on-surface/5 border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    upload_file
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-tighter">
                    Knowledge Base
                  </p>
                  <p className="text-sm font-medium text-on-surface-variant">
                    Active Learning Engine
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></div>
                <div className="w-2 h-2 rounded-full bg-surface-container-highest"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-xl border-2 border-dashed border-outline-variant/30 bg-surface-container-lowest flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/40 transition-all group">
                <span className="material-symbols-outlined text-4xl text-outline mb-2 group-hover:text-primary">
                  cloud_upload
                </span>
                <p className="text-sm font-semibold text-primary">
                  Copy text from file
                </p>
                <p className="text-xs text-on-surface-variant mt-1">
                  PDF, DOCX, or direct URL
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: "dynamic_feed", label: "Conversation dynamics" },
                  { icon: "info", label: "Session details" },
                  { icon: "target", label: "Stage goals" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 bg-surface-container-lowest rounded-xl flex items-center justify-between border border-outline-variant/10"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <span
                      className="material-symbols-outlined text-tertiary-fixed-dim"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-tertiary-fixed/20 blur-3xl rounded-full -z-10"></div>
        </div>
      </div>

      {/* Dynamic Conversations Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div className="relative">
          <div className="bg-primary rounded-2xl p-8 shadow-2xl shadow-primary/20 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-[96px]">
                model_training
              </span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-tertiary text-[10px] font-bold uppercase tracking-widest">
                  Builder Mode
                </span>
                <div className="h-[1px] flex-grow bg-white/10"></div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-on-primary-container font-bold mb-3 block">
                    Delivery Format
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-primary-container border border-white/10 hover:bg-white/10 transition-all active:scale-95">
                      <span className="material-symbols-outlined text-white mb-2">
                        videocam
                      </span>
                      <span className="text-xs font-semibold text-white">
                        Video call
                      </span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group active:scale-95">
                      <span className="material-symbols-outlined text-white/60 mb-2 group-hover:text-white transition-colors">
                        call
                      </span>
                      <span className="text-xs font-semibold text-white/60 group-hover:text-white transition-colors">
                        Phone call
                      </span>
                    </button>
                  </div>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-white">
                      Session Construction
                    </span>
                    <span className="text-xs text-tertiary-fixed-dim">
                      84% Ready
                    </span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary-fixed-dim w-[84%]"></div>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-tertiary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">
                        bolt
                      </span>
                    </div>
                    <p className="text-xs text-white/80 leading-snug">
                      Integrating{" "}
                      <span className="text-white font-bold">
                        Q4 Prospecting Script
                      </span>{" "}
                      with Dynamic Logic...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container/20 blur-3xl rounded-full -z-10"></div>
        </div>
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed/10 border border-tertiary-fixed/20">
            <span
              className="material-symbols-outlined text-on-tertiary-container text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <span className="text-xs font-bold font-headline uppercase tracking-widest text-on-tertiary-container">
              Dynamic Interaction
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold font-headline text-primary leading-tight tracking-tighter">
            Dynamic conversations
          </h2>
          <p className="text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-xl">
            Easily fine-tune your coaching sessions for your purposes. Choose
            between video or phone call formats, and opt for dynamic or
            pre-scripted conversations. Enhance the learning experience by
            integrating your existing content.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-lg">
                  voice_chat
                </span>
                <span className="font-bold">Natural Flow</span>
              </div>
              <p className="text-xs text-on-surface-variant">
                Conversations that pivot based on user sentiment and objections.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-lg">
                  settings_input_component
                </span>
                <span className="font-bold">Total Control</span>
              </div>
              <p className="text-xs text-on-surface-variant">
                Toggle between rigid script adherence and fluid exploration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Persona Generator Section */}
      <div>
        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold tracking-wider uppercase mb-6">
            Persona generator
          </span>
          <h2 className="text-5xl font-extrabold tracking-tight text-primary leading-tight max-w-3xl mb-6 font-headline">
            Create virtual twins of your customers and bring them to life
          </h2>
          <p className="text-xl text-on-surface-variant max-w-4xl leading-relaxed">
            Emulate client personas with unique needs, pains, and behaviors. Let
            these virtual clients book video or phone calls with your users to
            prepare them for challenging conversations.
          </p>
        </div>

        {/* Interactive Mockup */}
        <div className="relative">
          {/* Background Gallery (Blurred/Dimmed) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-40 select-none pointer-events-none">
            {[
              {
                name: "Rolf Mayers",
                personality: "Bold",
                attitude: "Sceptical",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHriK9JOsmqIfYbLx_YtV7AaQv7yVdXsqH5K_Pip6vvYw9GUMRoIZBCKS6NxmTmVd5_xqCRVm_-QWRzhbo4j2Kbjw19bvOZZpRXpepEcwKJ5AByTdZp_WMZgGaDehuGmRnLYrFrpK12Wgde6eX9Vonp6VEuARsTE5SZ3TnYAVrT82AvX9Y-G2Kpi8fMFkiH8mRLj2YafhLJLN53lahhufw9VxmCNXz75fV7552oXXCVqpaIou1uzF5jBH38CR-Es9D-c263oOWMNc",
              },
              {
                name: "Jacky Milston",
                personality: "Analytical",
                attitude: "Positive",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRRVI8a_dks6ba0ddJlql3rYhJSny7t1YHEHdL_XqPz4VSZoGyM1I-QFcwGLodMC_KI74rOHcuLsWQ-jEAUDbbe6EtywsfymOPZGgCmyHkd7p2lR9XCKp-TmAR_7Ct12MdmgHrkzv4vPTzyWuts-nc1-kpefUkJvuDqfn6gThBaw1cEj0yKidffVWdQzPpoTz1b1lcQlTyBPmhO3X7dGVX9JADHNZkiTyNb80gY6_QtIH6RwaFB52jNRDeGWHapf7gxZi75QaaQcs",
              },
              {
                name: "David Chen",
                personality: "Direct",
                attitude: "Neutral",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS7aZqHq_TaxRkIzmI_bzhQAtmwX6OnZa0qQ--R1O_9CEM-jw3-NDzOzRvRGVEU6eaRC5QyGsqxHiI9vzkHhthIjDByma0qjLBF5MNYfTZSz4LOEQ1xlC4F7lyxGF8g7tEZt74ZerRE4PBJZAVw0IMDxmzGDJcDoT2VpdAf-XfczH4hRql5JIdPwWO4UT9J0c_Pucb5F4bczD5TX-LdNWxqGHb28S0eKr5WWvNvDOZpNnov0_jWaqFdOut9qYqDFls2Yd3GDxQQRY",
              },
              {
                name: "Elena Rodriguez",
                personality: "Expressive",
                attitude: "Friendly",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2K7zfjUofFhgyLGIGMbOb76HUP0uOFZK1Ou2KcqXH_dR16R3lIpnurhm-JoZNmeK3cmvF9QuqHNj3rU-E_oux6r7zCm1EvJGeKNmuN7ARm2rC0AZEdvnFEqiRPGBSedLuYQD4Q5zI1I9M4mbN9lJGtiOr1hDR6ny3Ad8oQQdlBId_gRwLjZjc8LMxhewL3OXuDFqWUA8tR2w9ZF1js3YM4YTuRtzcfmPtNQfrYE-LLDfsMYp2zgfs9f5FtyIg5nHEPg6iEY8a3_k",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 flex flex-col gap-4"
              >
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-surface-container">
                  <img
                    alt={p.name}
                    className="w-full h-full object-cover"
                    src={p.img}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-headline font-bold text-lg">{p.name}</h3>
                  <div className="w-4 h-4 rounded-full border-2 border-outline-variant"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-on-surface-variant">
                    <span className="font-bold">Personality:</span>{" "}
                    {p.personality}
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    <span className="font-bold">Attitude:</span> {p.attitude}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Overlay Wizard */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl z-10">
            <div className="glass-panel border border-white/50 shadow-2xl rounded-[2rem] overflow-hidden">
              {/* Wizard Header */}
              <div className="p-8 pb-4">
                <h3 className="text-2xl font-extrabold text-primary mb-8 font-headline">
                  Let's create it together
                </h3>
                {/* Progress Bar */}
                <div className="flex items-center gap-2 mb-12">
                  {[
                    { label: "Demographic", active: true },
                    { label: "Professional", active: true },
                    { label: "Character", active: false },
                    { label: "Look & Appearance", active: false },
                    { label: "Key insights", active: false },
                  ].map((step) => (
                    <div key={step.label} className="flex-1 flex flex-col gap-2">
                      <div
                        className={`h-1.5 w-full rounded-full ${
                          step.active ? "bg-primary" : "bg-surface-variant"
                        }`}
                      ></div>
                      <span
                        className={`text-[10px] font-bold uppercase ${
                          step.active
                            ? "text-primary"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Wizard Content */}
              <div className="px-8 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                        Conversation context
                      </label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-high border-none rounded-xl py-4 px-4 text-on-surface appearance-none focus:ring-2 focus:ring-primary/20 transition-all">
                          <option>General Business Discussion</option>
                          <option>Sales Negotiation</option>
                          <option>Technical Support</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                          expand_more
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                        Job role
                      </label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-high border-none rounded-xl py-4 px-4 text-on-surface appearance-none focus:ring-2 focus:ring-primary/20 transition-all">
                          <option>Head of IT</option>
                          <option>Chief Technology Officer</option>
                          <option>Product Manager</option>
                          <option>Procurement Officer</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                          expand_more
                        </span>
                      </div>
                      {/* AI Tip Bubble */}
                      <div className="hidden lg:block absolute -right-40 top-8 w-64 bg-tertiary-container text-on-tertiary-fixed p-4 rounded-2xl shadow-xl border border-tertiary-fixed-dim/20 z-20">
                        <div className="flex gap-2 items-start">
                          <span
                            className="material-symbols-outlined text-tertiary-fixed-dim mt-0.5"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            lightbulb
                          </span>
                          <div>
                            <p className="text-xs font-bold mb-1">AI Tip</p>
                            <p className="text-[11px] leading-relaxed opacity-90">
                              Choosing 'Head of IT' will weight the AI responses
                              toward infrastructure scalability and security
                              concerns.
                            </p>
                          </div>
                        </div>
                        <div className="absolute -left-2 top-6 w-4 h-4 bg-tertiary-container rotate-45 border-l border-b border-tertiary-fixed-dim/10"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                    <h4 className="text-sm font-bold text-primary mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">
                        info
                      </span>
                      Context preview
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      By selecting{" "}
                      <span className="font-bold text-primary">Head of IT</span>
                      , the persona will prioritize technical feasibility, ROI,
                      and integration security. They will likely be skeptical of
                      vague marketing promises and prefer data-driven arguments.
                    </p>
                  </div>
                </div>
                {/* Footer Actions */}
                <div className="mt-12 flex justify-between items-center pt-8 border-t border-outline-variant/10">
                  <button className="px-8 py-3 rounded-xl font-bold text-on-surface-variant hover:bg-surface-container transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">
                      arrow_back
                    </span>
                    Back
                  </button>
                  <button className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-3 rounded-xl font-bold shadow-lg hover:shadow-primary/20 hover:opacity-95 transition-all flex items-center gap-2">
                    Continue
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
