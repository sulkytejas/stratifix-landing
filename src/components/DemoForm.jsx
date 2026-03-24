import { useState } from "react";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="lg:col-span-5 glass-panel rounded-xl shadow-[0_24px_48px_-12px_rgba(25,28,30,0.04)] p-8">
      {submitted ? (
        <SuccessMessage onReset={() => setSubmitted(false)} />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
              Name
            </label>
            <input
              className="w-full bg-surface-container-high border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-b-sm transition-all text-sm py-3 px-4 outline-none"
              placeholder="John Doe"
              type="text"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
              Work Email
            </label>
            <input
              className="w-full bg-surface-container-high border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-b-sm transition-all text-sm py-3 px-4 outline-none"
              placeholder="john@company.ai"
              type="email"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                Company Size
              </label>
              <select className="w-full bg-surface-container-high border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-b-sm transition-all text-sm py-3 px-4 outline-none">
                <option>10-50</option>
                <option>51-200</option>
                <option>201-500</option>
                <option>500+</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                Region
              </label>
              <select className="w-full bg-surface-container-high border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-b-sm transition-all text-sm py-3 px-4 outline-none">
                <option>India</option>
                <option>North America</option>
                <option>Europe</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
              Primary Sales Challenge
            </label>
            <textarea
              className="w-full bg-surface-container-high border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-b-sm transition-all text-sm py-3 px-4 outline-none resize-none"
              placeholder="e.g. Low conversion rates in discovery calls"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            Confirm Demo Request
          </button>
        </form>
      )}
    </div>
  );
}

function SuccessMessage({ onReset }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8">
      <div className="w-16 h-16 rounded-full bg-tertiary-fixed/20 flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl">
          check_circle
        </span>
      </div>
      <h3 className="font-headline text-2xl font-bold text-primary mb-3">
        Thank You!
      </h3>
      <p className="text-on-surface-variant leading-relaxed mb-6 max-w-xs">
        We've received your request. A member of our team will reach out to you
        within 24 hours to schedule your personalized demo.
      </p>
      <button
        onClick={onReset}
        className="text-sm font-semibold text-primary hover:text-primary-container transition-colors"
      >
        Submit another request
      </button>
    </div>
  );
}
