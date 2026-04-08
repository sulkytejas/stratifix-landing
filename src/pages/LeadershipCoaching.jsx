import SolutionPage from "../components/SolutionPage";

const data = {
  hero: {
    badge: "Next-Gen Executive Training",
    title: "Train leaders who build",
    titleHighlight: "high-performing teams.",
    description:
      "Scale emotional intelligence and behavioral coaching across your enterprise. Our AI-driven leadership training transforms managers into inspiring coaches through immersive, real-world simulations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBidxUGkl_1HvOWnvnoABRGHwRmyXqqnFlHN7kPOYPgtMa8caFKsotiP6IsECZsZm2hKP2xixoKkSl8MRtIYBrydo3z8q9mqajwSlaXFhFyl78Av9BqJqkRmdfJjUd-wVTmWhtQOxUXV1I-9W1BzvS_WmMrfdQ8eJNnbSRanog4UAoJNBRuJGFNB_6G4dzIr7Mq5R_qa3ibIR6zFpHnce_7T4HJgEWhyEnXqIAG8pZlJNqYD9gTxrh4_Ing7zy3qyVWuTNW1Zjm2T4",
    imageAlt: "Executive meeting room with diverse leadership team",
    insightQuote:
      '"88% coaching effectiveness detected. Empathy markers strong — try pausing before delivering critical feedback."',
  },
  metrics: [
    { value: "20%", label: "Higher retention" },
    { value: "3x", label: "Coaching frequency" },
    { value: "85%", label: "Manager satisfaction" },
    { value: "12k+", label: "Data points per interaction" },
  ],
  challenge: {
    title: "Bridging the Leadership Gap",
    description:
      "Traditional training is static and quickly forgotten. We provide a dynamic AI ecosystem that lives where leaders work.",
    card1: {
      title: "The Static Training Trap",
      description:
        "Expensive one-off workshops lack sustainable behavioral change. Generic role-play scenarios don't reflect team-specific nuances, and there's zero data on how leaders apply skills in the flow of work.",
    },
    card2: {
      title: "The Intelligent Leader",
      description:
        "Continuous, AI-driven feedback loops that encourage daily growth. Hyper-personalized simulations modeled after your organization's real challenges.",
    },
  },
  testimonial: {
    quote:
      "Stratyfix has revolutionized how our managers handle difficult conversations. We've seen a measurable shift in team confidence and retention within just 30 days.",
    name: "Head of Enterprise Sales",
    role: "Vodafone Global Business",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEHACS5UZ9SGt0GvGCGNyV8KEheawgn9-RA4XSJAVtIBMzCCCaKpo418JgMeFUALZOuuiMSQdgk1ukaE6tPcs9noxFG-nu9F1BRZroj4kD7FegVRFfvsAuBNPLqXN132U6cg2p8KUQgfVy8G2zobwO5v33oeDt-tbHW0wlDlCdirIUsmRS08m_QwmYuyDeNNCoUrqvDpQ0mVmuUxrwwp-ua6xhc2T8l9cTtP1wS9L4sZARGF2B8FqIBKUHQzP8hHxZ_NIu16Lewjk",
  },
  mastery: {
    title: "Master every leadership moment",
    description:
      "From difficult conversations to performance reviews, our AI simulations prepare leaders for high-stakes interpersonal dynamics with zero risk.",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRKgmn67fwht1uWTHR0TQ5jgN5D_2eHbbJUTy3Mik-sq5Rh1wcBK0yFaU2OZczeLDKg3hCqzGQRRrvILntIyL99pTBZGIcVYFRxB-3WA42bn_k-fOx9MOdCssGovf6cM7-Z-jm3-ciqJBSa3WjEqHfu7t-b78Uy66KAGz5cLr5l8vcy1LTEDOwP7YzX6YgQtX8y0yTMQdO0RpJ1rolrLEDZkNtk-NCSFCSKcffiZJ7G7dRo54PxNXUyLfE1ecXhi1OTecBpZjMkiM",
    image1Alt: "One-on-one coaching meeting in a minimalist office",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFhtrcMB4djVz-Gyk2uJyFwLNM7oThyOnN5YV26oVtSwJXCYJc5LKbJ76sJrIMcdaZYhFKRQ9Fbs-n2lhM9TrA7Nkpwk_WEm1Et8hzvH8vYjuehD0cmAFNzbfptQhXo1Si7SgHbGx56aZrkPm2nW4kVhmatk41BVVBT5TAc9k2BZAVKWjk511e5smyIDbmnksNiE5Q7cZZufSiUde1jVS_HAN1wiQaPYg4bSVeaBWP_abZ6zBvoEYrVD_H_AUbJMOP5XxYLl9Sedw",
    image2Alt: "Leadership performance analytics dashboard",
    checkpoints: [
      "Difficult conversations with psychological safety",
      "Data-backed performance review strategies",
      "Executive presence and communication refinement",
    ],
  },
  features: {
    title: "Built for Enterprise Leadership at Scale",
    description:
      "Train 1,000 managers with the same consistency and depth as a private executive coach session.",
    items: [
      {
        icon: "groups_2",
        title: "Scalable Coaching",
        description:
          "Deliver consistent, high-quality coaching across regions and time zones. Every manager gets the same world-class experience.",
      },
      {
        icon: "monitoring",
        title: "Data-Driven Insights",
        description:
          "Identify skill gaps before they become performance issues with predictive behavioral analytics and leadership readiness scores.",
      },
      {
        icon: "encrypted",
        title: "Enterprise Security",
        description:
          "ISO-certified infrastructure ensuring that your leadership conversations remain confidential and secure at all times.",
      },
    ],
  },
  impact: {
    title: "Measure leadership ROI, not just attendance",
    description:
      "Go beyond workshop completion rates. Our analytics connect coaching activity directly to team retention, engagement scores, and business outcomes.",
    bars: [
      { label: "Leadership Effectiveness Score", value: "88%", width: "88%" },
      { label: "Team Engagement Uplift", value: "+24%", width: "70%" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLCcUR4TrquBpgv5hXEMgfz3FhGaYKJcgaiPpcfcDRLCL04TBgdOia41L0Hx9USnbadIgN0ExeStDob_mtiEFBtAp_kIoLr2EZv2z1pTTctEdTEEIDoRYY7WrpQJ74cyXv5unp5wUbAH4PqC_3feKy4e5KDoqs5HAg9-mD-zcBGHVx4tGKswCphn9jz6AXO1XmqvX5l2zxGkmQV0Vw4TFPEGEsgf5ew-06-LaXezTjcqwPhjQRx8plPEn9tTsQ8P9CjhaPdMjkWk8",
    imageAlt: "Leadership performance growth analytics",
  },
  faqs: [
    {
      question: "How does AI coaching compare to human coaching?",
      answer:
        "Our AI mimics the expertise of top-tier coaches while providing 24/7 availability and zero judgment, making it easier for leaders to practice vulnerable conversations. It complements, not replaces, human coaching.",
    },
    {
      question: "Is the behavioral data used for performance reviews?",
      answer:
        "No. Coaching data is kept confidential and separate from performance evaluations. Leaders need a safe space to practice — our platform guarantees that psychological safety.",
    },
    {
      question: "Can we customize the scenarios to our industry?",
      answer:
        "Absolutely. Our scenario builder allows you to create leadership simulations that mirror your organization's specific culture, challenges, and interpersonal dynamics.",
    },
  ],
};

export default function LeadershipCoaching() {
  return <SolutionPage data={data} />;
}
