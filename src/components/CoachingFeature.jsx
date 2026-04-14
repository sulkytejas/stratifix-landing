import { useState } from "react";

const categories = [
  {
    name: "Sales Training",
    headerIcon: "videocam",
    headerTitle: "Retail Sales: Objection Handling & Upselling",
    clientVideo: "/videos/sales_training.mp4",
    clientImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTF8EOx9FHO2Qnf0utte3kj61h5KNFsKkgq6KdTlJ5QLigJIpAwiPR0CCdyyK30Bq-jxFtTQF9l8wvwmqbqIkcfoaH7IjFVnUlW1tyyoP73knbDRCQFSoBBbx0mrNKAku7TcBtoq_kSTYE9ncZWNKQaJzLySx3t9I5lkrl9TU6WPl0HBj62nQAr3yU1vdC9iolaL_d6OrZ8PUM2z0wxeeI43acEF1bUTTC-LvFjOQ6eVlAthQTL5SRGw8eS-dlsr_GMdNbZMawus",
    clientAlt:
      "Professional woman customer sitting in a modern high-end retail environment",
    clientLabel: null,
    speakingLabel: null,
    dialogue:
      "\u201cI usually keep my phones for 3 or 4 years. Is this new model really going to last that long, or will the battery start fading out in a few months?\u201d",
    dialoguePosition: "top",
    userImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDM098Kp4sFDqx_Jznqr9VrDSSOmyGviuCsn6_Pz9x-OjsXtxsfUPnzNVVXAf3GCPhUT2ri2RimcA0bghVO8gbwvBozVcGb07I-hNWfFNp3lu3y3MwZwVfBLrJWmfnWzG5yv_3D83_Cth-s6gEYm02im4SNGXjOTuPUjIJkwO_TUHpW07FoepCMGI4E4y-nr5RepHsg0ZlYkuCt8_FaffWw4NxL4i3JnWLCG6dM2TmSSJZBFRFARJf4h9bfCXCmw38TGTR3SonT3dM",
    userAlt:
      "Professional male sales specialist looking at camera with confident expression",
    userLabel: null,
    speakPrompt: null,
    stageTask: "Handle the customer\u2019s hesitation and highlight durability",
    stageDescription: null,
    steps: [
      {
        label: "Acknowledge the concern",
        description: "Validate her need for a long-lasting device.",
        status: "done",
      },
      {
        label: "Address battery longevity",
        description: "Explain the new Adaptive Power management features.",
        status: "pending",
      },
      {
        label: "Mention warranty/service",
        description: "Bring up the Extended Protection Plan for peace of mind.",
        status: "pending",
      },
      {
        label: "Transition to upselling",
        description: "Bridge to suggesting a premium protective case.",
        status: "dimmed",
      },
    ],
    stepsCount: null,
    confidence: 75,
    transcription: [
      {
        time: "00:31",
        speaker: "Customer (Sarah)",
        side: "left",
        badges: [],
        text: "It looks nice. I usually keep my phones for 3 or 4 years, so I hope 128GB is enough storage for all those high-res videos.",
      },
      {
        time: "00:45",
        speaker: "You (Sales)",
        side: "right",
        badges: [
          { label: "Partially mastered", color: "amber" },
          { label: "Active listening", color: "blue" },
        ],
        text: "It should be okay if you use cloud storage. It\u2019s a very capable phone.",
      },
      {
        time: "00:58",
        speaker: "Customer (Sarah)",
        side: "left",
        badges: [],
        text: "Cloud storage can be a hassle sometimes when I\u2019m out of Wi-Fi range, but if you think the base model is fine, I\u2019ll trust you.",
      },
      {
        time: "01:18",
        speaker: "Customer (Sarah)",
        side: "left",
        badges: [],
        text: "Okay, I\u2019ll take the base model then. I just",
      },
    ],
  },
  {
    name: "Product Training",
    headerIcon: "medication",
    headerTitle: "Product Training: Pharma New Drug Launch",
    clientVideo: "/videos/product_training.mp4",
    clientImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjAqI7hqiVSf69XTcqBO4rCr6gOWdbupQL5OmsNHPP8E5Ysr5YOCcvlLJFbsr2jpa7QdLRHbli8JQqGguZ7Itly2bde-r-KRutKq5vMEgY-5gqRj1C0_H9_r_YaGW_NpNGFonl-KdfMkg5cJ_iBiHxIB8YAP7pAZphHI-XOsHDPi4KxA5BnVoWTEYGVAfkPMYs2jUBHSo9vD7VTDlKDvVTQo5Yu2_0Uz6imYYERPtXijOEEoJSovZXdC_jQ9fgSF2_78qlY6brlnI",
    clientAlt: "Professional male physician in a video call setting",
    clientLabel: "Virtual Client",
    speakingLabel: "Dr. Carter is speaking...",
    dialogue:
      "I\u2019ve been prescribing the standard statins for years. What makes this new compound so different that I should switch my patients?",
    dialoguePosition: "bottom",
    userImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDM098Kp4sFDqx_Jznqr9VrDSSOmyGviuCsn6_Pz9x-OjsXtxsfUPnzNVVXAf3GCPhUT2ri2RimcA0bghVO8gbwvBozVcGb07I-hNWfFNp3lu3y3MwZwVfBLrJWmfnWzG5yv_3D83_Cth-s6gEYm02im4SNGXjOTuPUjIJkwO_TUHpW07FoepCMGI4E4y-nr5RepHsg0ZlYkuCt8_FaffWw4NxL4i3JnWLCG6dM2TmSSJZBFRFARJf4h9bfCXCmw38TGTR3SonT3dM",
    userAlt: "Pharma rep in a professional video call",
    userLabel: "Pharma Rep (You)",
    speakPrompt: "Your turn to speak!",
    stageTask: "Stage task",
    stageDescription:
      "Introduce the new cardiovascular drug to a hesitant physician, focusing on the improved safety profile and specific patient benefits.",
    steps: [
      {
        label: "Acknowledge the doctor\u2019s comfort with current treatments",
        description: null,
        status: "failed",
      },
      {
        label: "Highlight the specific safety profile improvements of the new drug",
        description: null,
        status: "success",
      },
      {
        label: "Provide a brief patient case study example",
        description: null,
        status: "pending",
      },
    ],
    stepsCount: "1/3",
    confidence: 60,
    transcription: [
      {
        time: "00:15",
        speaker: "Physician (Dr. Carter)",
        side: "left",
        badges: [],
        text: "I\u2019ve been prescribing the standard statins for years. What makes this new compound so different that I should switch my patients?",
      },
      {
        time: "00:28",
        speaker: "You (Pharma Rep)",
        side: "right",
        badges: [
          { label: "Improvable", color: "red" },
          { label: "Applied knowledge", color: "blue" },
        ],
        text: "Well, our clinical trials show it\u2019s 15% more effective at lowering LDL.",
      },
      {
        time: "00:40",
        speaker: "Physician (Dr. Carter)",
        side: "left",
        badges: [],
        text: "15% isn\u2019t enough for me to risk changing a stable patient\u2019s routine. Efficacy isn\u2019t my main concern right now.",
      },
      {
        time: "00:55",
        speaker: "You (Pharma Rep)",
        side: "right",
        badges: [
          { label: "Mastered", color: "green" },
          { label: "Active listening", color: "blue" },
        ],
        text: "",
      },
    ],
  },
  {
    name: "Onboarding Training",
    headerIcon: "school",
    headerTitle: "Sales Onboarding: B2B SaaS Mock Pitch",
    clientVideo: "/videos/onboarding_training.mp4",
    clientImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDT58NRVLkNm5Rhl0i_491ZtkHW520iL1184PU3AKIWX4n3-mjciEM6P5Dle1d1RKBZFBoFhq0kBKUnkzHG75b8WM5aTiMOIuEvslIvU1KYptbvFQRObdfJvpbf08vxO8-x0C2fVI1HLoc6RTGWkRN84_z7S9eiBGY6egDs8z5o9idSsly4Oo9DJsWXHKj-caWVMRRmLDCNNuYNBt9Uy4CYXARMufQKg5YE21hCwxjDbIhhXVZm3c9qFEa6aYDkp_Cjbm213daz_ts",
    clientAlt: "Manager Jessica in a mock pitch onboarding session",
    clientLabel: "Virtual Client",
    speakingLabel: "Jessica (Manager) is speaking...",
    dialogue:
      "Alright, let\u2019s hear your value proposition for our new cloud security module. Treat me like a skeptical CTO.",
    dialoguePosition: "bottom",
    userImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDM098Kp4sFDqx_Jznqr9VrDSSOmyGviuCsn6_Pz9x-OjsXtxsfUPnzNVVXAf3GCPhUT2ri2RimcA0bghVO8gbwvBozVcGb07I-hNWfFNp3lu3y3MwZwVfBLrJWmfnWzG5yv_3D83_Cth-s6gEYm02im4SNGXjOTuPUjIJkwO_TUHpW07FoepCMGI4E4y-nr5RepHsg0ZlYkuCt8_FaffWw4NxL4i3JnWLCG6dM2TmSSJZBFRFARJf4h9bfCXCmw38TGTR3SonT3dM",
    userAlt: "New sales rep in an onboarding mock pitch",
    userLabel: "New Sales Rep (You)",
    speakPrompt: "Your turn to speak!",
    stageTask: "Stage task",
    stageDescription:
      "Deliver a concise value proposition for the new cloud security module, focusing on business outcomes rather than just technical features.",
    steps: [
      {
        label: "Hook the prospect with a relevant industry challenge",
        description: null,
        status: "failed",
      },
      {
        label: "Introduce the cloud security module as the specific solution",
        description: null,
        status: "success",
      },
      {
        label: "End with a strong call to action or discovery question",
        description: null,
        status: "pending",
      },
    ],
    stepsCount: "1/3",
    confidence: 45,
    transcription: [
      {
        time: "00:10",
        speaker: "Manager (Jessica)",
        side: "left",
        badges: [],
        text: "Alright, let\u2019s hear your value proposition for our new cloud security module. Treat me like a skeptical CTO.",
      },
      {
        time: "00:25",
        speaker: "You (New Rep)",
        side: "right",
        badges: [
          { label: "Improvable", color: "red" },
          { label: "Speaking their language", color: "blue" },
        ],
        text: "Our new module has AES-256 encryption and automated threat detection built-in.",
      },
      {
        time: "00:38",
        speaker: "Manager (Jessica)",
        side: "left",
        badges: [],
        text: "That\u2019s feature-dumping. Remember, a CTO cares about risk reduction and compliance. Try leading with the problem.",
      },
      {
        time: "00:52",
        speaker: "You (New Rep)",
        side: "right",
        badges: [
          { label: "Mastered", color: "green" },
          { label: "Active listening", color: "blue" },
        ],
        text: "Got it. With ransomware attacks up 40%",
      },
    ],
  },
  {
    name: "Leadership",
    headerIcon: "groups",
    headerTitle: "Leadership Training: Handling Employee Burnout",
    clientVideo: "/videos/leadership_training.mp4",
    clientImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRRVI8a_dks6ba0ddJlql3rYhJSny7t1YHEHdL_XqPz4VSZoGyM1I-QFcwGLodMC_KI74rOHcuLsWQ-jEAUDbbe6EtywsfymOPZGgCmyHkd7p2lR9XCKp-TmAR_7Ct12MdmgHrkzv4vPTzyWuts-nc1-kpefUkJvuDqfn6gThBaw1cEj0yKidffVWdQzPpoTz1b1lcQlTyBPmhO3X7dGVX9JADHNZkiTyNb80gY6_QtIH6RwaFB52jNRDeGWHapf7gxZi75QaaQcs",
    clientAlt: "Employee showing signs of burnout in a one-on-one meeting",
    clientLabel: "Virtual Client",
    speakingLabel: "Marcus is speaking...",
    dialogue:
      "I just feel like no matter how many hours I put in, the backlog keeps growing. I\u2019m exhausted.",
    dialoguePosition: "bottom",
    userImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDM098Kp4sFDqx_Jznqr9VrDSSOmyGviuCsn6_Pz9x-OjsXtxsfUPnzNVVXAf3GCPhUT2ri2RimcA0bghVO8gbwvBozVcGb07I-hNWfFNp3lu3y3MwZwVfBLrJWmfnWzG5yv_3D83_Cth-s6gEYm02im4SNGXjOTuPUjIJkwO_TUHpW07FoepCMGI4E4y-nr5RepHsg0ZlYkuCt8_FaffWw4NxL4i3JnWLCG6dM2TmSSJZBFRFARJf4h9bfCXCmw38TGTR3SonT3dM",
    userAlt: "Team manager in a leadership coaching session",
    userLabel: "Team Manager (You)",
    speakPrompt: "Your turn to speak!",
    stageTask: "Stage task",
    stageDescription:
      "Navigate a sensitive conversation with a direct report who is showing signs of burnout, showing empathy and proposing solutions.",
    steps: [
      {
        label: "Acknowledge their hard work and current stress levels",
        description: null,
        status: "pending",
      },
      {
        label: "Ask open-ended questions to understand the root cause",
        description: null,
        status: "pending",
      },
      {
        label: "Collaborate on a plan to redistribute workload",
        description: null,
        status: "success",
      },
    ],
    stepsCount: "1/3",
    confidence: 55,
    transcription: [
      {
        time: "01:05",
        speaker: "Employee (Marcus)",
        side: "left",
        badges: [],
        text: "I just feel like no matter how many hours I put in, the backlog keeps growing. I\u2019m exhausted.",
      },
      {
        time: "01:18",
        speaker: "You (Manager)",
        side: "right",
        badges: [
          { label: "Improvable", color: "red" },
          { label: "Empathetic responses", color: "blue" },
        ],
        text: "We\u2019re all busy right now, Marcus. We just need to push through this quarter.",
      },
      {
        time: "01:30",
        speaker: "Employee (Marcus)",
        side: "left",
        badges: [],
        text: "I guess so. I\u2019ll just try to work this weekend to catch up.",
      },
      {
        time: "01:45",
        speaker: "You (Manager)",
        side: "right",
        badges: [
          { label: "Mastered", color: "green" },
          { label: "Empathetic responses", color: "blue" },
        ],
        text: "Wait, no. Working weekends isn\u2019t the",
      },
    ],
  },
];

