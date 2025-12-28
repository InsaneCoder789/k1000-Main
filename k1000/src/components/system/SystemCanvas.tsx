"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────── DATA & EXTERNAL PANELS ─────────── */
import { domains } from "../../data/domain"; 
import GlobalHoloPanel from "../ui/GlobalHoloPanel"; 
import DomainHoloPanel from "../ui/DomainHoloPanel";

/* ─────────── FONT CONSTANT ─────────── */
const conthrax = "font-['Conthrax',_sans-serif]";

/* ─────────── IOT COORDINATES ─────────── */
const LEFT_NODES = [
 { key: "internship", label: "Internship & Placement", y: 30, x: 34, exitY: 39 }, 
 { key: "research", label: "Research & Publication", y: 50, x: 28, exitY: 54 }, 
 { key: "training", label: "Training Program", y: 70, x: 34, exitY: 69 }, 
];

const RIGHT_NODES = [
 { key: "higher", label: "Higher Studies", y: 30, x: 66, exitY: 39 }, 
 { key: "projects", label: "Projects Wing", y: 50, x: 72, exitY: 54 }, 
 { key: "events", label: "Event Organisation", y: 70, x: 66, exitY: 69 }, 
];

const NAV_ITEMS = ["Home", "About", "Benefits", "Branches", "Departments", "Events", "Apply", "Contact"];

