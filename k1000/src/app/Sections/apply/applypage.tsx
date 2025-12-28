"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { Terminal, Zap, ChevronRight, Activity } from "lucide-react";

const conthrax = "font-['Conthrax',_sans-serif]";

const ApplicationForm = () => {
  const GOOGLE_FORM_LINK = "https://forms.gle/irg7nzkhh3tWnpib8";

  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center p-6 font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-4xl bg-[#050505] border border-cyan-500/30 rounded-[40px] shadow-[0_0_100px_rgba(0,247,255,0.15)] overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          <div className="lg:col-span-7 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-white/5 relative flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-8">
              <div className="flex items-center space-x-2 px-3 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <Zap size={12} className="text-amber-400 fill-amber-400" />
                <span className={`${conthrax} text-[8px] text-amber-400 tracking-[0.2em] uppercase font-bold`}>Fast-Track Active</span>
              </div>
              <span className={`${conthrax} text-[8px] text-cyan-500/60 tracking-[0.4em] uppercase`}>• Protocol 1000</span>
            </div>

            <h2 className={`${conthrax} text-4xl md:text-5xl text-white mb-6 uppercase leading-tight`}>
              Join the <br />
              <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,247,255,0.6)]">Premium Guild</span>
            </h2>

            <p className="text-white/50 text-base leading-relaxed max-w-sm mb-12">
              The high-performance ecosystem for technical pioneers. Synchronize your profile to access global research infrastructure.
            </p>

            <div className="flex items-center space-x-10 mt-auto">
              <div>
                <span className={`${conthrax} text-[7px] text-cyan-500/40 uppercase tracking-widest block mb-1`}>Priority</span>
                <span className="text-white text-xs font-bold tracking-widest uppercase">High Tier</span>
              </div>
              <div>
                <span className={`${conthrax} text-[7px] text-cyan-500/40 uppercase tracking-widest block mb-1`}>Status</span>
                <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                  <Activity size={12} className="animate-pulse" /> Live Uplink
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col p-10 bg-cyan-400/[0.02] items-center justify-center space-y-8">
            <motion.a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-[280px] aspect-square rounded-[35px] border-2 border-cyan-400/50 bg-cyan-400/5 flex flex-col items-center justify-center group relative shadow-[0_0_40px_rgba(0,247,255,0.2)]"
            >
              <div className="absolute inset-0 bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-4 rounded-2xl bg-cyan-400 text-black shadow-[0_0_20px_rgba(0,247,255,0.5)] mb-6">
                <Terminal size={32} />
              </div>
              <span className={`${conthrax} text-xl text-white tracking-[0.3em] uppercase`}>Apply Now</span>
              <div className="mt-4 flex items-center text-cyan-400/60 text-[9px] tracking-widest">
                <ChevronRight size={14} className="mr-1" /> Initialize Uplink
              </div>
            </motion.a>

            <div className="flex gap-4">
              {[FaLinkedinIn, FaInstagram, FaWhatsapp].map((Icon, i) => (
                <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-cyan-400 transition-all cursor-pointer">
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ApplicationForm;