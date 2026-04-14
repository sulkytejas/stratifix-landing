const checkpoints = [
  "Automatic scoring across communication skills like empathy, clarity, and confidence.",
  "Real-time tone and sentiment analysis with moment-by-moment breakdowns.",
  "Video replay with timestamped coaching moments and improvement suggestions.",
];

export default function BehavioralFeedback() {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
              <img
                alt="AI Sales Coach Interface providing behavioral feedback to a sales representative"
                className="w-full h-auto rounded-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw6uuqDVRPg5fl_vojZGv4omLHjUaQRzRyQLlbIZ4XD0ZJINBX8rIq9Sa_T2hiY8cFspG8Web0mU-kHSU5AeD4ehiBynpOdxJhBheNDhcy2pSZrQHXvwQoIYZYW_hCfl7GRg6WIkM4jJO5Nl1-_4o3ws8DtCl3dftd_VXAeRfpz_n0Y0E102i3xJxCofcZvBzIvgENhmQlQVOcsmfHitjKrjTBBYBDKw8PgfwvyDgz3kG006naXUl6auL2Jtgaaf_fI2NN0ox4_gA"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-tertiary-fixed/10 rounded-full blur-[80px]"></div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 rounded bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold tracking-widest uppercase mb-6">
              AI-Powered Behavioral Coaching
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary mb-6 leading-tight">
              Every practice session ends with actionable, personalized
              coaching
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Our AI analyzes verbal and nonverbal behavior in every
              simulation — tone, pacing, empathy, confidence, and body language.
              Learners see themselves through the eyes of the person they're
              speaking with and get specific, actionable tips to improve.
            </p>
            <ul className="space-y-4">
              {checkpoints.map((text) => (
                <li key={text} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-[14px] text-white"
                      style={{ fontVariationSettings: "'wght' 700" }}
                    >
                      check
                    </span>
                  </div>
                  <span className="text-on-surface font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
