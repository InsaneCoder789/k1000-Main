"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EVENTS, K1000Event } from "@/data/event";
import { Calendar, ExternalLink, Activity, ShieldCheck } from "lucide-react";

const conthrax = "font-['Conthrax',_sans-serif]";

const Events = () => {
  // Desktop state logic
  const [selectedEvent, setSelectedEvent] = useState<K1000Event>(EVENTS[0]);

  // Mobile: Custom Sort (December 2025 -> October -> September)
  // This logic assumes your EVENTS data objects have these date strings or corresponding IDs
  const mobileSortedEvents = [...EVENTS].sort((a, b) => {
    const months: Record<string, number> = { "December": 12, "October": 10, "September": 9 };
    
    // Extract month from "December 2025" or similar format
    const getMonthValue = (dateStr: string) => {
      const month = Object.keys(months).find(m => dateStr.includes(m));
      return month ? months[month] : 0;
    };

    return getMonthValue(b.date) - getMonthValue(a.date);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* ─── SHARED BACKGROUND GRID ─── */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* ================================================================
          1. DESKTOP LAYOUT (Sidebar + Content View)
          ================================================================
      */}
      <div className="hidden lg:flex relative z-10 w-full h-screen overflow-hidden">
        {/* LEFT SIDEBAR */}
        <div className="w-[380px] h-full border-r border-white/5 bg-black/40 backdrop-blur-md flex flex-col">
          <div className="p-10 pt-32 border-b border-white/5">
            <div className="flex items-center space-x-3 mb-6">
              <Activity size={20} className="text-cyan-400" />
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
                  ? "bg-cyan-500/10 border-cyan-400/40 shadow-[0_0_30px_rgba(0,247,255,0.1)]" 
                  : "bg-transparent border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex flex-col gap-2">
                  <span className={`${conthrax} text-[8px] tracking-[0.3em] ${selectedEvent.id === event.id ? "text-cyan-400" : "text-white/20"}`}>
                    {event.date}
                  </span>
                  <span className={`${conthrax} text-xs text-white uppercase`}>{event.title}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="p-8 border-t border-white/5">
             <span className={`${conthrax} text-[8px] text-white/20 uppercase tracking-widest`}>K-1000 Archive Protocol v1.0</span>
          </div>
        </div>

        {/* RIGHT CONTENT PANEL */}
        <div className="flex-1 h-full overflow-y-auto custom-scrollbar bg-[#020202]">
          <div className="relative h-[55vh] w-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedEvent.id}
                src={selectedEvent.gallery[0]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 w-full h-full object-cover object-top brightness-[0.45]"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent" />
            <div className="absolute bottom-12 left-16 right-16 flex items-end justify-between z-20">
              <div className="max-w-2xl">
                <span className="px-4 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/40 text-[9px] text-cyan-400 uppercase font-bold tracking-widest mb-6 inline-block">
                  {selectedEvent.category}
                </span>
                <h2 className={`${conthrax} text-6xl text-white uppercase leading-none tracking-tighter`}>
                  {selectedEvent.title}
                </h2>
              </div>
              <motion.a whileHover={{ scale: 1.05 }} href={selectedEvent.link} target="_blank" className="flex items-center space-x-4 px-10 py-5 bg-cyan-500 text-black rounded-2xl font-bold">
                <span className={`${conthrax} text-[11px] uppercase`}>Uplink Report</span>
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </div>

          <div className="px-16 pt-12 pb-20 grid grid-cols-12 gap-20">
            <div className="col-span-7 space-y-12">
              <p className="text-white/60 text-xl leading-relaxed font-light italic border-l-2 border-cyan-500/20 pl-8">
                "{selectedEvent.description}"
              </p>
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center space-x-6">
                <Calendar className="text-cyan-400" size={24} />
                <p className="text-white text-sm font-bold uppercase">{selectedEvent.date}</p>
              </div>
            </div>
            <div className="col-span-5">
              <div className="p-10 rounded-[40px] bg-cyan-400/[0.02] border border-cyan-400/10">
                <h4 className={`${conthrax} text-[10px] text-cyan-400 uppercase tracking-[0.5em] mb-10`}>Critical Highlights</h4>
                <div className="space-y-8">
                  {selectedEvent.highlights.map((point, i) => (
                    <div key={i} className="flex space-x-6">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-[0_0_10px_#00f7ff]" />
                      <p className="text-white/80 text-base leading-snug font-light">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================
          2. MOBILE LAYOUT (Infinite Feed / No Header)
          ================================================================
      */}
      <div className="lg:hidden flex flex-col w-full relative z-10">
        <div className="flex flex-col w-full">
          {mobileSortedEvents.map((event) => (
            <section key={event.id} className="w-full flex flex-col border-b border-white/10 last:border-0">
              {/* HERO */}
              <div className="relative h-[48vh] w-full overflow-hidden">
                <img 
                  src={event.gallery[0]} 
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover object-top brightness-[0.4]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-8 left-6 right-6">
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/40 text-[8px] text-cyan-400 uppercase font-bold tracking-widest mb-3 inline-block">
                    {event.category}
                  </span>
                  <h2 className={`${conthrax} text-4xl text-white uppercase leading-none mb-6`}>
                    {event.title}
                  </h2>
                  <a 
                    href={event.link} 
                    target="_blank" 
                    className="inline-flex items-center space-x-3 bg-cyan-500 px-7 py-4 rounded-xl text-black font-bold"
                  >
                    <span className={`${conthrax} text-[10px] uppercase tracking-widest`}>Uplink Report</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* MOBILE DATA */}
              <div className="p-8 pb-16 space-y-12 bg-black">
                {/* Mission Briefing */}
                <div className="space-y-4">
                   <div className="flex items-center space-x-2 text-cyan-500/40">
                      <ShieldCheck size={18} />
                      <span className={`${conthrax} text-[9px] uppercase tracking-widest`}>Mission Briefing</span>
                   </div>
                   <p className="font-sans text-white/70 text-base italic leading-relaxed pl-5 border-l border-cyan-500/20">
                    "{event.description}"
                   </p>
                </div>

                {/* Highlights */}
                <div className="p-8 rounded-[30px] bg-cyan-400/[0.03] border border-cyan-400/10">
                  <h4 className={`${conthrax} text-[10px] text-cyan-400 uppercase tracking-widest mb-8`}>Critical Highlights</h4>
                  <div className="space-y-6">
                    {event.highlights.map((point, i) => (
                      <div key={i} className="flex space-x-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <p className="font-sans text-white/80 text-sm font-light leading-snug">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Reference */}
                <div className="flex items-center space-x-3 opacity-40">
                   <Calendar size={14} className="text-white" />
                   <span className={`${conthrax} text-[9px] text-white uppercase tracking-widest`}>{event.date}</span>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* FEED END */}
        <footer className="py-20 flex flex-col items-center justify-center opacity-20 border-t border-white/5 bg-black">
           <p className={`${conthrax} text-[9px] uppercase tracking-[1em]`}>Archive Terminal</p>
        </footer>
      </div>
    </div>
  );
};

export default Events;