"use client";

type Props = {
  domain: any;
  onClose: () => void;
};

export default function DomainHoloPanel({ domain, onClose }: Props) {
  return (
    <div className="absolute top-0 right-0 h-full w-[45%] z-30 bg-black/65 backdrop-blur-xl border-l border-emerald-400/20 p-10 overflow-y-auto">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-emerald-300 text-sm"
      >
        CLOSE
      </button>

      {/* Watermark */}
      <img
        src="/k1000-small.png"
        className="absolute opacity-10 right-8 top-20 w-40 pointer-events-none"
      />

      {/* Title */}
      <h1 className="text-4xl tracking-widest text-emerald-300 mb-4">
        {domain.title}
      </h1>

      <p className="text-sm text-neutral-300 leading-relaxed mb-6">
        {domain.description}
      </p>

      {/* Focus Areas */}
      <h3 className="text-emerald-400 text-sm mb-2 tracking-wider">
        FOCUS AREAS
      </h3>
      <ul className="text-neutral-300 text-sm mb-6 list-disc list-inside">
        {domain.focusAreas.map((f: string) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      {/* Outcomes */}
      <h3 className="text-emerald-400 text-sm mb-2 tracking-wider">
        OUTCOMES
      </h3>
      <ul className="text-neutral-300 text-sm mb-8 list-disc list-inside">
        {domain.outcomes.map((o: string) => (
          <li key={o}>{o}</li>
        ))}
      </ul>

      {/* Leadership */}
      <h3 className="text-emerald-400 text-sm mb-4 tracking-wider">
        LEADERSHIP
      </h3>

      <div className="flex gap-6">
        {[domain.leadership.director, domain.leadership.deputyDirector].map(
          (p: any, i: number) => (
            <div
              key={i}
              className="bg-black/50 border border-emerald-400/20 rounded-md p-4 w-40 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-neutral-800 overflow-hidden">
                {p.image && (
                  <img
                    src={p.image}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="text-sm text-emerald-300">{p.name}</div>
              <div className="text-xs text-neutral-400">{p.position}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
