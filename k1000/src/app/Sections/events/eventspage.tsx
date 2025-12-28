"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EVENTS, K1000Event } from "@/data/event";
import { Calendar, ExternalLink, Zap, ChevronRight, Activity, ShieldCheck } from "lucide-react";

const conthrax = "font-['Conthrax',_sans-serif]";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<K1000Event>(EVENTS[0]);

  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden bg-black font-sans">
      {/* ─── BACKGROUND AMBIANCE ─── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
        
        {/* ─── LEFT SIDEBAR: PUSHED DOWN NAVIGATION ─── */}
        <div className="lg:w-[380px] h-full border-r border-white/5 bg-black/40 backdrop-blur-md flex flex-col">
          {/* Increased Top Padding (pt-32) to push the title and list down */}
          <div className="p-10 pt-32 border-b border-white/5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <Activity size={20} className="text-cyan-400" />
              </div>
              <span className={`${conthrax} text-[9px] text-cyan-500/80 tracking-[0.5em] uppercase`}>Archives</span>
            </div>
            <h1 className={`${conthrax} text-3xl text-white uppercase leading-tight`}>
              Tactical <br />
              <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,247,255,0.3)]">Registry</span>
            </h1>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
            {EVENTS.map((event) => (
              <button
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 relative group ${
                  selectedEvent.id === event.id 
                  ? "bg-cyan-500/10 border-cyan-500/40 shadow-[0_0_30px_rgba(0,247,255,0.1)]" 
                  : "bg-transparent border-white/5 hover:border-white/20"
                }`}
              >
                <div className="relative z-10 flex flex-col gap-2">
                  <span className={`${conthrax} text-[8px] tracking-[0.3em] ${selectedEvent.id === event.id ? "text-cyan-400" : "text-white/20"}`}>
                    {event.date}
                  </span>
                  <span className={`${conthrax} text-xs text-white uppercase group-hover:text-cyan-400 transition-colors`}>
                    {event.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="p-8 border-t border-white/5">
             <span className={`${conthrax} text-[8px] text-white/20 uppercase tracking-widest`}>K-1000 Archive Protocol v1.0</span>
          </div>
        </div>

        {/* ─── RIGHT SIDE: TOP-FOCUSED CONTENT ─── */}
        <div className="flex-1 h-full relative flex flex-col overflow-y-auto custom-scrollbar bg-[#020202]">
          
          {/* HERO IMAGE SECTION (Shifted to object-top) */}
          <div className="relative h-[55vh] w-full overflow-hidden shrink-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedEvent.id}
                src={selectedEvent.gallery[0]}
                alt={selectedEvent.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                // Changed object-center to object-top to show the top part of the posters
                className="absolute inset-0 w-full h-full object-cover object-top brightness-[0.45] contrast-[1.1]"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent" />
            
            <div className="absolute bottom-12 left-16 right-16 flex flex-col md:flex-row md:items-end justify-between gap-8 z-20">
              <div className="max-w-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-4 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/40 text-[9px] text-cyan-400 uppercase font-bold tracking-widest">
                    {selectedEvent.category}
                  </span>
                </div>
                <h2 className={`${conthrax} text-6xl md:text-7xl text-white uppercase leading-none tracking-tighter`}>
                  {selectedEvent.title}
                </h2>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href={selectedEvent.link}
                target="_blank"
                className="flex items-center space-x-4 px-10 py-5 bg-cyan-500 text-black rounded-2xl font-bold"
              >
                <span className={`${conthrax} text-[11px] uppercase tracking-widest`}>Uplink Report</span>
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </div>

          {/* CONTENT SECTION (Increased pt-12 to push down) */}
          <div className="px-16 pt-12 pb-20 grid grid-cols-1 xl:grid-cols-12 gap-20">
            
            <div className="xl:col-span-7 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-cyan-500/40">
                  <ShieldCheck size={18} />
                  <h4 className={`${conthrax} text-[10px] uppercase tracking-[0.5em]`}>Mission Briefing</h4>
                </div>
                <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light italic border-l-2 border-cyan-500/20 pl-8">
                  "{selectedEvent.description}"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center space-x-6">
                  <Calendar className="text-cyan-400" size={24} />
                  <div>
                    <h5 className={`${conthrax} text-[8px] text-white/30 uppercase tracking-widest mb-1`}>Timestamp</h5>
                    <p className="text-white text-sm font-bold uppercase">{selectedEvent.date}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:col-span-5">
              <div className="p-10 rounded-[40px] bg-cyan-400/[0.02] border border-cyan-400/10">
                <h4 className={`${conthrax} text-[10px] text-cyan-400 uppercase tracking-[0.5em] mb-10`}>Critical Highlights</h4>
                <div className="space-y-8">
                  {selectedEvent.highlights.map((point, i) => (
                    <div key={i} className="flex space-x-6">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shadow-[0_0_10px_rgba(0,247,255,1)]" />
                      <p className="text-white/80 text-sm md:text-base leading-snug font-light">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;