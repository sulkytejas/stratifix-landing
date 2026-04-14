import { useState } from "react";

const faqs = [
  {
    question: "What is Stratifix?",
    answer:
      "Stratifix is an AI-powered sales coaching platform built for enterprise B2B sales teams in India. It puts reps inside realistic simulated sales conversations — powered by AI buyer personas — so they can practice pitching, objection handling, and deal negotiation before they ever sit across from a real buyer.\n\nAfter each role-play, Stratifix analyzes the rep's performance across an 8-skill scoring system and delivers specific, actionable feedback tied to your organization's sales methodology and product knowledge. The result is coaching that is impactful, scalable, and measurable — without adding headcount to your training function.",
  },
  {
    question: "What is AI sales coaching software?",
    answer:
      "Traditional sales training has a well-known problem: reps sit through a workshop, retain a fraction of what they heard, and then face a real buyer with no meaningful practice behind them.\n\nAI coaching software exists to close that gap. Platforms like Stratifix simulate realistic buyer conversations using AI-powered personas built from actual customer profiles — complete with defined personalities, objections, needs, and communication styles. Reps engage in role-plays that mirror the situations they face every day: cold calls, discovery meetings, product demos, pricing negotiations, and competitive objection handling.\n\nAfter each interaction, the AI analyzes what happened and delivers immediate, specific feedback — not generic encouragement, but precise observations on where the rep lost the thread, which objection went unanswered, or how closely their responses aligned with the sales methodology the organization expects.",
  },
  {
    question: "What problems does Stratifix solve?",
    answer:
      "Practice has no place in traditional sales training — reps absorb a fraction of content and face real buyers with no rehearsal. Stratifix gives reps a place to practice in realistic simulations with immediate feedback.\n\nGood coaching doesn't scale — a skilled sales manager can't coach every rep before every meeting. Stratifix removes that constraint with consistent feedback across every office and region.\n\nTraining impact is invisible — completion rates tell you nothing about behavior change. Stratifix generates objective data from every session, tracking skill development over time.\n\nChange doesn't reach the field fast enough — new coaching scenarios can be built and deployed in minutes using the 4-step template wizard, reaching the full team immediately.",
  },
  {
    question: "What use cases does Stratifix cover?",
    answer:
      "Sales Onboarding & Ramp-Up — Compress ramp-up time by giving new hires realistic practice before they face live buyers.\n\nObjection Handling & Negotiation — Reps practice handling real objections from AI personas modeled on your actual buyer types.\n\nProduct Launch Readiness — The entire team practices new pitch and messaging before going live with customers.\n\nSolution & Consultative Selling — Simulate multi-stakeholder conversations from technical evaluators to CXOs.\n\nCompetitive Selling — Build scenarios around specific competitor situations with targeted positioning practice.\n\nCohort-Based Training Programs — Run structured training programs across teams with progress tracking and benchmarking.",
  },
  {
    question: "Who is Stratifix built for?",
    answer:
      "Stratifix is built for Indian enterprise B2B sales organizations that need their customer-facing teams to be sharper, faster, and more consistent. We typically work with heads of sales, sales enablement leads, L&D professionals, and CXOs responsible for commercial performance.\n\nIdeal for companies with sales teams of 20+ reps, particularly in industries like SaaS, IT services, BFSI, pharma, manufacturing, and telecom — where deal complexity is high and the cost of a poorly handled conversation is significant.",
  },
  {
    question: "What skills does Stratifix analyze?",
    answer:
      "Stratifix evaluates rep performance across an 8-skill scoring system:\n\n1. Product Knowledge — accurate representation of features, pricing, and value propositions\n2. Discovery & Qualification — asking the right questions to understand buyer needs\n3. Objection Handling — effectively addressing concerns and pushback\n4. Value Articulation — connecting capabilities to buyer's business outcomes\n5. Competitive Positioning — differentiating against competitors\n6. Communication Clarity — clear, concise, well-structured messaging\n7. Active Listening — genuine attention and responsive engagement\n8. Closing & Next Steps — moving conversations toward clear next actions\n\nEach skill is scored per session, tracked over time, and benchmarked across teams.",
  },
  {
    question: "How does Stratifix's AI work?",
    answer:
      "Stratifix combines several AI technologies: AI Buyer Personas built using your actual buyer profiles and powered by GPT-4o for natural, adaptive conversation. Voice AI with real-time interaction powered by Deepgram and ElevenLabs. Simli-powered photorealistic avatars that make practice sessions feel like real video calls. A RAG-powered knowledge base grounded in your organization's actual product information and sales methodology. Plus live coaching interruptions that guide reps in real-time without breaking conversation flow.",
  },
  {
    question: "How does Stratifix avoid hallucinations?",
    answer:
      "At multiple levels: The RAG-powered knowledge base ensures AI personas and feedback are anchored in your actual documentation — not generic world knowledge. Training administrators define scenario parameters and buyer persona characteristics using the 4-step template wizard. Coaching scenarios are reviewed before deployment. And each session runs independently with no cross-contamination between users.",
  },
  {
    question: "Can I customize Stratifix for my sales methodology?",
    answer:
      "Yes. The 4-step template wizard and persona creator let administrators build coaching scenarios tailored to your specific sales process — whether that's MEDDIC, SPIN, Challenger, Solution Selling, or a proprietary methodology. You define the buyer personas, scenario context, and evaluation criteria. The platform adapts its scoring and feedback accordingly.",
  },
  {
    question: "How is Stratifix priced?",
    answer:
      "Stratifix uses a subscription model designed for enterprise teams. Pricing is based on the number of active users and the scope of deployment. We offer flexibility for teams starting with a single department as well as organization-wide rollouts. Contact us for a detailed pricing conversation tailored to your team size and requirements.",
  },
  {
    question: "Can I pilot Stratifix before committing?",
    answer:
      "Yes. We offer structured pilot programs so you can measure the platform's impact on your team before scaling. A typical pilot runs with a cohort of 15–30 reps over 4–6 weeks, with clear success metrics defined upfront. Contact us to schedule a demo and discuss whether a pilot is the right starting point.",
  },
  {
    question: "Will my sales reps actually use it?",
    answer:
      "This is the right question to ask — a tool nobody uses delivers nothing. Stratifix is designed to feel like practice, not punishment. Reps engage with realistic AI buyer personas that mirror conversations they actually have. Live coaching interruptions provide real-time guidance. We work with you to build scenarios your reps find genuinely useful: real products, real objections, real buyer types. When practice feels relevant and feedback is actionable, people come back.",
  },
  {
    question: "Where is my data hosted?",
    answer:
      "Stratifix is deployed on Google Cloud Platform (GCP) with data hosted in GCP's Mumbai region (asia-south1), ensuring low latency and data residency within India. The database layer runs on Neon PostgreSQL. All data is encrypted in transit and at rest.",
  },
  {
    question: "Does Stratifix learn from my company's data?",
    answer:
      "No. Your sales playbooks, product documentation, and competitive intelligence are used solely to ground the AI's behavior within your coaching scenarios via the RAG knowledge base. This content is never used to train foundation models. Each coaching session runs as an isolated inference call — no data crosses between clients.",
  },
  {
    question: "Can I partner with Stratifix?",
    answer:
      "Yes. We're actively looking for partners who work with enterprise sales teams in India, particularly sales consultancies, training agencies, and system integrators in SaaS, BFSI, pharma, IT services, and manufacturing. Contact us to explore partnership opportunities.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold font-headline text-primary mb-16 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={faq.question}
              className="group bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/10"
              open={i === openIndex}
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex(openIndex === i ? -1 : i);
              }}
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h4 className="font-bold text-lg">{faq.question}</h4>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform shrink-0 ml-4">
                  expand_more
                </span>
              </summary>
              {openIndex === i && (
                <p className="mt-4 text-on-surface-variant leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
