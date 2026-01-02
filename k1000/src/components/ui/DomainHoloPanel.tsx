"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Target, ChevronRight, Activity } from "lucide-react";
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
  icon?: React.ReactNode; // Added to match SystemCanvas
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
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#010103]/90 backdrop-blur-md" onClick={onClose} />

      <style jsx global>{`
        .custom-scroll::-webkit-scrollbar { width: 3px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #00f7ff33; border-radius: 10px; }
      `}</style>

      <motion.div
        initial={{ scale: 0.98, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative w-full max-w-[1100px] h-[75vh] bg-[#020205] border border-[#00f7ff]/30 
                   rounded-[32px] shadow-[0_0_80px_rgba(0,247,255,0.1)] overflow-hidden flex flex-col"
      >
        {/* HEADER */}
        <div className="relative z-20 px-8 py-6 flex items-center justify-between border-b border-white/5 bg-white/[0.01]">
          <div className="flex items-center gap-6">
            {/* DYNAMIC ICON FROM SYSTEMCANVAS */}
            <div className="w-12 h-12 rounded-xl border border-[#00f7ff]/30 flex items-center justify-center bg-black relative shadow-[0_0_15px_rgba(0,247,255,0.2)]">
               <div className="absolute inset-0 bg-[#00f7ff]/5 animate-pulse rounded-xl" />
               <div className="text-[#00f7ff] scale-90">
                {domain.icon}
               </div>
            </div>
            <div>
              <h1 className={`${conthrax} text-xl tracking-[0.2em] text-white uppercase`}>
                {titleDecrypted}
              </h1>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[8px] tracking-[0.4em] text-[#00f7ff] font-black uppercase opacity-60">
                  Sector_Link: Established_{domain.yearOfFormation}
                </span>
              </div>
            </div>
          </div>

          <button 
            onClick={onClose} 
            className="group px-10 py-2.5 rounded-lg border border-[#00f7ff]/20 transition-all hover:border-[#00f7ff] hover:bg-[#00f7ff]/5"
          >
            <span className={`${conthrax} text-[10px] tracking-[0.5em] text-[#00f7ff] font-black`}>CLOSE</span>
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden">
          
          {/* LEFT: PERSONNEL */}
          <div className="w-[300px] border-r border-white/5 bg-black/40 flex flex-col">
            <div className="p-6 pb-2">
               <h3 className={`${conthrax} text-[8px] text-white/30 tracking-[0.5em] uppercase font-black`}>Command_Personnel</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scroll px-6 pb-8 space-y-4">
              {director && <LeaderTacticalCard leader={director} label="Director" />}
              {deputy && <LeaderTacticalCard leader={deputy} label="Deputy" />}
            </div>
          </div>

          {/* RIGHT: DATA CONTENT */}
          <div className="flex-1 overflow-y-auto custom-scroll p-10 space-y-12 bg-black/20">
            
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Target size={14} className="text-[#00f7ff] opacity-50" />
                <h2 className={`${conthrax} text-[9px] tracking-[0.5em] text-white/50 uppercase`}>Executive_Brief</h2>
              </div>
              <p className="text-white/70 text-sm leading-relaxed font-light max-w-2xl border-l border-[#00f7ff]/20 pl-6">
                {domain.overview}
              </p>
            </section>

            {domain.focusAreas && (
              <section className="grid grid-cols-2 gap-3">
                {domain.focusAreas.map((area, i) => (
                  <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center gap-4 hover:border-[#00f7ff]/20 transition-colors group">
                    <div className="text-[#00f7ff]/40 group-hover:text-[#00f7ff] transition-colors scale-75">
                        {domain.icon}
                    </div>
                    <span className="text-[9px] text-white/60 uppercase tracking-widest font-black">{area}</span>
                  </div>
                ))}
              </section>
            )}

            <section className="p-8 bg-white/[0.01] rounded-2xl border border-white/5 relative">
               <div className="absolute top-6 right-8 opacity-10 scale-150">
                 {domain.icon}
               </div>
               <h2 className={`${conthrax} text-[8px] text-[#00f7ff]/40 tracking-[0.5em] uppercase mb-6 font-black`}>Operational_Protocol</h2>
               <p className="text-white/50 text-[12px] leading-relaxed whitespace-pre-line max-w-4xl font-medium">
                 {domain.description}
               </p>
            </section>

            {domain.applyLink && (
              <div className="pb-6">
                <a href={domain.applyLink} target="_blank"
                  className="inline-flex items-center gap-6 px-12 py-4 bg-[#00f7ff] text-black rounded-xl transition-all hover:shadow-[0_0_25px_rgba(0,247,255,0.4)] hover:scale-[1.02]"
                >
                  <span className={`${conthrax} text-[11px] tracking-[0.5em] font-black uppercase`}>Initiate_Entry</span>
                  <ChevronRight size={18} />
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────── PERSONNEL CARD ─────────── */
function LeaderTacticalCard({ leader, label }: { leader: Leader; label: string }) {
  return (
    <motion.div className="group relative w-full h-52 rounded-2xl overflow-hidden border border-white/10 hover:border-[#00f7ff]/30 transition-all duration-500 bg-black">
      <img 
        src={leader.image} 
        alt={leader.name} 
        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-100 transition-all duration-700"
        style={{ objectPosition: 'center 15%' }} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <span className="text-[7px] text-[#00f7ff] uppercase tracking-[0.4em] font-black mb-1 drop-shadow-[0_0_5px_#00f7ff]">{label}</span>
        <h4 className="text-white font-bold text-sm tracking-tight group-hover:text-[#00f7ff] transition-colors">{leader.name}</h4>
        <div className="flex items-center justify-between mt-0.5">
            <p className="text-[8px] text-white/40 uppercase tracking-widest">{leader.position}</p>
            <Shield size={10} className="text-[#00f7ff]/20 group-hover:text-[#00f7ff] transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}