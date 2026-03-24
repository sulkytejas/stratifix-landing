import { Link } from "react-router-dom";

export default function ContactSalesModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <span className="material-symbols-outlined text-primary text-3xl">
              call
            </span>
          </div>
          <h3 className="font-headline text-xl font-bold text-primary mb-2">
            Contact Sales
          </h3>
          <p className="text-sm text-on-surface-variant mb-6">
            Reach out to our sales team directly or book a personalized demo.
          </p>

          <a
            href="tel:+918591544510"
            className="flex items-center justify-center gap-3 w-full py-3 rounded-xl bg-surface-container-low text-primary font-bold text-lg mb-4 hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              phone_in_talk
            </span>
            +91 8591544510
          </a>

          <Link
            to="/book-demo"
            onClick={onClose}
            className="block w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-sm shadow-lg active:scale-95 transition-all text-center"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
