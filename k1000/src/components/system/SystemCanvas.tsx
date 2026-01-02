"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Binary, Cpu, GraduationCap, Boxes, Zap,
  Fingerprint, BarChart3, ChevronRight, Activity
} from "lucide-react";

/* ─────────── DATA & EXTERNAL PANELS ─────────── */
import { domains } from "../../data/domain";
import GlobalHoloPanel from "../ui/GlobalHoloPanel";
import DomainHoloPanel from "../ui/DomainHoloPanel";

const conthrax = "font-['Conthrax',_sans-serif]";

const LEFT_NODES = [
  { key: "internship", label: "Internship & Placement", y: 30, x: 34, icon: <ShieldCheck size={26} /> },
  { key: "research", label: "Research & Publication", y: 50, x: 28, icon: <Binary size={26} /> },
  { key: "training", label: "Training Program", y: 70, x: 34, icon: <Cpu size={26} /> },
];

const RIGHT_NODES = [
  { key: "higher", label: "Higher Studies", y: 30, x: 66, icon: <GraduationCap size={26} /> },
  { key: "projects", label: "Projects Wing", y: 50, x: 72, icon: <Boxes size={26} /> },
  { key: "events", label: "Event Organisation", y: 70, x: 66, icon: <Zap size={26} /> },
];

const NAV_ITEMS = ["Home", "About", "Benefits", "Branches", "Departments", "Events", "Apply", "Contact"];

