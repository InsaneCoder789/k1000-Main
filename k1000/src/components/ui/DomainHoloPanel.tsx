"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Target, ChevronRight, Activity, X } from "lucide-react";
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
  icon?: React.ReactNode;
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
      className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#010103]/95 backdrop-blur-md" onClick={onClose} />

      <style jsx global>{`
        .custom-scroll::-webkit-scrollbar { width: 3px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #00f7ff33; border-radius: 10px; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative w-full max-w-[1100px] h-full md:h-[75vh] bg-[#020205] border-x md:border border-[#00f7ff]/30 
                   md:rounded-[32px] shadow-[0_0_80px_rgba(0,247,255,0.1)] overflow-hidden flex flex-col"
      >
        {/* HEADER */}
        <div className="relative z-20 px-6 md:px-8 py-4 md:py-6 flex items-center justify-between border-b border-white/5 bg-white/[0.01]">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-[#00f7ff]/30 flex items-center justify-center bg-black relative shrink-0">
               <div className="absolute inset-0 bg-[#00f7ff]/5 animate-pulse rounded-xl" />
               <div className="text-[#00f7ff] scale-75 md:scale-90">
                {domain.icon}
               </div>
            </div>
            <div>
              <h1 className={`${conthrax} text-sm md:text-xl tracking-[0.2em] text-white uppercase leading-tight`}>
                {titleDecrypted}
              </h1>
              <span className="text-[7px] md:text-[8px] tracking-[0.3em] md:tracking-[0.4em] text-[#00f7ff] font-black uppercase opacity-60">
                Established_{domain.yearOfFormation}
              </span>
            </div>
          </div>

          <button 
            onClick={onClose} 
            className="p-2 md:px-10 md:py-2.5 rounded-lg border border-[#00f7ff]/20 transition-all hover:border-[#00f7ff]"
          >
            <span className={`hidden md:inline ${conthrax} text-[10px] tracking-[0.5em] text-[#00f7ff] font-black`}>CLOSE</span>
            <X className="md:hidden text-[#00f7ff]" size={20} />
          </button>
        </div>

        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* PERSONNEL SECTION */}
          <div className="w-full md:w-[300px] border-b md:border-b-0 md:border-r border-white/5 bg-black/40 flex flex-col shrink-0">
            <div className="p-4 md:p-6 pb-2">
               <h3 className={`${conthrax} text-[7px] md:text-[8px] text-white/30 tracking-[0.4em] md:tracking-[0.5em] uppercase font-black`}>Command_Personnel</h3>
            </div>
            
            {/* Horizontal scroll on mobile, vertical on desktop */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-y-auto no-scrollbar md:custom-scroll p-4 md:px-6 md:pb-8 gap-4">
              {director && <div className="min-w-[240px] md:min-w-0 flex-shrink-0 w-full"><LeaderTacticalCard leader={director} label="Director" /></div>}
              {deputy && <div className="min-w-[240px] md:min-w-0 flex-shrink-0 w-full"><LeaderTacticalCard leader={deputy} label="Deputy" /></div>}
            </div>
          </div>

          {/* RIGHT: DATA CONTENT */}
          <div className="flex-1 overflow-y-auto custom-scroll p-6 md:p-10 space-y-8 md:space-y-12 bg-black/20">
            
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Target size={14} className="text-[#00f7ff] opacity-50" />
                <h2 className={`${conthrax} text-[8px] tracking-[0.5em] text-white/50 uppercase`}>Executive_Brief</h2>
              </div>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed font-light md:max-w-2xl border-l border-[#00f7ff]/20 pl-4 md:pl-6">
                {domain.overview}
              </p>
            </section>

            {domain.focusAreas && (
              <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {domain.focusAreas.map((area, i) => (
                  <div key={i} className="p-3 md:p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center gap-4 hover:border-[#00f7ff]/20 transition-colors group">
                    <div className="text-[#00f7ff]/40 group-hover:text-[#00f7ff] transition-colors scale-75 shrink-0">
                        {domain.icon}
                    </div>
                    <span className="text-[8px] md:text-[9px] text-white/60 uppercase tracking-widest font-black">{area}</span>
                  </div>
                ))}
              </section>
            )}

            <section className="p-6 md:p-8 bg-white/[0.01] rounded-2xl border border-white/5 relative">
               <div className="absolute top-6 right-8 opacity-10 scale-110 md:scale-150 hidden md:block">
                 {domain.icon}
               </div>
               <h2 className={`${conthrax} text-[7px] md:text-[8px] text-[#00f7ff]/40 tracking-[0.5em] uppercase mb-4 md:mb-6 font-black`}>Operational_Protocol</h2>
               <p className="text-white/50 text-[10px] md:text-[12px] leading-relaxed whitespace-pre-line font-medium">
                 {domain.description}
               </p>
            </section>

            {domain.applyLink && (
              <div className="pb-10 md:pb-6">
                <a href={domain.applyLink} target="_blank"
                  className="flex md:inline-flex items-center justify-center gap-4 md:gap-6 px-8 md:px-12 py-4 bg-[#00f7ff] text-black rounded-xl transition-all hover:shadow-[0_0_25px_rgba(0,247,255,0.4)]"
                >
                  <span className={`${conthrax} text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.5em] font-black uppercase`}>Initiate_Entry</span>
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
    <motion.div className="group relative w-full h-44 md:h-52 rounded-2xl overflow-hidden border border-white/10 hover:border-[#00f7ff]/30 transition-all duration-500 bg-black">
      <img 
        src={leader.image} 
        alt={leader.name} 
        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-60 group-hover:opacity-100 transition-all duration-700"
        style={{ objectPosition: 'center 15%' }} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end">
        <span className="text-[6px] md:text-[7px] text-[#00f7ff] uppercase tracking-[0.4em] font-black mb-1 drop-shadow-[0_0_5px_#00f7ff]">{label}</span>
        <h4 className="text-white font-bold text-xs md:text-sm tracking-tight group-hover:text-[#00f7ff] transition-colors">{leader.name}</h4>
        <div className="flex items-center justify-between mt-0.5">
            <p className="text-[7px] md:text-[8px] text-white/40 uppercase tracking-widest leading-none">{leader.position}</p>
            <Shield size={10} className="text-[#00f7ff]/20 group-hover:text-[#00f7ff] transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}