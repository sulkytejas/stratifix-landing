export default function AIRoleplay() {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
            AI role play
          </span>
          <h2 className="text-4xl font-headline font-extrabold text-primary leading-tight max-w-2xl">
            AI role playing to prepare your sales reps for one-shot-moments
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl">
            Stratyfix's AI engages your sales reps in simulated customer
            conversations with virtual client personas to reduce call anxiety
            and enter real client meetings better prepared.
          </p>
        </div>

        {/* Simulation Interface */}
        <div className="grid grid-cols-12 gap-8 h-[640px]">
          {/* Video Area */}
          <div className="col-span-12 lg:col-span-8 relative rounded-xl overflow-hidden shadow-2xl bg-black">
            <img
              alt="Joe Heimberger - AI Virtual Client"
              className="w-full h-full object-cover opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIWdh6ddjWmc3f_dPx8rkIl_RqeqfcvOejJFOkwWYYfiT7cPpVMZnbIAvpTGoSEI4g7GmrAfdKzKrdGmoFs3vSNM6B6WXK0lyQS-ac39SAiazOI4ZCAo1DQfn66jcLpepcEAjmgMgzP-q_xh_H4n4vuIiuBar_kA2fO7dL-UAvWIgCxtwA2dTOrsT_DIGjk8lodUJ-ImXQ-zftboH6qzDzC0Ls3prqPR4TfdYtXBCVCPn7FL_gJ2Y3ofJ-11DitrLf-yOzFjRlPDA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

            {/* Status Indicators */}
            <div className="absolute top-6 left-6 flex gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-medium">
                <span className="w-2 h-2 bg-error rounded-full animate-pulse"></span>
                Recording
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/10">
                <span className="material-symbols-outlined text-[14px]">
                  person
                </span>
                Virtual client: Joe Heimberger
              </div>
            </div>

            {/* Floating AI Tip */}
            <div className="absolute top-6 right-6 max-w-[280px] hidden md:block">
              <div className="bg-surface-container-lowest/80 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-tertiary-fixed-dim/30">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary font-bold">
                    tips_and_updates
                  </span>
                  <p className="text-xs text-on-surface leading-tight">
                    <span className="font-bold block mb-1">AI INSIGHT</span>
                    You have successfully changed your counterpart's point of
                    view regarding the initial budget objection. Keep focusing on
                    long-term ROI.
                  </p>
                </div>
              </div>
            </div>

            {/* User PIP */}
            <div className="absolute bottom-24 right-6 w-32 h-44 rounded-lg overflow-hidden border-2 border-white/20 shadow-lg bg-slate-800 hidden md:block">
              <img
                alt="User self view"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8P0rU_uqC0d97tLiNMbc58zqSrD6tc60GD8RHrmGfSzX-_OT15dTxQrAR85fcSnWzc4GUCemZrH8Ogh2QnJNFVWanpZ3MBW6ZE9HhlsB-6FR6CplGPMKV20GdUG_u_ek_egNvWJZMf19aILqotZvyELhdsBPqXh-lKap3a0ORqGpju6k_pOxzfZUyCg0Nm1VV9Nq_YbBB86VK_Ueybq33Po-13kIzezMyX_R5WTw3dbwqM3D7CwBztpW11Rcl8_ZmKXbvD23rBEs"
              />
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 px-8 py-3 bg-white/10 backdrop-blur-2xl rounded-full border border-white/20">
              <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
                <span className="material-symbols-outlined">mic</span>
              </button>
              <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
                <span className="material-symbols-outlined">videocam</span>
              </button>
              <button className="px-6 py-2 bg-error text-white font-bold rounded-full text-sm hover:bg-error/90 transition-all">
                End Session
              </button>
              <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>

          {/* Sidebar: Transcription */}
          <div className="col-span-12 lg:col-span-4 flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
            {/* Tabs */}
            <div className="flex border-b border-surface-container">
              <button className="flex-1 py-4 text-sm font-bold text-primary border-b-2 border-primary">
                Transcription
              </button>
              <button className="flex-1 py-4 text-sm font-medium text-on-surface-variant hover:bg-surface-container-low transition-colors">
                Instructions
              </button>
            </div>
            {/* Transcription Feed */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Client Message */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-primary-container bg-primary-fixed px-1.5 py-0.5 rounded">
                    CLIENT
                  </span>
                  <span className="text-xs font-bold text-on-surface">
                    Joe Heimberger
                  </span>
                  <span className="text-[10px] text-on-surface-variant">
                    10:04 AM
                  </span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg rounded-tl-none">
                  <p className="text-sm text-on-surface leading-relaxed">
                    That's an interesting perspective on the integration costs.
                    However, our main concern is the downtime during the
                    migration phase. How does Stratyfix handle that?
                  </p>
                </div>
              </div>
              {/* User Message */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 justify-end">
                  <span className="text-[10px] text-on-surface-variant">
                    10:05 AM
                  </span>
                  <span className="text-xs font-bold text-on-surface">You</span>
                  <span className="text-[10px] font-bold text-tertiary-container bg-tertiary-fixed px-1.5 py-0.5 rounded">
                    YOU
                  </span>
                </div>
                <div className="bg-primary text-white p-3 rounded-lg rounded-tr-none ml-8">
                  <p className="text-sm leading-relaxed">
                    I completely understand that concern, Joe. We utilize a
                    phased rollout approach called 'Shadow Sync'. This allows us
                    to keep your legacy systems active while we validate the data
                    flow in the background.
                  </p>
                </div>
              </div>
              {/* Client Message */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-primary-container bg-primary-fixed px-1.5 py-0.5 rounded">
                    CLIENT
                  </span>
                  <span className="text-xs font-bold text-on-surface">
                    Joe Heimberger
                  </span>
                  <span className="text-[10px] text-on-surface-variant">
                    10:05 AM
                  </span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-lg rounded-tl-none">
                  <p className="text-sm text-on-surface leading-relaxed">
                    'Shadow Sync'? I haven't heard of that specifically. Could
                    you elaborate on how that minimizes the risk for our Q3
                    operations?
                  </p>
                </div>
              </div>
            </div>
            {/* Transcription Footer */}
            <div className="p-4 bg-surface-container-low border-t border-surface-container">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    <div className="w-1 h-3 bg-tertiary-fixed-dim rounded-full"></div>
                    <div className="w-1 h-5 bg-tertiary-fixed-dim rounded-full"></div>
                    <div className="w-1 h-2 bg-tertiary-fixed-dim rounded-full"></div>
                    <div className="w-1 h-4 bg-tertiary-fixed-dim rounded-full"></div>
                  </div>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
                    Live Analysis Active
                  </span>
                </div>
                <button className="text-primary text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    download
                  </span>
                  Full Transcript
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="grid grid-cols-12 gap-8 pt-8 border-t border-surface-container">
          <div className="col-span-12 lg:col-span-4 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              Session Intelligence
            </span>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-headline font-extrabold text-primary">
                84%
              </span>
              <span className="text-sm text-on-tertiary-container font-bold mb-1 flex items-center">
                <span className="material-symbols-outlined text-[16px]">
                  trending_up
                </span>
                +12% Engagement
              </span>
            </div>
            <p className="text-xs text-on-surface-variant">
              Your current rapport building score is in the top decile for this
              persona.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-surface-container rounded-lg p-4 flex flex-col justify-between">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase">
                Tone Analysis
              </span>
              <span className="text-lg font-bold text-primary">
                Professional
              </span>
            </div>
            <div className="bg-surface-container rounded-lg p-4 flex flex-col justify-between">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase">
                Keywords Used
              </span>
              <span className="text-lg font-bold text-primary">
                ROI, Sync, Phased
              </span>
            </div>
            <div className="bg-tertiary-container text-tertiary-fixed rounded-lg p-4 flex flex-col justify-between">
              <span className="text-[10px] font-bold uppercase">
                Persona Sentiment
              </span>
              <span className="text-lg font-bold">Optimistic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
