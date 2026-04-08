const markers = [
  { label: "RAPPORT VELOCITY", width: "85%" },
  { label: "SILENCE MANAGEMENT", width: "62%" },
  { label: "STRATEGIC FRAMING", width: "91%" },
  { label: "OBJECTION DECODING", width: "77%" },
];

export default function SalesDNA() {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="bg-surface-container-low rounded-3xl p-12 aspect-square flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent"></div>
            {/* Radar Chart */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-full h-full border border-outline-variant/30 rounded-full flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-outline-variant/30 rounded-full flex items-center justify-center">
                  <div className="w-1/2 h-1/2 border border-outline-variant/30 rounded-full"></div>
                </div>
              </div>
              <svg
                className="absolute inset-0 w-full h-full transform -rotate-12"
                viewBox="0 0 200 200"
              >
                <polygon
                  fill="rgba(68, 221, 193, 0.3)"
                  points="100,20 150,60 170,120 120,170 60,160 30,100 50,40"
                  stroke="#44ddc1"
                  strokeWidth="2"
                />
              </svg>
              {/* Labels */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 text-[10px] font-bold text-primary">
                NEGOTIATION
              </div>
              <div className="absolute top-1/4 right-0 translate-x-6 text-[10px] font-bold text-primary">
                EMPATHY
              </div>
              <div className="absolute bottom-1/4 right-0 translate-x-6 text-[10px] font-bold text-primary">
                TECH DEPTH
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 text-[10px] font-bold text-primary">
                CLOSING
              </div>
              <div className="absolute bottom-1/4 left-0 -translate-x-6 text-[10px] font-bold text-primary">
                OBJECTION
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-2xl shadow-xl border border-outline-variant/30 max-w-[200px]">
            <div className="text-3xl font-extrabold text-primary mb-1">
              84.2
            </div>
            <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              DNA Precision Score
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold font-headline text-primary mb-8">
            Sales DNA Mapping
          </h2>
          <p className="text-on-surface-variant mb-12 text-lg">
            We deconstruct sales performance into 8 precision-weighted DNA
            markers. No generic advice, just high-fidelity behavioral
            engineering.
          </p>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {markers.map((marker) => (
                <div key={marker.label} className="p-4 bg-surface-container rounded-lg">
                  <span className="block text-xs font-bold text-on-surface-variant mb-2">
                    {marker.label}
                  </span>
                  <div className="h-1.5 bg-surface-variant rounded-full overflow-hidden">
                    <div
                      className="h-full bg-tertiary-fixed-dim"
                      style={{ width: marker.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