export default function SystemCanvas() {
 const [hoveredNode, setHoveredNode] = useState<string | null>(null);
 const [openPanel, setOpenPanel] = useState<string | null>(null); 
 const [activeDomainKey, setActiveDomainKey] = useState<string | null>(null);
 
 const [isKiitPressed, setIsKiitPressed] = useState(false);
 const [isKiitHovered, setIsKiitHovered] = useState(false);
 const [isCpuPressed, setIsCpuPressed] = useState(false);
 const [isCpuHovered, setIsCpuHovered] = useState(false);

 const [typed, setTyped] = useState("");
 const text = "SYSTEM ONLINE • NEURAL LINK ESTABLISHED • PROTOCOL v4.5";
 const activeDomain = domains.find(d => d.key === activeDomainKey);

 useEffect(() => {
   let i = 0;
   const interval = setInterval(() => {
     setTyped(text.slice(0, i));
     i++;
     if (i > text.length) clearInterval(interval);
   }, 30);
   return () => clearInterval(interval);
 }, []);

 return (
   <div className={`relative w-full h-screen bg-[#020202] text-[#00f7ff] overflow-hidden ${conthrax} select-none`}>
    
     {/* 1. BACKGROUND GRID */}
     <div className="absolute inset-0 z-0">
       <motion.div
         animate={{ opacity: [0.03, 0.06, 0.03] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
         className="absolute inset-0 bg-[linear-gradient(to_right,#00f7ff_1px,transparent_1px),linear-gradient(to_bottom,#00f7ff_1px,transparent_1px)] bg-[size:40px_40px]"
       />
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f7ff10_1px,transparent_1px),linear-gradient(to_bottom,#00f7ff10_1px,transparent_1px)] bg-[size:160px_160px]" />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_90%)]" />
     </div>

     <AnimatePresence>
       {/* 2. HEADER */}
       {!activeDomainKey && (
         <motion.header 
          key="main-header"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="absolute top-0 w-full z-[110] px-12 h-28 flex items-center justify-center"
         >
           <div className="absolute left-12 top-1/2 -translate-y-1/2">
               <img src="/k1000-logo.png" className="h-12 w-auto brightness-200 drop-shadow-[0_0_10px_#00f7ff]" alt="K-1000" />
           </div>
          
           <nav className="flex gap-8 px-12 py-4 rounded-full border border-[#00f7ff]/40 bg-black/60 backdrop-blur-xl shadow-[0_0_40px_rgba(0,247,255,0.15)] relative pointer-events-auto">
               <div className="absolute top-0 left-16 right-16 h-[1.5px] bg-[#00f7ff] shadow-[0_0_15px_#00f7ff]" />
               {NAV_ITEMS.map((nav) => {
                   // Active only if openPanel exists and matches this nav item
                   const isActive = openPanel === nav.toLowerCase();
                   return (
                       <button 
                        key={nav} 
                        onClick={() => setOpenPanel(nav.toLowerCase())}
                        className={`relative text-[8.5px] uppercase tracking-[0.35em] font-bold transition-all whitespace-nowrap px-2 py-1
                          ${isActive ? "text-[#00f7ff] drop-shadow-[0_0_8px_#00f7ff]" : "text-white/60 hover:text-[#00f7ff]"}`}
                       >
                           {nav}
                           <AnimatePresence>
                             {isActive && (
                               <motion.div 
                                 layoutId="nav-glow"
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 exit={{ opacity: 0 }}
                                 className="absolute -top-[17px] left-0 right-0 h-[2px] bg-[#00f7ff] shadow-[0_0_10px_#00f7ff]"
                                 transition={{ type: "spring", stiffness: 380, damping: 30 }}
                               />
                             )}
                           </AnimatePresence>
                       </button>
                   );
               })}
           </nav>

           <div className="absolute right-12 top-1/2 -translate-y-1/2">
               <img 
                src="/kiit-logo.png" 
                onMouseEnter={() => setIsKiitHovered(true)}
                onMouseLeave={() => { setIsKiitHovered(false); setIsKiitPressed(false); }}
                onMouseDown={() => setIsKiitPressed(true)}
                onMouseUp={() => setIsKiitPressed(false)}
                className={`h-14 w-auto transition-all duration-300 cursor-pointer select-none filter-none
                  ${isKiitPressed 
                    ? "scale-95 opacity-90" 
                    : isKiitHovered 
                      ? "scale-110 brightness-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]" 
                      : "brightness-100"
                  }`} 
                alt="KIIT"
               />
           </div>
         </motion.header>
       )}

       {/* 3. SYSTEM MODULE & TRACES */}
       {!activeDomainKey && (
         <motion.div 
          key="system-core"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 0.97 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
         >
            <div className="absolute inset-0 z-10">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                  <marker id="circle-dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="2.5" markerHeight="2.5">
                    <circle cx="5" cy="5" r="4" fill="#00f7ff" stroke="white" strokeWidth="1" />
                  </marker>
                </defs>
                {[...LEFT_NODES, ...RIGHT_NODES].map((node) => (
                  <PulseTrace key={node.key} item={node} isLeft={LEFT_NODES.includes(node)} isActive={hoveredNode === node.key} />
                ))}
              </svg>
            </div>

            <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
              <motion.div whileHover={{ scale: 1.02 }} className="pointer-events-auto transition-all duration-500">
                  <button 
                    onClick={() => setOpenPanel("home")}
                    onMouseEnter={() => setIsCpuHovered(true)}
                    onMouseLeave={() => { setIsCpuHovered(false); setIsCpuPressed(false); }}
                    onMouseDown={() => setIsCpuPressed(true)}
                    onMouseUp={() => setIsCpuPressed(false)}
                  >
                    <div className={`relative w-[280px] h-[450px] bg-black border-2 rounded-[45px] flex items-center justify-center transition-all duration-300 overflow-visible
                        ${isCpuPressed ? 'border-white shadow-[0_0_60px_rgba(255,255,255,0.4)]' : isCpuHovered ? 'border-white shadow-[0_0_80px_rgba(255,255,255,0.3)]' : 'border-[#00f7ff]/60 shadow-[0_0_90px_rgba(0,247,255,0.25)]'}`}>
                        <div className={`absolute inset-5 border rounded-[35px] transition-all duration-300 ${isCpuHovered ? 'border-white/40' : 'border-[#00f7ff]/20'}`} />
                        <div className="flex flex-col items-center justify-center z-10 w-full h-full">
                          <img src="/k1000-small.png" className={`w-36 h-auto transition-all duration-500 ${isCpuPressed ? "scale-90" : isCpuHovered ? "scale-105" : ""}`} />
                          <div className={`mt-6 text-[12px] tracking-[0.6em] font-bold uppercase transition-colors duration-300 ${isCpuHovered ? 'text-white' : 'text-[#00f7ff]'}`}>VERS.2026</div>
                        </div>
                        <div className="absolute -left-3.5 top-[25%] bottom-[25%] flex flex-col justify-between py-1.5">
                          {[...Array(10)].map((_,i)=><div key={i} className={`w-7 h-[2.5px] ${isCpuHovered ? 'bg-white shadow-[0_0_10px_#ffffff]' : 'bg-[#00f7ff] shadow-[0_0_15px_#00f7ff]'}`} />)}
                        </div>
                        <div className="absolute -right-3.5 top-[25%] bottom-[25%] flex flex-col justify-between py-1.5">
                          {[...Array(10)].map((_,i)=><div key={i} className={`w-7 h-[2.5px] ${isCpuHovered ? 'bg-white shadow-[0_0_10px_#ffffff]' : 'bg-[#00f7ff] shadow({0_0_15px_#00f7ff)'}`} />)}
                        </div>
                    </div>
                  </button>
              </motion.div>
              <div className="mt-16 text-[10px] tracking-[1.1em] uppercase font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                Train • Transform • Transcend
              </div>
            </div>

            <div className="absolute inset-0 z-[80]">
              {[...LEFT_NODES, ...RIGHT_NODES].map((node) => (
                  <NodeButton key={node.key} item={node} isLeft={LEFT_NODES.includes(node)} onHover={() => setHoveredNode(node.key)} onLeave={() => setHoveredNode(null)} isActive={hoveredNode === node.key} onClick={() => setActiveDomainKey(node.key)} />
              ))}
            </div>
         </motion.div>
       )}

       {/* 4. FOOTER */}
       {!activeDomainKey && (
         <motion.footer 
          key="main-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-8 w-full px-16 flex justify-between items-end"
         >
           <div className="text-[10px] text-[#00f7ff] tracking-[0.3em] uppercase">{typed}</div>
           <div className="text-[9px] text-[#00f7ff]/60 text-right leading-relaxed uppercase font-bold">
               System_Status: Online <br/>
               Core_Interface: Active_Window
           </div>
         </motion.footer>
       )}
     </AnimatePresence>

     {/* 5. OVERLAYS */}
     <AnimatePresence mode="wait">
        {openPanel && <GlobalHoloPanel key="holo-global" page={openPanel} onClose={() => setOpenPanel(null)} />}
        {activeDomain && (
          <motion.div 
            key="holo-domain-overlay"
            initial={{ opacity: 0, scale: 0.95, backdropFilter: "blur(0px)" }} 
            animate={{ opacity: 1, scale: 1, backdropFilter: "blur(12px)" }} 
            exit={{ opacity: 0, scale: 0.95, backdropFilter: "blur(0px)" }} 
            className="fixed inset-0 z-[150] flex items-center justify-center pointer-events-auto bg-black/40"
          >
            <DomainHoloPanel domain={activeDomain} onClose={() => setActiveDomainKey(null)} />
          </motion.div>
        )}
      </AnimatePresence>
   </div>
 );
}

function PulseTrace({ item, isLeft, isActive }: any) {
    const startX = isLeft ? 44.5 : 55.5;
    const endX = isLeft ? item.x - 0.5 : item.x + 0.5;
    const path = `M ${startX} ${item.exitY} H ${isLeft ? startX - 2.5 : startX + 2.5} V ${item.y} H ${endX}`;
   
    return (
      <>
        <motion.path d={path} fill="none" stroke="#FFFFFF" strokeWidth="0.2" opacity={isActive ? 0.9 : 0.4} markerEnd="url(#circle-dot)" />
        {isActive && (
          <motion.path d={path} fill="none" stroke="#FFFFFF" strokeWidth="0.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} style={{ filter: "blur(1px)" }} />
        )}
      </>
    );
}

function NodeButton({ item, isLeft, onHover, onLeave, isActive, onClick }: any) {
   return (
       <motion.button
         onMouseEnter={onHover} onMouseLeave={onLeave} onClick={onClick}
         style={{ top: `${item.y}%`, left: `${item.x}%` }}
         className={`absolute -translate-y-1/2 flex items-center group pointer-events-auto transition-all duration-300 ${isLeft ? "-translate-x-full flex-row" : "flex-row-reverse"} ${isActive ? 'scale-105' : ''}`}
       >
         <div className={`px-10 py-5 border-[1.5px] transition-all duration-500 min-w-[240px] flex items-center justify-center rounded-sm ${isActive ? 'bg-[#00f7ff]/20 border-[#00f7ff] shadow-[0_0_40px_rgba(0,247,255,0.4)]' : 'bg-black/80 border-[#00f7ff]/30'}`}>
           <span className={`text-[11px] uppercase tracking-[0.2em] font-bold ${isActive ? 'text-white' : 'text-[#00f7ff]/70'}`}>{item.label}</span>
         </div>
         <div className={`w-10 h-[1.5px] transition-colors ${isActive ? 'bg-[#00f7ff]' : 'bg-[#00f7ff]/30'}`} />
         <div className="w-4 h-4 rounded-full border border-[#00f7ff]/40 flex items-center justify-center bg-black">
           <div className={`w-2 h-2 rounded-full bg-[#00f7ff] transition-all ${isActive ? 'scale-125 shadow-[0_0_10px_#00f7ff]' : 'opacity-50'}`} />
         </div>
       </motion.button>
   );
}