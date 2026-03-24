const NAV_ITEMS = [
  { icon: "psychology", label: "Coach", active: true },
  { icon: "handshake", label: "Deals" },
  { icon: "insights", label: "Insights" },
  { icon: "menu_book", label: "Book" },
];

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 backdrop-blur-xl border-t border-outline-variant/20 shadow-[0_-4px_24px_-12px_rgba(25,28,30,0.06)] rounded-t-xl md:hidden">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.label}
          href="#"
          className={`flex flex-col items-center justify-center px-3 py-1.5 transition-transform duration-200 active:scale-90 ${
            item.active
              ? "text-primary bg-surface-container rounded-xl"
              : "text-on-surface-variant hover:text-primary"
          }`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="font-label text-[11px] font-semibold uppercase tracking-wider mt-1">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
