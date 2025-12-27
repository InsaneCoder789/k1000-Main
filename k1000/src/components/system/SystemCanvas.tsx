"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────── DATA & EXTERNAL PANELS ─────────── */
import { domains } from "../../data/domain"; 
import GlobalHoloPanel from "../ui/GlobalHoloPanel"; 
import DomainHoloPanel from "../ui/DomainHoloPanel";

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
   <div className="relative w-full h-screen bg-[#020202] text-white overflow-hidden font-mono select-none">
    
     {/* 1. BACKGROUND GRID & GLOW */}
     <div className="absolute inset-0 z-0">
       <motion.div
         animate={{ opacity: [0.04, 0.08, 0.04] }}
         transition={{ duration: 6, repeat: Infinity }}
         className="absolute inset-0 bg-[linear-gradient(to_right,#00f7ff15_1px,transparent_1px),linear-gradient(to_bottom,#00f7ff15_1px,transparent_1px)] bg-[size:20px_20px]"
       />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_85%)]" />
     </div>

     {/* 2. HEADER - NAVBAR TRIGGERING HOLOPANEL */}
     <header className="absolute top-0 w-full z-[70] px-12 h-28 flex items-center justify-center">
       <div className="absolute left-12 top-1/2 -translate-y-1/2">
           <img src="/k1000-logo.png" className="h-7 w-auto brightness-200 drop-shadow-[0_0_12px_#00f7ff]" alt="K-1000" />
       </div>
      
       <nav className="flex gap-10 px-16 py-5 rounded-full border border-[#00f7ff]/40 bg-black/60 backdrop-blur-xl shadow-[0_0_40px_rgba(0,247,255,0.15)] relative pointer-events-auto">
           <div className="absolute top-0 left-20 right-20 h-[1.5px] bg-[#00f7ff] shadow-[0_0_15px_#00f7ff]" />
           {NAV_ITEMS.map((nav) => (
               <button 
                key={nav} 
                onClick={() => setOpenPanel(nav.toLowerCase())}
                className="text-[10px] uppercase tracking-[0.4em] font-black text-white/60 hover:text-[#00f7ff] transition-all whitespace-nowrap"
               >
                   {nav}
               </button>
           ))}
       </nav>

       <div className="absolute right-12 top-1/2 -translate-y-1/2">
           <img src="/kiit-logo.png" className="h-14 w-auto brightness-110" alt="KIIT" />
       </div>
     </header>

     {/* 3. SYSTEM MODULE & TRACES */}
     <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-[0.97]">
        
         {/* TRACES */}
         <div className="absolute inset-0 z-10">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
             <defs>
               <marker id="arrow-left" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse">
                 <path d="M 0 0 L 10 5 L 0 10 z" fill="#00f7ff" />
               </marker>
               <marker id="arrow-right" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3" markerHeight="3" orient="auto">
                 <path d="M 0 0 L 10 5 L 0 10 z" fill="#00f7ff" />
               </marker>
             </defs>
             {[...LEFT_NODES, ...RIGHT_NODES].map((node) => (
               <PulseTrace
                 key={`trace-${node.key}`}
                 item={node}
                 isLeft={LEFT_NODES.includes(node)}
                 isActive={hoveredNode === node.key}
               />
             ))}
           </svg>
         </div>

         {/* CPU CORE - FIXED TO TRIGGER GLOBALHOLOPANEL(HOME) */}
         <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
           <motion.div initial={{ opacity: 1 }} whileHover={{ scale: 1.02 }} className="pointer-events-auto transition-all duration-500">
               <button onClick={() => setOpenPanel("home")}>
                 <div className="relative w-[280px] h-[450px] bg-black border-2 border-[#FFFFFF]/80 rounded-[45px] flex items-center justify-center shadow-[0_0_90px_rgba(0,247,255,0.18)] overflow-visible">
                     <div className="absolute inset-5 border border-[#FFFFFF]/30 rounded-[35px]" />
                     <div className="flex flex-col items-center justify-center z-10 w-full h-full">
                       <img src="/k1000-small.png" className="w-32 h-auto drop-shadow-[0_0_20px_#FFFFFF]" />
                       <div className="mt-6 text-[13px] tracking-[0.6em] text-[#00f7ff] font-black uppercase">VERS.2026</div>
                     </div>

                     {/* Physical Pins */}
                     <div className="absolute -left-3.5 top-[25%] bottom-[25%] flex flex-col justify-between py-1.5">
                       {[...Array(10)].map((_,i)=><div key={i} className="w-7 h-[2.5px] bg-[#FFFFFF] shadow-[0_0_40px_#00f7ff]" />)}
                     </div>
                     <div className="absolute -right-3.5 top-[25%] bottom-[25%] flex flex-col justify-between py-1.5">
                       {[...Array(10)].map((_,i)=><div key={i} className="w-7 h-[2.5px] bg-[#FFFFFF] shadow-[0_0_40px_#00f7ff]" />)}
                     </div>
                 </div>
               </button>
           </motion.div>

           {/* White Tagline */}
           <div className="mt-16 text-[11px] tracking-[1.1em] text-white uppercase font-black opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
               Train • Transform • Transcend
           </div>
         </div>

         {/* DOMAIN BUTTONS */}
         <div className="absolute inset-0 z-80">
           {[...LEFT_NODES, ...RIGHT_NODES].map((node) => (
               <NodeButton
                 key={node.key}
                 item={node}
                 isLeft={LEFT_NODES.includes(node)}
                 onHover={() => setHoveredNode(node.key)}
                 onLeave={() => setHoveredNode(null)}
                 isActive={hoveredNode === node.key}
                 onClick={() => setActiveDomainKey(node.key)}
               />
           ))}
         </div>
     </div>

     {/* 4. OVERLAYS - ALL CONTENT IS LOADED HERE */}
     <AnimatePresence mode="wait">
        {openPanel && (
          <GlobalHoloPanel 
            key="holo-overlay"
            page={openPanel} 
            onClose={() => setOpenPanel(null)} 
          />
        )}
        {activeDomain && (
          <motion.div 
            key={`domain-${activeDomain.key}`}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto"
          >
            <DomainHoloPanel 
                domain={activeDomain} 
                onClose={() => setActiveDomainKey(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

     <footer className="absolute bottom-8 w-full px-16 flex justify-between items-end opacity-60">
       <div className="text-[11px] text-[#FFFFFF] font-mono tracking-widest">{typed}</div>
       <div className="text-[9px] text-white/40 text-right leading-relaxed uppercase font-black">
           System_Status: Online <br/>
           Core_Interface: Active_Window
       </div>
     </footer>
   </div>
 );
}

function PulseTrace({ item, isLeft, isActive }: any) {
   const startX = isLeft ? 44.5 : 55.5;
   const endX = isLeft ? item.x + 0.5 : item.x - 0.5;
   const path = `M ${startX} ${item.exitY} H ${isLeft ? startX - 2.5 : startX + 2.5} V ${item.y} H ${endX}`;
  
   return (
     <>
       <motion.path
         d={path} fill="none" stroke="#FFFFFF" strokeWidth="0.2"
         opacity={isActive ? 1 : 0.4}
         markerEnd={isLeft ? "url(#arrow-left)" : "url(#arrow-right)"}
       />
       {isActive && (
         <motion.path
           d={path} fill="none" stroke="#00f7ff" strokeWidth="0.4"
           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           style={{ filter: "blur(1px)" }}
         />
       )}
     </>
   );
}

function NodeButton({ item, isLeft, onHover, onLeave, isActive, onClick }: any) {
   return (
       <motion.button
         onMouseEnter={onHover} onMouseLeave={onLeave}
         onClick={onClick}
         style={{ top: `${item.y}%`, left: `${item.x}%` }}
         className={`absolute -translate-y-1/2 flex items-center group pointer-events-auto transition-all duration-300
           ${isLeft ? "-translate-x-full flex-row" : "flex-row-reverse"} ${isActive ? 'scale-105' : ''}`}
       >
         <div className={`px-10 py-5 border-[1.5px] transition-all duration-500 min-w-[240px] flex items-center justify-center
           ${isActive ? 'bg-[#00f7ff]/20 border-[#00f7ff] shadow-[0_0_40px_rgba(0,247,255,0.4)]' : 'bg-black/80 border-[#00f7ff]/30'}`}>
           <span className={`text-[13px] uppercase tracking-[0.2em] font-black ${isActive ? 'text-white' : 'text-white/80'}`}>
             {item.label}
           </span>
         </div>
         <div className={`w-10 h-[1.5px] transition-colors ${isActive ? 'bg-[#00f7ff]' : 'bg-[#00f7ff]/30'}`} />
         <div className="w-4 h-4 rounded-full border border-[#00f7ff]/40 flex items-center justify-center bg-black">
           <div className={`w-2 h-2 rounded-full bg-[#00f7ff] transition-all ${isActive ? 'scale-125 shadow-[0_0_10px_#00f7ff]' : 'opacity-50'}`} />
         </div>
       </motion.button>
   );
}