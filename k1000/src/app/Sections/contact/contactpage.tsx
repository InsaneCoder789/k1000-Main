"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Cpu } from "lucide-react";

const conthrax = "font-['Conthrax',_sans-serif]";

const Contact = () => {
  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center p-6 font-sans">
      {/* ─── ATMOSPHERIC BACKGROUND ─── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] pointer-events-none" />

      {/* ─── MAIN CONSOLE ─── */}
      <motion.div
        className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-stretch bg-[#050505] rounded-[40px] overflow-hidden border border-cyan-500/30 shadow-[0_0_100px_rgba(0,247,255,0.15)]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* ─── IMAGE SECTION: Using object-fill ─── */}
        <div className="lg:w-1/2 relative bg-[#080808] border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden">
          <div className="h-full w-full relative">
            <img
              src="https://crf.kiit.ac.in/wp-content/uploads/2022/01/KIIT-Research-Development-1.jpg"
              alt="KIIT Research Office"
              /* Use style={{ objectFit: 'fill' }} because Tailwind's default 
                 is object-cover. This prevents any zooming. */
              style={{ objectFit: 'fill' }}
              className="absolute inset-0 w-full h-full brightness-[0.5] contrast-[1.1]"
            />
            
            {/* Tactical Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-8 left-8">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className={`${conthrax} text-white text-[10px] tracking-widest`}>LIVE FEED: HQ</span>
              </div>
              <div className={`${conthrax} text-cyan-400/40 text-[9px] tracking-[0.8em] uppercase`}>
                COORD: 20.35°N / 85.81°E
              </div>
            </div>
          </div>
        </div>

        {/* ─── CONTACT INFO SECTION ─── */}
        <motion.div
          className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative bg-cyan-400/[0.01]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative z-10">
            <h1 className={`${conthrax} text-4xl md:text-5xl text-white mb-6 uppercase tracking-tight`}>
              Contact <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,247,255,0.5)]">Us</span>
            </h1>

            <p className="text-white/40 text-sm md:text-base font-light leading-relaxed mb-12 max-w-md">
              Establish a direct uplink with the K-1000 Command Center for 
              research authorization and guild inquiries.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 group-hover:border-cyan-400 transition-all">
                  <MapPin className="text-cyan-400" size={18} />
                </div>
                <div>
                  <h4 className={`${conthrax} text-[8px] text-cyan-500/50 uppercase tracking-[0.4em] mb-1`}>Location</h4>
                  <p className="text-white/70 text-sm tracking-wide">KIIT University, Bhubaneswar</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 group-hover:border-cyan-400 transition-all">
                  <Phone className="text-cyan-400" size={18} />
                </div>
                <div>
                  <h4 className={`${conthrax} text-[8px] text-cyan-500/50 uppercase tracking-[0.4em] mb-1`}>Point of Contact</h4>
                  <p className="text-white/70 text-sm tracking-wide">
                    Dr. Ajit Kumar Pasayat <br />
                    <span className="text-cyan-400/60 font-mono text-xs">+91 70085 88187</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 group-hover:border-cyan-400 transition-all">
                  <Mail className="text-cyan-400" size={18} />
                </div>
                <div>
                  <h4 className={`${conthrax} text-[8px] text-cyan-500/50 uppercase tracking-[0.4em] mb-1`}>Comm Link</h4>
                  <p className={`${conthrax} text-cyan-400/80 text-[10px] tracking-widest hover:text-cyan-300 transition-colors`}>
                    k.1000@kiit.ac.in
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-[-50px] right-[-50px] opacity-[0.02] pointer-events-none rotate-12">
            <Cpu size={350} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;