const badgeColors = {
  amber:
    "bg-amber-100 text-amber-800 border-amber-200",
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  red: "bg-red-100 text-red-800 border-red-200",
  green:
    "bg-emerald-100 text-emerald-800 border-emerald-200",
};

function StepIcon({ status }) {
  if (status === "done") {
    return (
      <span
        className="material-symbols-outlined text-tertiary-fixed-dim text-xl"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        check_circle
      </span>
    );
  }
  if (status === "success") {
    return (
      <span
        className="material-symbols-outlined text-emerald-500 text-xl"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        check_circle
      </span>
    );
  }
  if (status === "failed") {
    return (
      <span
        className="material-symbols-outlined text-red-500 text-xl"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        cancel
      </span>
    );
  }
  return (
    <div className="w-5 h-5 rounded-full border-2 border-outline-variant"></div>
  );
}

export default function CoachingFeature() {
  const [activeCat, setActiveCat] = useState(0);
  const [activeTab, setActiveTab] = useState("instructions");
  const cat = categories[activeCat];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-on-primary py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight font-headline">
            Replace passive learning with{" "}
            <span className="text-tertiary-fixed">lifelike AI role-play</span>
          </h2>
          <p className="text-lg text-primary-fixed/80 max-w-2xl mx-auto">
            Whether it's a first sales call, a tough leadership conversation, or
            a product pitch — your team practices in realistic, risk-free AI
            simulations before the real thing.
          </p>
        </div>
      </section>

      {/* Main Interactive Simulation Component */}
      <div className="max-w-7xl mx-auto px-8 -mt-12 mb-20">
        <div
          className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Left: Video Interface */}
          <div className="flex-grow flex flex-col bg-surface-container min-w-0">
            {/* Simulation Header */}
            <div className="h-14 px-4 md:px-6 flex items-center justify-between bg-surface-container-low border-b border-outline-variant/10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  {cat.headerIcon}
                </span>
                <span className="font-headline font-bold text-primary text-sm truncate">
                  {cat.headerTitle}
                </span>
              </div>
              <button
                onClick={() =>
                  setActiveCat((activeCat + 1) % categories.length)
                }
                className="bg-tertiary-fixed text-on-tertiary-fixed px-3 md:px-4 py-1.5 rounded-md text-xs md:text-sm font-bold flex items-center gap-1.5 md:gap-2 hover:opacity-90 transition-opacity active:scale-95 shrink-0"
              >
                <span className="material-symbols-outlined text-sm">bolt</span>
                Test AI coach in action
              </button>
            </div>

            {/* Video Canvas */}
            <div className="relative bg-on-background overflow-hidden aspect-video">
              {/* Background Video/Image for virtual client */}
              {cat.clientVideo ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={cat.clientVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                  style={{ backgroundImage: `url('${cat.clientImage}')` }}
                />
              )}

              {/* Top-left labels (Product Training style) */}
              {cat.clientLabel && !cat.clientVideo && (
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <span className="bg-primary/80 backdrop-blur-sm px-3 py-1 rounded text-[11px] font-bold text-white">
                    {cat.clientLabel}
                  </span>
                  {cat.speakingLabel && (
                    <span className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-medium text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      {cat.speakingLabel}
                    </span>
                  )}
                </div>
              )}

              {/* Dialogue Bubble */}
              {!cat.clientVideo && (cat.dialoguePosition === "top" ? (
                <div className="absolute top-12 left-12 max-w-md bg-surface-container-lowest/80 backdrop-blur-xl p-6 rounded-2xl rounded-tl-none border border-white/20 shadow-xl">
                  <p className="text-on-surface font-medium leading-relaxed text-sm">
                    {cat.dialogue}
                  </p>
                </div>
              ) : (
                <div className="absolute bottom-20 left-6 max-w-sm bg-surface-container-lowest/85 backdrop-blur-xl p-4 rounded-2xl rounded-bl-none border border-white/20 shadow-xl">
                  <p className="text-on-surface font-medium leading-relaxed text-sm">
                    {cat.dialogue}
                  </p>
                </div>
              ))}

              {/* Speak prompt */}
              {cat.speakPrompt && !cat.clientVideo && (
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-lg">
                      more_horiz
                    </span>
                  </div>
                  <span className="text-white/60 text-sm font-medium">
                    {cat.speakPrompt}
                  </span>
                </div>
              )}

              {/* User Inset Video */}
              {!cat.clientVideo && (
                <div className="absolute bottom-8 right-8 w-48 h-32 rounded-lg overflow-hidden border-2 border-white/30 shadow-2xl bg-surface-container-highest">
                  <img
                    alt={cat.userAlt}
                    className="w-full h-full object-cover"
                    src={cat.userImage}
                  />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                    {cat.userLabel ? (
                      <span className="text-[10px] font-bold text-white bg-primary/80 backdrop-blur-sm px-2 py-0.5 rounded">
                        {cat.userLabel}
                      </span>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-black/40 px-1 rounded">
                          Live
                        </span>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Interaction Controls (only for non-product-training style) */}
              {!cat.speakPrompt && !cat.clientVideo && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all active:scale-95">
                    <span className="material-symbols-outlined">mic</span>
                  </button>
                  <button className="px-8 h-12 rounded-full bg-primary text-white font-bold tracking-tight shadow-lg shadow-primary/20 hover:scale-105 transition-all active:scale-95">
                    Start Response
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all active:scale-95">
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right: Panel */}
          <div className="w-full md:w-80 lg:w-96 bg-surface-container-low flex flex-col border-l border-outline-variant/10 shrink-0 max-h-[80vh] md:max-h-none">
            {/* Tabs */}
            <div className="flex border-b border-outline-variant/10">
              <button
                onClick={() => setActiveTab("instructions")}
                className={`flex-1 py-4 text-sm font-bold transition-colors ${
                  activeTab === "instructions"
                    ? "text-primary border-b-2 border-primary bg-surface-container-lowest"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                Instructions
              </button>
              <button
                onClick={() => setActiveTab("transcription")}
                className={`flex-1 py-4 text-sm font-semibold transition-colors ${
                  activeTab === "transcription"
                    ? "text-primary border-b-2 border-primary bg-surface-container-lowest"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                Transcription
              </button>
            </div>

            {/* Panel Content */}
            <div className="p-6 flex-grow overflow-y-auto">
              {activeTab === "instructions" ? (
                <>
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-on-surface">
                        Stage task
                      </span>
                      {cat.stepsCount && (
                        <span className="text-sm font-bold text-on-surface-variant">
                          {cat.stepsCount}
                        </span>
                      )}
                    </div>
                    {cat.stageDescription ? (
                      <p className="text-sm text-on-surface-variant leading-relaxed mt-1">
                        {cat.stageDescription}
                      </p>
                    ) : (
                      <h3 className="text-lg font-headline font-bold text-primary leading-snug">
                        {cat.stageTask}
                      </h3>
                    )}
                  </div>

                  {cat.stageDescription && (
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-bold text-on-surface">
                        Instructions
                      </span>
                      {cat.stepsCount && (
                        <span className="text-sm font-bold text-on-surface-variant">
                          {cat.stepsCount}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="space-y-4">
                    {cat.steps.map((step) => (
                      <div
                        key={step.label}
                        className={`flex gap-4 ${
                          step.status === "failed"
                            ? "p-3 rounded-xl bg-red-50/50 border border-red-200/40"
                            : step.status === "success"
                            ? "p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/40"
                            : step.status === "dimmed"
                            ? "opacity-50"
                            : ""
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          <StepIcon status={step.status} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-on-surface">
                            {step.label}
                          </p>
                          {step.description && (
                            <p className="text-xs text-on-surface-variant mt-1">
                              {step.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="space-y-6">
                  {cat.transcription.map((msg, i) => (
                    <div
                      key={i}
                      className={
                        msg.side === "right" ? "flex flex-col items-end" : ""
                      }
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[11px] font-mono text-on-surface-variant">
                          {msg.time}
                        </span>
                        <span className="text-xs font-bold text-on-surface">
                          {msg.speaker}
                        </span>
                      </div>
                      {msg.badges.length > 0 && (
                        <div className="flex items-center gap-1.5 mb-2">
                          {msg.badges.map((b) => (
                            <span
                              key={b.label}
                              className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                                badgeColors[b.color]
                              }`}
                            >
                              {b.label}
                            </span>
                          ))}
                        </div>
                      )}
                      {msg.text && (
                        <div
                          className={
                            msg.side === "right"
                              ? "bg-primary/5 rounded-xl rounded-tr-none p-3.5 border border-primary/15"
                              : "bg-surface-container-high rounded-xl rounded-tl-none p-3.5 border border-outline-variant/15"
                          }
                        >
                          <p className="text-xs text-on-surface leading-relaxed">
                            {msg.text}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* AI Confidence Indicator */}
            <div className="p-4 bg-surface-container-high m-4 rounded-xl border border-white/50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  AI Confidence Score
                </span>
                <span className="text-xs font-extrabold text-primary">
                  Ready
                </span>
              </div>
              <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
                <div
                  className="h-full bg-tertiary-fixed-dim rounded-full transition-all duration-500"
                  style={{ width: `${cat.confidence}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-6 mt-8 border-b border-outline-variant/20 pb-1">
          {categories.map((c, i) => (
            <button
              key={c.name}
              onClick={() => {
                setActiveCat(i);
                setActiveTab("instructions");
              }}
              className={`text-base pb-3 transition-colors ${
                i === activeCat
                  ? "font-bold text-primary border-b-2 border-primary"
                  : "font-medium text-on-surface-variant hover:text-primary"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

    </>
  );
}
