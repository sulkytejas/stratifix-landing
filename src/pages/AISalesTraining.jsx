import SolutionPage from "../components/SolutionPage";

const data = {
  hero: {
    badge: "AI-Powered Sales Excellence",
    title: "Transform your sales team into top performers with",
    titleHighlight: "AI coaching",
    description:
      "Equip your sales reps with AI-driven behavioral training that builds confidence, sharpens objection handling, and accelerates deal velocity.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmA7I6zx_2nnt5jvXkTo_eDHuPM_Ld-XvbgW-kYnpQmy64JPVmAGSXWqKvLHyvNjJVikwaXUkGxLrs8XJxWoyZbkVY7FzjSTbfJi5_Lx5oxwHVk82c52emuThRrdC_VtJh2uxt4EpmzGHdd6qYcj7lqQDl9ZkdXlsodFLaBgxpJxQlno2LcVajBrDbBm5ZrMpjPuNaZUb7AzSWkHz03G1ia8odFlV8T2SngTFeuie4yWmQJ4JUs1TxoVjeS-wtC5wfMaZApyiIzM8",
    imageAlt: "Sales professional using AI coaching dashboard",
    insightQuote:
      '"Rep confidence score increased 34% after practicing the enterprise pricing objection sequence."',
  },
  metrics: [
    { value: "40%", label: "Faster ramp-up time" },
    { value: "10x", label: "More practice conversations" },
    { value: "35%", label: "Higher quota attainment" },
    { value: "60%", label: "Less manager coaching time" },
  ],
  challenge: {
    title: "The Sales Training Dilemma",
    description:
      "Most sales training is forgotten within 30 days. Reps need ongoing, personalized practice — not one-off workshops. We make that scalable.",
    card1: {
      title: "One-size-fits-all training doesn't work",
      description:
        "Generic playbooks ignore individual skill gaps. Your reps need adaptive coaching that targets their specific weaknesses — from discovery calls to closing techniques.",
    },
    card2: {
      title: "The Practice Gap",
      description:
        "Reps get one shot at real deals. Without safe, realistic practice environments, they learn from costly mistakes instead of preparation.",
    },
  },
  testimonial: {
    quote:
      "Stratyfix AI cut our new hire ramp time in half. Reps are hitting quota 45 days earlier and their discovery call quality scores are up 28%.",
    name: "Rahul Mehta",
    role: "Head of Sales Enablement, TechScale India",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsT9nM7iHb3nULO4XOwO6vAfPXDo5TtmbbslzdJHo5WdiORavB9ybJKpavx7RtIFwkbbX6vR_jfoINO4rCc8fCwIOKgbkJJFfkpb_x5ymORN4x4nIM43Bi2oDmJ4NmSDhwgbpZjW9FadqBMayni9dprncq33a31rxmRrr4im3f4maRzobc21vIGVj7oFzLja8nyKAduzPFTOVYVqG5bNgEU329WmU4kFxr8dL9AzZS-4B81whZ1IYmp9nAybA8vcirpJDSXlTAxa0",
  },
  mastery: {
    title: "Build sales muscle memory through AI roleplay",
    description:
      "Our AI personas simulate real buyer scenarios — from skeptical CFOs to technical evaluators. Reps practice high-stakes conversations until they're second nature.",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDL_obX4xwXtvHgn3hpkq9rB9svG2yIESG6TPgOOHhg63MnX0R8U1_LvEbK0EH6vyGIjT7qAiHDw2d2-d0NL0VWd0UR12O0ubihyFe5KpxEnO6DknWik98nBIW0wDcRW2usYZMRMQ_lT-n7Es40DxVF8wexLynZ3F-ZR38aCmzo8hko36c6iBPFfrmMryDzKP6Oc6iIpKoAPi291OpeXdQoW8qFrlhz7sjgrk_MqDkhBl3GkI9dKq4dBEWAM0b7OVjXWPefeVEsppE",
    image1Alt: "AI sales coaching session with digital persona",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFhtrcMB4djVz-Gyk2uJyFwLNM7oThyOnN5YV26oVtSwJXCYJc5LKbJ76sJrIMcdaZYhFKRQ9Fbs-n2lhM9TrA7Nkpwk_WEm1Et8hzvH8vYjuehD0cmAFNzbfptQhXo1Si7SgHbGx56aZrkPm2nW4kVhmatk41BVVBT5TAc9k2BZAVKWjk511e5smyIDbmnksNiE5Q7cZZufSiUde1jVS_HAN1wiQaPYg4bSVeaBWP_abZ6zBvoEYrVD_H_AUbJMOP5XxYLl9Sedw",
    image2Alt: "Sales performance metrics and behavioral heatmaps",
    checkpoints: [
      "Discovery call simulations with adaptive buyer personas",
      "Objection handling drills for pricing and competition",
      "Enterprise deal negotiation and multi-stakeholder scenarios",
    ],
  },
  features: {
    title: "Purpose-Built for Sales Excellence",
    description:
      "AI tools that integrate with your sales workflow to deliver continuous, measurable improvement across every rep.",
    items: [
      {
        icon: "voice_selection",
        title: "Pitch Analysis",
        description:
          "Real-time vocal analysis scores confidence, clarity, and persuasiveness — helping reps nail their delivery every time.",
      },
      {
        icon: "psychology_alt",
        title: "Behavioral Coaching",
        description:
          "Clone the communication patterns of your top closers and create personalized coaching paths for every team member.",
      },
      {
        icon: "speed",
        title: "Instant Debrief",
        description:
          "Reps receive actionable feedback within seconds of completing a practice session — no waiting for manager reviews.",
      },
    ],
  },
  impact: {
    title: "Measure revenue impact, not just training hours",
    description:
      "Go beyond completion rates. Our analytics connect coaching activity directly to pipeline velocity, win rates, and quota attainment.",
    bars: [
      { label: "Discovery Call Quality Score", value: "91%", width: "91%" },
      { label: "Objection Handling Proficiency", value: "+38%", width: "72%" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLCcUR4TrquBpgv5hXEMgfz3FhGaYKJcgaiPpcfcDRLCL04TBgdOia41L0Hx9USnbadIgN0ExeStDob_mtiEFBtAp_kIoLr2EZv2z1pTTctEdTEEIDoRYY7WrpQJ74cyXv5unp5wUbAH4PqC_3feKy4e5KDoqs5HAg9-mD-zcBGHVx4tGKswCphn9jz6AXO1XmqvX5l2zxGkmQV0Vw4TFPEGEsgf5ew-06-LaXezTjcqwPhjQRx8plPEn9tTsQ8P9CjhaPdMjkWk8",
    imageAlt: "Sales performance growth chart with interactive analytics",
  },
  faqs: [
    {
      question: "How does the AI simulate realistic buyer personas?",
      answer:
        "Our AI ingests your ICP data, product documentation, and competitive intelligence to create buyer personas that respond with industry-accurate objections, questions, and negotiation tactics.",
    },
    {
      question: "Can managers track individual rep progress?",
      answer:
        "Yes. The analytics dashboard provides granular visibility into each rep's skill development, practice frequency, and improvement trends across specific competencies like discovery, objection handling, and closing.",
    },
    {
      question: "How quickly can we deploy for a new sales team?",
      answer:
        "Most teams are up and running within 48 hours. Our onboarding process includes custom scenario creation, CRM integration, and initial persona configuration tailored to your sales motion.",
    },
  ],
};

export default function AISalesTraining() {
  return <SolutionPage data={data} />;
}
