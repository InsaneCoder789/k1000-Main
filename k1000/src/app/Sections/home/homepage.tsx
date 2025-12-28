"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { benefits } from "@/data/data.json";

// Lucide icons for Benefits
import {
  Rocket, FileText, BookOpen, Star, Award, Globe, Lightbulb, Users,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Rocket, FileText, BookOpen, Star, Award, Globe, Lightbulb, Users,
};

const conthrax = "font-['Conthrax',_sans-serif]";

export default function HomePage() {
  const stats = [
    { number: "100+", label: "Projects" },
    { number: "50+", label: "Publications" },
    { number: "20+", label: "Patents Filed" },
    { number: "20+", label: "Collaborations" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex flex-col items-center w-full space-y-32 font-sans bg-black text-white">
      
      {/* ─── SECTION 1: HERO (Text Over Image) ─── */}
      <motion.section 
        variants={itemVariants} 
        initial="hidden" 
        whileInView="visible" 
        className="w-full flex flex-col items-center"
      >
        <div className="relative w-full aspect-[21/9] max-h-[600px] rounded-[40px] overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(0,247,255,0.2)]">
          <img
            src="/hero/hero-2.jpg"
            className="w-full h-full object-cover brightness-50"
            alt="Hero Background"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/20">
            <motion.p className="text-cyan-400 font-[Orbitron] tracking-[0.5em] text-[10px] mb-6 uppercase">
              System Initialization: KIIT Elite Engineering
            </motion.p>
            
            <h1 className={`${conthrax} text-5xl md:text-7xl tracking-widest text-white mb-6`}>
              JOIN <span className="text-cyan-400 drop-shadow-[0_0_15px_#00f7ff]">K-1000</span>
            </h1>

            <p className="text-white/80 max-w-2xl text-lg leading-relaxed mb-10 font-light tracking-wide">
              Innovation • Research • Real-world Engineering <br/>
              The official R&D guild of KIIT University.
            </p>

            <div className="flex gap-6">
              <Link href="/Sections/apply" className={`${conthrax} px-10 py-4 bg-cyan-500 text-black uppercase text-[10px] tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(0,247,255,0.5)]`}>
                Apply Now
              </Link>
              <Link href="/Sections/about" className={`${conthrax} px-10 py-4 border border-cyan-500/50 text-cyan-400 uppercase text-[10px] tracking-widest rounded-full hover:bg-cyan-500/10 transition-all`}>
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 w-full max-w-5xl px-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center space-y-2 group">
              <span className="text-4xl font-[Orbitron] text-white group-hover:text-cyan-400 transition-colors">
                {stat.number}
              </span>
              <span className={`${conthrax} text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ─── SECTION 2: ABOUT (Direct Content) ─── */}
      <motion.section 
        variants={itemVariants} 
        initial="hidden" 
        whileInView="visible" 
        className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="relative">
          <img
            src="/hero/hero-1.jpg"
            className="rounded-[32px] border border-cyan-500/20 shadow-2xl brightness-75"
            alt="About K-1000"
          />
          <div className="absolute inset-0 bg-cyan-500/5 rounded-[32px]" />
        </div>

        <div className="space-y-8">
          <h2 className={`${conthrax} text-4xl tracking-[0.2em] text-white uppercase`}>
            ABOUT <span className="text-cyan-400">K-1000</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed tracking-wide">
            K-1000 is KIIT University’s official Research & Development guild—dedicated to shaping future engineers through real-world exposure, funded projects, and global opportunities.
          </p>
          <div className="space-y-4">
            {["Hands-on projects", "Research & Patents", "Industry Pipelines", "Technical Mastery"].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                <span className={`${conthrax} text-[10px] text-white/60 uppercase tracking-widest`}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ─── SECTION 3: BENEFITS (The Perks Grid) ─── */}
      <motion.section 
        variants={itemVariants} 
        initial="hidden" 
        whileInView="visible" 
        className="w-full max-w-6xl pb-20"
      >
        <h2 className={`${conthrax} text-4xl text-center tracking-[0.25em] text-cyan-400 mb-16 uppercase`}>
          Benefits & Perks
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = iconMap[b.icon] || Lightbulb;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5, borderColor: "rgba(0, 247, 255, 0.5)" }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className={`${conthrax} text-lg text-white mb-3 tracking-wider`}>{b.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">{b.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Motto */}
        <div className="mt-32 text-center">
            <p className={`${conthrax} text-[12px] tracking-[0.6em] text-cyan-500/50 uppercase`}>
                Train • Transform • Transcend
            </p>
        </div>
      </motion.section>
    </div>
  );
}