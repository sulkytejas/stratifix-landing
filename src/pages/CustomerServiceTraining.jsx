import SolutionPage from "../components/SolutionPage";

const data = {
  hero: {
    badge: "Enterprise AI Training",
    title: "Empower your service teams with",
    titleHighlight: "AI-driven empathy.",
    description:
      "Scale emotional intelligence and soft skills across your support organization through immersive, real-world simulations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXfciWH8rP3I3iyGR8X251PIPx1LKX_h9IUt6d1jXL3AKm3PDIGCCn0mEWcpYEnTaU0aE9yMfzktX8hYU2hhbPeHX4WInNNupQs1fJ_K1PL4JypRD0dJdOKgs0FdanxYnAM0G52UB-j8EWTSTXg3YPczBg-8MQoj14uotOAQOKiWTQa2MZc9TSf355Ls4ijIPDLV2Qi0oIlWwHHBguPAB3fG6O_5DfQNp1oNN-1PnbMWmnPcOvdmHiJjq1rj96wEP8ZG0XDkSqFzU",
    imageAlt: "Modern customer service center with professional agents",
    insightQuote:
      '"The AI identified a subtle shift in the customer\'s tone before I even noticed it. Truly game-changing."',
  },
  metrics: [
    { value: "25%", label: "Higher CSAT scores" },
    { value: "4x", label: "Faster agent onboarding" },
    { value: "90%", label: "Agent retention rate" },
    { value: "12k+", label: "Data points per interaction" },
  ],
  challenge: {
    title: "The Evolution of Support Training",
    description:
      "Traditional training relies on rigid manuals and infrequent role-play, leaving agents unprepared for real human nuance. We change that.",
    card1: {
      title: "The Static Support Script",
      description:
        "Rigid manuals and infrequent role-play leave agents unprepared for real human nuance. Every customer is different, but training treats them all the same.",
    },
    card2: {
      title: "The Intelligent Service Leader",
      description:
        "Continuous, AI-driven feedback loops and hyper-personalized simulations that adapt to every agent's unique growth path and learning style.",
    },
  },
  testimonial: {
    quote:
      "Stratyfix has completely redefined how we approach support training. We've seen a measurable shift in our agents' ability to handle complex emotional cases, leading directly to our highest CSAT scores in a decade.",
    name: "Alexandra Chen",
    role: "Head of Customer Experience, Global Logistics Corp",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrAsuqydR5PVqfpigle0uB8XP_ztCbMyl4ZkhokmtYnTv-BXxnjPlLG7-vEs9JTP73ht94f1qEUVacJOyq6YwV5hVB8HE9hGLbSt2V7u6WcjiMtjAPRYaMJioOeOuwO0MRjf9bG5SSPDbjGcoy6OODA3NvIL0gQHF4cIORtolZiWoQWJlZovL1IHjWEIxfhrcZwAfRqtZ8EXdOVaMliNkTNmlm2HmGjcc4VUmQnVpIK8BMUq8_y8qG7guY9RyA0GZYHY32CSKyUrs",
  },
  mastery: {
    title: "Master every customer interaction",
    description:
      "From de-escalating angry callers to proactive upselling, our AI simulations prepare agents for the full spectrum of customer service scenarios.",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA12AeGqgq0-KkyGJgIaLjtL08ppGhwu-U2OLk96FBp3iLwHr2OXT8ICPtGZBhxeudTs9F90h735ZQLPeDBbUw8JpAj8RH1ct-7Mke78OzUj9PSV7gQPXF2Vpv81mFQVQRAqmYcXlJNaUyzUnoLhkIJxjBW3S8h-a8az5_OrxjiHbgZc0FCEAWQMSm0t9vP3eBWeeTd3hI66Th3-cP92h1DVCSnVCbEgXm1H6SgB8OWX8JrcDSw61rmKcPlH9T9jK3uZAtmNWAUV7g",
    image1Alt: "Professional woman in customer service training",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFhtrcMB4djVz-Gyk2uJyFwLNM7oThyOnN5YV26oVtSwJXCYJc5LKbJ76sJrIMcdaZYhFKRQ9Fbs-n2lhM9TrA7Nkpwk_WEm1Et8hzvH8vYjuehD0cmAFNzbfptQhXo1Si7SgHbGx56aZrkPm2nW4kVhmatk41BVVBT5TAc9k2BZAVKWjk511e5smyIDbmnksNiE5Q7cZZufSiUde1jVS_HAN1wiQaPYg4bSVeaBWP_abZ6zBvoEYrVD_H_AUbJMOP5XxYLl9Sedw",
    image2Alt: "Agent performance analytics dashboard",
    checkpoints: [
      "Vocal tonal balancing and active listening validation",
      "De-escalation techniques for high-tension situations",
      "Proactive upselling with natural value-add positioning",
    ],
  },
  features: {
    title: "The Science of Service",
    description:
      "Our proprietary AI analyzes voice, tone, sentiment, and visual cues to provide the most comprehensive soft-skill assessment in the industry.",
    items: [
      {
        icon: "psychology",
        title: "Empathy Mapping",
        description:
          "Real-time emotional intelligence scoring that helps agents understand and respond to customer sentiment with precision.",
      },
      {
        icon: "analytics",
        title: "Real-time Analysis",
        description:
          "Agents receive micro-coaching moments instantly, allowing for rapid course correction and behavioral transformation during practice.",
      },
      {
        icon: "verified_user",
        title: "Soft-Skill Audit",
        description:
          "Comprehensive assessment of communication style, empathy markers, and resolution effectiveness across every interaction.",
      },
    ],
  },
  impact: {
    title: "Measure service quality, not just call volume",
    description:
      "Go beyond handle time metrics. Our dashboard provides visibility into the emotional intelligence and empathy readiness of your entire support team.",
    bars: [
      { label: "Customer Satisfaction Score", value: "94%", width: "94%" },
      { label: "First-Call Resolution Rate", value: "+31%", width: "76%" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLCcUR4TrquBpgv5hXEMgfz3FhGaYKJcgaiPpcfcDRLCL04TBgdOia41L0Hx9USnbadIgN0ExeStDob_mtiEFBtAp_kIoLr2EZv2z1pTTctEdTEEIDoRYY7WrpQJ74cyXv5unp5wUbAH4PqC_3feKy4e5KDoqs5HAg9-mD-zcBGHVx4tGKswCphn9jz6AXO1XmqvX5l2zxGkmQV0Vw4TFPEGEsgf5ew-06-LaXezTjcqwPhjQRx8plPEn9tTsQ8P9CjhaPdMjkWk8",
    imageAlt: "Customer service performance analytics",
  },
  faqs: [
    {
      question: "How long does it take to implement the AI training?",
      answer:
        "Most support teams are fully operational within 2 weeks. Our onboarding includes custom scenario creation, knowledge base integration, and initial calibration to your brand voice and service standards.",
    },
    {
      question: "Can we customize the scenarios to our specific industry?",
      answer:
        "Absolutely. Our scenario builder allows you to create simulations that mirror your exact customer base, product catalog, and common support issues — from technical troubleshooting to billing disputes.",
    },
    {
      question: "Is the AI analysis compliant with data privacy regulations?",
      answer:
        "Yes. Stratyfix is GDPR compliant, ISO 27001 certified, and offers data residency options. All coaching data is encrypted and never used to train public models.",
    },
    {
      question: "What metrics do you track for agent performance?",
      answer:
        "We track empathy scores, resolution effectiveness, tone consistency, active listening quality, de-escalation success rates, and overall customer sentiment impact — all in real time.",
    },
  ],
};

export default function CustomerServiceTraining() {
  return <SolutionPage data={data} />;
}
