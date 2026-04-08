const faqs = [
  {
    question: "How does the AI handle industry-specific jargon?",
    answer:
      "Our RAG (Retrieval Augmented Generation) engine can be fed your specific technical manuals and competitive intelligence, allowing the AI to roleplay with 100% accurate product context and terminology.",
  },
  {
    question: "Is my sales team's data used for training public models?",
    answer:
      'No. We utilize private instances of foundational models. Your data is isolated and never used to improve public AI sets. We prioritize the "Executive Privacy" protocol.',
  },
  {
    question: "Can it integrate with our existing LMS or CRM?",
    answer:
      "Yes, Stratyfix features a robust API and native integrations for Salesforce, HubSpot, and major enterprise Learning Management Systems.",
  },
];

export default function FAQ() {
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
              open={i === 0}
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h4 className="font-bold text-lg">{faq.question}</h4>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
