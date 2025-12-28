"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Target, Cpu, ExternalLink } from "lucide-react";
import { leadership } from "../../data/leadership";

/* ─────────── TYPES ─────────── */
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

const conthrax = "font-['Conthrax',_sans-serif]";

/* ─────────── HELPERS ─────────── */
const cleanString = (s: string) => 
  s.toLowerCase()
   .replace(/&/g, "and")
   .replace(/management/g, "organization") 
   .replace(/internship and placement/g, "academic and internship guidance")
   .replace(/\s+/g, "")
   .trim();

function useDecryptText(text: string, speed = 25) {
  const [out, setOut] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(() => {
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      setOut(text.split("").map((c, i) => i < frame / 2 ? c : chars[Math.floor(Math.random() * chars.length)]).join(""));
      if (frame > text.length * 2) { setOut(text); clearInterval(id); }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return out;
}

/* ─────────── MAIN COMPONENT ─────────── */
export default function DomainHoloPanel({ domain, onClose }: { domain: Domain; onClose: () => void }) {
  const titleDecrypted = useDecryptText(domain.title);

  const { director, deputy } = useMemo(() => {
    const hierarchy = leadership.hierarchy ?? [];
    const directors = hierarchy.find(h => h.level === 3)?.members ?? [];
    const deputies = hierarchy.find(h => h.level === 4)?.members ?? [];
    const targetKey = cleanString(domain.title);

    return {
      director: directors.find((m: Leader) => cleanString(m.branch) === targetKey),
      deputy: deputies.find((m: Leader) => cleanString(m.branch) === targetKey),
    };
  }, [domain.title]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <style jsx global>{`
        .leader-scroll::-webkit-scrollbar { width: 2px; }
        .leader-scroll::-webkit-scrollbar-thumb { background: ${domain.accentColor}44; }
        .content-scroll::-webkit-scrollbar { width: 3px; }
        .content-scroll::-webkit-scrollbar-thumb { background: ${domain.accentColor}66; border-radius: 10px; }
      `}</style>

      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-[1200px] h-[85vh] bg-[#050505] border border-white/10 
                   rounded-[32px] overflow-hidden flex flex-col"
        style={{ borderColor: `${domain.accentColor}33`, boxShadow: `0 0 80px ${domain.accentColor}15` }}
      >
        {/* HEADER SECTION - SMALER SCALE */}
        <div className="relative z-20 p-8 flex items-center justify-between border-b border-white/5 bg-white/[0.01]">
          <div className="flex items-center gap-6">
            <div className="relative">
                <div className="w-12 h-12 rounded-full relative z-10 border border-white/20 shadow-xl"
                     style={{ background: `radial-gradient(circle at 30% 30%, ${domain.accentColor}, ${domain.baseColor})` }} />
            </div>
            <div>
              <h1 className={`${conthrax} text-2xl tracking-[0.2em] text-white uppercase`}>{titleDecrypted}</h1>
              <p className="text-[8px] tracking-[0.4em] text-[#00f7ff] font-bold mt-1 uppercase opacity-60">
                Est_{domain.yearOfFormation} // Operational_Sector
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full text-white/40 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden">
          
          {/* LEFT: PERSONNEL LIST (Small Tactical Cards) */}
          <div className="w-[320px] border-r border-white/5 bg-black/40 flex flex-col">
            <div className="p-6 pb-3">
               <h3 className={`${conthrax} text-[8px] text-white/30 tracking-[0.5em] uppercase`}>Command_Personnel</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto leader-scroll px-6 pb-8 space-y-4">
              {director && <LeaderImageCard leader={director} accent={domain.accentColor} label="Director" />}
              {deputy && <LeaderImageCard leader={deputy} accent={domain.accentColor} label="Deputy" />}
            </div>
          </div>

          {/* RIGHT: DATA CONTENT AREA (Reduced text sizes) */}
          <div className="flex-1 overflow-y-auto content-scroll p-10 space-y-12 bg-black/20">
            
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Target size={16} className="text-[#00f7ff]" />
                <h2 className={`${conthrax} text-[9px] tracking-[0.5em] text-white/90 uppercase`}>Executive_Brief</h2>
              </div>
              <p className="text-white/70 text-sm leading-relaxed font-light max-w-2xl">
                {domain.overview}
              </p>
            </section>

            {domain.focusAreas && (
              <section className="grid grid-cols-2 gap-3">
                {domain.focusAreas.map((area, i) => (
                  <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center gap-4">
                    <div className="w-1 h-1 rounded-full bg-[#00f7ff]" />
                    <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold">{area}</span>
                  </div>
                ))}
              </section>
            )}

            <section className="p-8 bg-white/[0.01] rounded-2xl border border-white/5">
               <h2 className={`${conthrax} text-[8px] text-white/30 tracking-[0.5em] uppercase mb-6`}>DESCRIPTION_PORTAL</h2>
               <p className="text-white/50 text-[12px] leading-relaxed whitespace-pre-line max-w-4xl">
                 {domain.description}
               </p>
            </section>

            {domain.applyLink && (
              <a href={domain.applyLink} target="_blank"
                className="inline-block px-10 py-4 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white tracking-[0.5em] font-bold uppercase hover:bg-white/10 transition-all"
              >
                Initiate_Protocol
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
/* ─────────── REFINED TACTICAL ID CARD ─────────── */
function LeaderImageCard({ leader, accent, label }: { leader: Leader; accent: string; label: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }} 
      animate={{ opacity: 1, x: 0 }}
      /* Increased height to h-56 for a better profile presence */
      className="group relative w-full h-56 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 bg-[#0a0a0a] shadow-lg"
    >
      {/* object-top [15%] focuses the image between the very top and the vertical center.
          This ensures foreheads aren't cut but the chest isn't the focal point either.
      */}
      <img 
        src={leader.image} 
        alt={leader.name} 
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 brightness-[0.85] group-hover:brightness-110 group-hover:scale-105"
        style={{ objectPosition: 'center 15%' }} 
      />
      
      {/* Refined Cinematic Gradient: 
          The 'via' point is pushed lower (via-[80%]) to ensure the face stays bright 
          while text remains readable at the bottom. 
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent via-[80%]" />
      
      {/* Identity Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-center gap-2 mb-1.5">
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
            style={{ backgroundColor: accent }} 
          />
          <span className="text-[8px] text-white/80 uppercase tracking-[0.3em] font-bold drop-shadow-md">
            {label}
          </span>
        </div>
        
        <h4 className="text-white font-bold text-base tracking-tight leading-tight group-hover:text-[#00f7ff] transition-colors drop-shadow-lg">
          {leader.name}
        </h4>
        
        <div className="flex items-center justify-between mt-1">
          <p className="text-[9px] text-white/40 uppercase tracking-widest font-medium">
            {leader.position}
          </p>
          <Shield 
            size={12} 
            style={{ color: accent }} 
            className="opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" 
          />
        </div>
      </div>

      {/* Subtle Side-Glow on Hover */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: accent, boxShadow: `0 0 10px ${accent}` }}
      />
    </motion.div>
  );
}