import SolutionPage from "../components/SolutionPage";

const data = {
  hero: {
    badge: "The Digital Concierge for Telco Sales",
    title: "Stand out in a crowded telco market with",
    titleHighlight: "AI coaching",
    description:
      "Equip your sales teams with the precision of AI-driven behavioral insights to dominate the complex telecommunications landscape.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmA7I6zx_2nnt5jvXkTo_eDHuPM_Ld-XvbgW-kYnpQmy64JPVmAGSXWqKvLHyvNjJVikwaXUkGxLrs8XJxWoyZbkVY7FzjSTbfJi5_Lx5oxwHVk82c52emuThRrdC_VtJh2uxt4EpmzGHdd6qYcj7lqQDl9ZkdXlsodFLaBgxpJxQlno2LcVajBrDbBm5ZrMpjPuNaZUb7AzSWkHz03G1ia8odFlV8T2SngTFeuie4yWmQJ4JUs1TxoVjeS-wtC5wfMaZApyiIzM8",
    imageAlt:
      "Telecommunications sales executive using AI dashboard",
    insightQuote:
      '"Agent sentiment transitioned from neutral to highly persuasive in last 40 seconds."',
  },
  metrics: [
    { value: "25%", label: "Faster time-to-competency" },
    { value: "7x", label: "More conversation practice" },
    { value: "40%", label: "Higher lead conversion" },
    { value: "15%", label: "Churn reduction rate" },
  ],
  challenge: {
    title: "The Telco Sales Paradox",
    description:
      "60% of agents fail to meet targets. Complexity is rising, but training hasn't changed in a decade. We break the cycle.",
    card1: {
      title: "Static training vs. Dynamic markets",
      description:
        "Traditional scripts fail when faced with high-churn environments and rapid product pivots. Your team needs real-time adaptability.",
    },
    card2: {
      title: "The Talent Gap",
      description:
        "Top performers are born, not made? Not anymore. We clone your 1% behaviors across the entire 99%.",
    },
  },
  testimonial: {
    quote:
      "Stratyfix AI transformed our retail strategy. By simulating complex fiber bundle objections, our staff reached peak performance in weeks, not months.",
    name: "Ananya Sharma",
    role: "VP of Sales Enablement, Global Connect",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsT9nM7iHb3nULO4XOwO6vAfPXDo5TtmbbslzdJHo5WdiORavB9ybJKpavx7RtIFwkbbX6vR_jfoINO4rCc8fCwIOKgbkJJFfkpb_x5ymORN4x4nIM43Bi2oDmJ4NmSDhwgbpZjW9FadqBMayni9dprncq33a31rxmRrr4im3f4maRzobc21vIGVj7oFzLja8nyKAduzPFTOVYVqG5bNgEU329WmU4kFxr8dL9AzZS-4B81whZ1IYmp9nAybA8vcirpJDSXlTAxa0",
  },
  mastery: {
    title: "Master product complexity with zero risk",
    description:
      "Our simulations create a safe space to fail. Agents practice 5G upsells, retention strategies, and technical troubleshooting with realistic AI personas that replicate your toughest customers.",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDL_obX4xwXtvHgn3hpkq9rB9svG2yIESG6TPgOOHhg63MnX0R8U1_LvEbK0EH6vyGIjT7qAiHDw2d2-d0NL0VWd0UR12O0ubihyFe5KpxEnO6DknWik98nBIW0wDcRW2usYZMRMQ_lT-n7Es40DxVF8wexLynZ3F-ZR38aCmzo8hko36c6iBPFfrmMryDzKP6Oc6iIpKoAPi291OpeXdQoW8qFrlhz7sjgrk_MqDkhBl3GkI9dKq4dBEWAM0b7OVjXWPefeVEsppE",
    image1Alt: "AI sales coaching session with digital human persona",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFhtrcMB4djVz-Gyk2uJyFwLNM7oThyOnN5YV26oVtSwJXCYJc5LKbJ76sJrIMcdaZYhFKRQ9Fbs-n2lhM9TrA7Nkpwk_WEm1Et8hzvH8vYjuehD0cmAFNzbfptQhXo1Si7SgHbGx56aZrkPm2nW4kVhmatk41BVVBT5TAc9k2BZAVKWjk511e5smyIDbmnksNiE5Q7cZZufSiUde1jVS_HAN1wiQaPYg4bSVeaBWP_abZ6zBvoEYrVD_H_AUbJMOP5XxYLl9Sedw",
    image2Alt: "Behavioral heatmaps and sales performance metrics dashboard",
    checkpoints: [
      "Scenario-based fiber rollout simulations",
      "Dynamic objection handling for premium tiers",
      "Multi-service bundle negotiation training",
    ],
  },
  features: {
    title: "Built for High-Scale Telco Ops",
    description:
      "Sophisticated AI tools designed to integrate seamlessly with your existing CRM and training workflows.",
    items: [
      {
        icon: "voice_selection",
        title: "Tone Analysis",
        description:
          'Advanced vocal analysis detects hesitation or over-aggression, coaching agents on the "Executive Presence" required for B2B deals.',
      },
      {
        icon: "psychology_alt",
        title: "Behavioral Cloning",
        description:
          "Map the soft skills of your top 5% performers and create automated coaching paths to uplift the rest of the organization.",
      },
      {
        icon: "speed",
        title: "Instant Feedback",
        description:
          "Eliminate the feedback lag. Agents receive granular, actionable insights seconds after completing a practice session.",
      },
    ],
  },
  impact: {
    title: "Measure impact, not just completion",
    description:
      'Move beyond "compliance" training. Our dashboard provides executive-level visibility into the behavioral readiness of your global workforce.',
    bars: [
      { label: "Regional Readiness Score", value: "84%", width: "84%" },
      { label: "Empathy Rating Improvement", value: "+22%", width: "65%" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLCcUR4TrquBpgv5hXEMgfz3FhGaYKJcgaiPpcfcDRLCL04TBgdOia41L0Hx9USnbadIgN0ExeStDob_mtiEFBtAp_kIoLr2EZv2z1pTTctEdTEEIDoRYY7WrpQJ74cyXv5unp5wUbAH4PqC_3feKy4e5KDoqs5HAg9-mD-zcBGHVx4tGKswCphn9jz6AXO1XmqvX5l2zxGkmQV0Vw4TFPEGEsgf5ew-06-LaXezTjcqwPhjQRx8plPEn9tTsQ8P9CjhaPdMjkWk8",
    imageAlt: "Agent performance growth chart with interactive UI",
  },
  faqs: [
    {
      question: "How does the AI handle industry-specific jargon?",
      answer:
        "Our models are specifically trained on telecommunications datasets, understanding everything from latency technicals to 5G infrastructure terminology.",
    },
    {
      question: "Can we integrate with our existing LMS?",
      answer:
        "Yes, Stratyfix features a robust API and native integrations for all major enterprise Learning Management Systems including Cornerstone, SAP SuccessFactors, and more.",
    },
    {
      question: "Is the AI training biased towards certain accents?",
      answer:
        "No. Our voice analysis models are trained on diverse global datasets to ensure fair and accurate assessment across all accents and dialects.",
    },
  ],
};

export default function Telecommunications() {
  return <SolutionPage data={data} />;
}
