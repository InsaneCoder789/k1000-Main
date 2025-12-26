"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { leadership } from "../../data/leadership";

/* =======================
   TYPES
======================= */
type Domain = {
  key: string;
  title: string;
  overview: string;
  description: string;
  focusAreas?: string[];
  outcomes: string[];
  yearOfFormation: number;
  baseColor: string;
  accentColor: string;
  applyLink?: string;
};

type Leader = {
  name: string;
  position: string;
  branch: string;
  image: string;
};

type Props = {
  domain: Domain;
  onClose: () => void;
};

/* =======================
   Decrypt Text Effect
======================= */
function useDecryptText(text: string, speed = 18) {
  const [out, setOut] = useState("");
  const chars = "█▓▒░<>/\\|01";

  useEffect(() => {
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      setOut(
        text
          .split("")
          .map((c, i) =>
            i < frame / 2 ? c : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );
      if (frame > text.length * 2) {
        setOut(text);
        clearInterval(id);
      }
    }, speed);

    return () => clearInterval(id);
  }, [text, speed]);

  return out;
}

/* =======================
   Normalize helper
======================= */
const normalize = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").trim();

export default function DomainHoloPanel({ domain, onClose }: Props) {
  const title = useDecryptText(domain.title);

  /* =======================
     Resolve Leadership
  ======================= */
  const { director, deputy } = useMemo(() => {
    const hierarchy = leadership.hierarchy ?? [];

    const directors =
      hierarchy.find(h => h.level === 3)?.members ?? [];
    const deputies =
      hierarchy.find(h => h.level === 4)?.members ?? [];

    const domainKey = normalize(domain.title);

    return {
      director: directors.find(
        (m: Leader) => normalize(m.branch) === domainKey
      ),
      deputy: deputies.find(
        (m: Leader) => normalize(m.branch) === domainKey
      ),
    };
  }, [domain.title]);

  return (
    <div className="absolute inset-0 z-40 pointer-events-none">
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* MAIN HUD */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[78vw] max-w-[1350px] h-[86vh]
                   rounded-3xl bg-black/60
                   border backdrop-blur-xl
                   pointer-events-auto overflow-hidden"
        style={{
          borderColor: domain.accentColor,
          boxShadow: `0 0 140px ${domain.accentColor}44`,
        }}
      >
        {/* IMAGE WATERMARK */}
        <img
          src="/k1000-small.png"
          className="absolute inset-0 m-auto w-[420px] opacity-[0.04] pointer-events-none"
        />

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-11 h-11 rounded-full
                     bg-white/10 hover:bg-white/20
                     flex items-center justify-center z-20"
        >
          <X className="text-white" />
        </button>

        {/* HEADER */}
        <div className="relative z-10 px-12 pt-10 pb-8 border-b border-white/10 flex items-center gap-8">
          {/* 2D PLANET */}
          <div
            className="w-24 h-24 rounded-full animate-spin-slow"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${domain.accentColor}, ${domain.baseColor})`,
              boxShadow: `0 0 40px ${domain.accentColor}99`,
            }}
          />

          <div>
            <h1 className="text-5xl tracking-widest text-white font-mono">
              {title}
            </h1>
            <p className="mt-2 text-xs tracking-wider text-cyan-300 uppercase">
              Established {domain.yearOfFormation}
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="relative z-10 flex h-[calc(100%-140px)]">
          {/* LEFT COLUMN */}
          <div className="w-[42%] p-10 border-r border-white/10 flex flex-col gap-8">
            {director && <LeaderCard leader={director} />}
            {deputy && <LeaderCard leader={deputy} />}

            {!director && !deputy && (
              <p className="text-white/50 text-sm">
                Leadership details will be announced soon.
              </p>
            )}

            <div className="mt-auto text-[11px] text-white/40 tracking-widest">
              Train · Transform · Transcend
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 p-12 overflow-y-auto">
            <p className="text-white/85 leading-relaxed text-sm mb-6">
              {domain.overview}
            </p>

            <p className="text-white/70 leading-relaxed text-sm whitespace-pre-line mb-10">
              {domain.description}
            </p>
           {domain.focusAreas && (
                <div className="mb-10">
                  <h3 className="text-cyan-300 text-sm tracking-widest uppercase mb-2">Focus Areas</h3>
                  <ul className="list-disc ml-6 text-white/70 space-y-1">
                    {domain.focusAreas.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

            {domain.focusAreas && !domain.focusAreas && (
              <p className="text-white/70 leading-relaxed text-sm whitespace-pre-line mb-10">
                {domain.focusAreas}
              </p>
            )}

            <p className="text-white/70 leading-relaxed text-sm whitespace-pre-line mb-10">
              {domain.outcomes}
            </p>

            {domain.applyLink && (
              <a
                href={domain.applyLink}
                target="_blank"
                className="inline-block px-8 py-3 rounded-xl
                           bg-white/10 border border-white/20
                           text-white tracking-widest text-xs
                           hover:bg-white/20 transition"
              >
                APPLY NOW
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =======================
   LEADER CARD
======================= */
function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div
      className="rounded-2xl bg-white/5 border border-white/10 p-6
                 flex items-center gap-6
                 animate-fade-up"
    >
      <img
        src={leader.image}
        alt={leader.name}
        className="w-32 h-32 rounded-xl object-cover
                   border border-white/20"
      />
      <div>
        <p className="text-white text-xl tracking-wide">
          {leader.name}
        </p>
        <p className="text-sm text-white/60">
          {leader.position}
        </p>
      </div>
    </div>
  );
}