export default function SystemCanvas() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [activeDomainKey, setActiveDomainKey] = useState<string | null>(null);
  const [isCoreHovered, setIsCoreHovered] = useState(false);
  const [logs, setLogs] = useState<string[]>(["NEURAL_LINK_STABLE", "SYNCING_CORE..."]);
  const [typed, setTyped] = useState("");
  
  const text = "SYSTEM ONLINE • NEURAL LINK ESTABLISHED • PROTOCOL v4.5";
  const activeDomain = domains.find(d => d.key === activeDomainKey);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(text.slice(0, i)); i++;
      if (i > text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const logInterval = setInterval(() => {
      const msgs = ["PACKET_RECV", "PULSE_NOMINAL", "LATENCY_0.02ms", "BIT_RATE_HIGH"];
      setLogs(prev => [msgs[Math.floor(Math.random() * msgs.length)], ...prev].slice(0, 4));
    }, 3000);
    return () => clearInterval(logInterval);
  }, []);

  return (
    <div className={`relative w-full h-screen bg-[#010103] text-[#00f7ff] overflow-hidden ${conthrax} select-none`}>

      {/* 1. ATMOSPHERE & GRID */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f7ff0a_1px,transparent_1px),linear-gradient(to_bottom,#00f7ff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#010103_95%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <AnimatePresence>
        {!activeDomainKey && (
          <>
            {/* 2. OVERSIZED NAVBAR & LOGOS */}
            <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute top-12 left-16 z-[110]">
              <img src="/k1000-logo.png" className="h-14 w-auto brightness-200 drop-shadow-[0_0_15px_#00f7ff]" alt="K-1000" />
            </motion.div>

            <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute top-12 right-16 z-[110]">
              <img src="/kiit-logo.png" className="h-16 w-auto brightness-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" alt="KIIT" />
            </motion.div>

            {/* INCREASED NAVBAR SIZE */}
            <motion.nav 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-10 px-16 py-6 rounded-full border-2 border-[#00f7ff]/40 bg-black/80 backdrop-blur-2xl z-[110] shadow-[0_0_50px_rgba(0,247,255,0.2)]"
            >
              <div className="absolute top-0 left-20 right-20 h-[2px] bg-[#00f7ff] shadow-[0_0_15px_#00f7ff]" />
              {NAV_ITEMS.map((nav) => (
                <button 
                  key={nav} 
                  onClick={() => setOpenPanel(nav.toLowerCase())} 
                  className="text-[10px] uppercase tracking-[0.4em] font-black text-white/60 hover:text-[#00f7ff] hover:drop-shadow-[0_0_8px_#00f7ff] transition-all"
                >
                  {nav}
                </button>
              ))}
            </motion.nav>

            {/* 3. CENTER SYSTEM MODULE */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
              {[...LEFT_NODES, ...RIGHT_NODES].map((node) => (
                <motion.line key={node.key} x1="50" y1="54" x2={node.x} y2={node.y} stroke="#00f7ff" strokeWidth="0.12" animate={{ opacity: hoveredNode === node.key ? 0.9 : 0.25 }} />
              ))}
            </svg>

            <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <button onMouseEnter={() => setIsCoreHovered(true)} onMouseLeave={() => setIsCoreHovered(false)} onClick={() => setOpenPanel("home")} className="relative group pointer-events-auto">
                <div className={`w-[320px] h-[460px] bg-[#020205] border-[2px] rounded-[40px] transition-all duration-500 ${isCoreHovered ? 'border-white shadow-[0_0_80px_rgba(255,255,255,0.2)] scale-105' : 'border-cyan-500/30'}`}>
                  <div className="h-10 border-b border-white/10 flex items-center px-6 justify-between text-cyan-400">
                    <Activity size={12} className="animate-pulse" />
                    <span className="text-[7px] tracking-[0.5em] font-black">CORE_LINK_STABLE</span>
                  </div>
                  <div className="flex flex-col items-center justify-center h-full relative">
                    <motion.div animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute w-40 h-40 bg-cyan-500 blur-[90px] rounded-full" />
                    <img src="/k1000-small.png" className="w-40 h-auto brightness-150 relative z-10" />
                    <div className="mt-8 text-[11px] tracking-[0.8em] font-black text-cyan-500/60">VERS.2026</div>
                  </div>
                </div>
              </button>
              <div className="mt-10 text-[11px] tracking-[1.6em] uppercase font-black text-white drop-shadow-[0_0_15px_white]">Train • Transform • Transcend</div>
            </div>

            {/* 4. DOMAIN NODES */}
            {[...LEFT_NODES, ...RIGHT_NODES].map((node) => (
                <motion.button
                  key={node.key}
                  onMouseEnter={() => setHoveredNode(node.key)} onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setActiveDomainKey(node.key)}
                  style={{ top: `${node.y}%`, left: `${node.x}%` }}
                  className={`absolute -translate-y-1/2 flex items-center pointer-events-auto transition-all duration-300
                    ${LEFT_NODES.includes(node) ? "-translate-x-full flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`relative px-10 py-6 border-[2px] transition-all duration-500 min-w-[300px] flex items-center gap-6 rounded-sm backdrop-blur-md
                    ${hoveredNode === node.key ? 'bg-white text-black border-white shadow-[0_0_30px_white]' : 'bg-black/80 border-cyan-500/20 text-cyan-400'}`}>
                    <div className="p-1">{node.icon}</div>
                    <span className="text-[11px] uppercase tracking-[0.3em] font-black">{node.label}</span>
                  </div>
                  <div className={`w-12 h-[2px] ${hoveredNode === node.key ? 'bg-white' : 'bg-cyan-500/20'}`} />
                  <div className="w-4 h-4 rounded-full border border-cyan-500/40 flex items-center justify-center bg-[#010103]">
                    <div className={`w-2 h-2 rounded-full ${hoveredNode === node.key ? 'bg-white shadow-[0_0_10px_white]' : 'bg-cyan-500/20'}`} />
                  </div>
                </motion.button>
            ))}

            {/* 5. FLOATING TELEMETRY (Flat Structure) */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute bottom-16 left-16 flex items-end gap-2">
              <div className="flex items-end gap-[3px] h-10 border-l border-white/10 pl-4 mb-1">
                {[...Array(14)].map((_, i) => (
                  <motion.div key={i} animate={{ height: [5, 25, 5] }} transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.08 }} className="w-[3px] bg-cyan-500 shadow-[0_0_10px_cyan]" />
                ))}
              </div>
              <div className="ml-4 flex flex-col">
                <div className="flex items-center gap-2 mb-1 opacity-40"><Fingerprint size={12}/><span className="text-[7px] tracking-[0.5em] uppercase font-bold">Bio_Verified</span></div>
                <span className="text-[12px] tracking-[0.4em] text-white font-black drop-shadow-[0_0_8px_cyan]">{typed}</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute bottom-16 right-16 text-right">
              <div className="flex items-center justify-end gap-3 text-[9px] tracking-[0.4em] text-cyan-500/50 mb-3 uppercase font-black">
                <BarChart3 size={14}/> Diagnostic_Data_Stream
              </div>
              {logs.map((log, i) => (
                <div key={i} className="text-[10px] text-white/30 font-mono tracking-widest uppercase mb-1">
                  <span className="opacity-20 mr-2">[{new Date().getSeconds() + i}]</span> {log}
                </div>
              ))}
              <div className="mt-4 text-[20px] font-mono text-cyan-400 font-black tracking-tighter drop-shadow-[0_0_12px_cyan]">
                {new Date().toLocaleTimeString([], { hour12: false })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {openPanel && <GlobalHoloPanel key="holo-global" page={openPanel} onClose={() => setOpenPanel(null)} />}
        {activeDomain && <DomainHoloPanel domain={activeDomain} onClose={() => setActiveDomainKey(null)} />}
      </AnimatePresence>
    </div>
  );
}