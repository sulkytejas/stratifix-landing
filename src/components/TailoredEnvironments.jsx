import { Link } from "react-router-dom";

const environments = [
  {
    title: "Sales",
    desc: "Complex B2B negotiation and objection handling mastery.",
    to: "/solutions/ai-sales-training",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCha4rDVjbngmR8zL5HjJOyTDU1k8pb7A0_pro3MtTlFG8TA16ojzf4HE-3GVTTrSwyqBpoEUJBZANZRkFnMWdaWoTor7Jb8Z-axpFO1fjtdGrri_fufqeJtUaHTJYwGMOq8_nKdfyCY6cArTLTYxS8athOAO6mZYq5_lht4q2rXtHG-SFraZKFqnd6z8eVQxhjo004hVJPr826R8-SuZpjur6RHdIL55fwTeks4mjuhrOz7mxPEJHXZUhaCRFXqrMxBMrEIPhJZ1Y",
    alt: "Modern corporate conference room with professionals in a collaborative sales meeting",
  },
  {
    title: "Leadership",
    desc: "Strategic vision communication and conflict resolution.",
    to: "/solutions/leadership-coaching",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7jGCAhOw-fGvUeRiJW3Jby1yURon1Hv71FuiTKPAzpBOf9NcStguMmbGQw42eKj1T7opkIjBCLsnIThEBs37IA8ksP9t-z7JlUo5BssRtIEsTvITQGk_C3_kn6XTni50ulCu8aB5qGLTuH8yRLMBeE7w8jZ50Kj79CdYDNUPqGessMjmtOhuHre_tnbBy3NalEjJuOc_L2QOo_XeZn28QK7Dh8uhK9OvWPWN6EDQ9kisHxaxfFkP8TVbSFqaXVgLvH3xme0GaVCc",
    alt: "Executive leader presenting to a board in high-end office interior",
  },
  {
    title: "Aftersales",
    desc: "Retention strategies and high-value account expansion.",
    to: "/solutions/customer-service-training",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD21qasfgiJ9mh7-SLGkKQhjEThHMgq8xw3asIfgCLEkfR9c96TAjXlkYNddSqfLjRk2sAtbzr_rtURB-8iqsOWBPPEwI98qoeWdiz3UnZVdG-Ekzf9rsEKP6_GvkdDqJ6-LYqCTcBmPiZJejBhk8C3bl0XSbg5S6xQqAhgSszv7MTIn-8YRhjOAquDgIQ72UKx16Lw8_kBg999T9pPcQvZwgBjx-Ux9qbt6VJ9KrUEPuO9S3AcyHbZ5dvEPDMuz6XkxqkThmT5X3g",
    alt: "Customer success manager on a video call with laptop and headset",
  },
];

export default function TailoredEnvironments() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold font-headline text-primary mb-12">
          Tailored Environments
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {environments.map((env) => (
            <Link
              key={env.title}
              to={env.to}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] block"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={env.alt}
                src={env.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {env.title}
                </h3>
                <p className="text-white/70 text-sm">{env.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
