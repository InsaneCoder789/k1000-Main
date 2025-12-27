"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://cdn.prod.website-files.com/67aa2520eb413205a7dac909/67aa3147b53442d24541b355_KIIT-University-Bhubaneswar.jpeg",
  "https://cdn.prod.website-files.com/67aa2520eb413205a7dac909/67aa32340b3a8697b5760399_KIIT-Campus-Front-Library-1200x416.jpg",
];

const benefits = [
  {
    title: "Early Research Exposure",
    desc: "Get involved in research from the first year, fostering an inquisitive mindset.",
    detail: "Phase 1: Fundamental Methodology & Logic"
  },
  {
    title: "Mentorship & Guidance",
    desc: "Work closely with experienced faculty mentors who guide your research journey.",
    detail: "Direct 1-on-1 Faculty-Student mapping"
  },
  {
    title: "Skill Development",
    desc: "Gain hands-on experience in research methodologies, data analysis, and problem-solving.",
    detail: "Technical Stack: AI/ML, Data Science, Core Eng."
  },
  {
    title: "Publication & Patents",
    desc: "Opportunity to publish research papers and file patents through university support.",
    detail: "IPR Support & Indexed Journal Drafting"
  },
  {
    title: "Networking & Collaborations",
    desc: "Connect with like-minded peers, researchers, and industry experts.",
    detail: "Access to Global Tech Forums & Alumnus Network"
  },
  {
    title: "International Exposure",
    desc: "Participate in research collaborations with top institutions worldwide.",
    detail: "Exchange Programs & Global Internships"
  },
  {
    title: "Competitive Training",
    desc: "Develop skills and knowledge through rigorous training in a growth-oriented setting.",
    detail: "Real-world Project Stress-Testing"
  },
  {
    title: "Seed Funding Access",
    desc: "Eligible projects receive initial capital to transform research into prototypes.",
    detail: "Incubation at KIIT-TBI (Technology Business Incubator)"
  },
  {
    title: "Placement Advantage",
    desc: "Research-backed profiles receive priority in high-end R&D corporate recruitment.",
    detail: "Tier-1 Tech Placements & R&D Roles"
  },
];

export default function BenefitsPage() {
  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center space-y-32 py-10 px-6 font-sans">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative w-full max-w-7xl h-[55vh] rounded-[40px] overflow-hidden border border-cyan-500/20 shadow-2xl">
        <img 
          src={images[0]} 
          className="absolute inset-0 size-full object-cover brightness-[0.4]" 
          alt="KIIT Campus" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-[Orbitron] tracking-[0.2em] text-white"
          >
            JOIN <span className="text-cyan-400 drop-shadow-[0_0_15px_#00f7ff]">K-1000</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/60 mt-8 max-w-4xl text-lg md:text-xl font-light leading-relaxed font-[Orbitron] tracking-[0.4em]"
          >
            TRAIN • COMPETE • PUBLISH
          </motion.p>
        </div>
      </section>

      {/* ─── DESCRIPTION BLOCK ─── */}
      <section className="w-full max-w-4xl text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-[Orbitron] text-white uppercase tracking-tighter">
          The <span className="text-cyan-400 text-shadow-glow">Ecosystem</span>
        </h2>
        <p className="text-xl text-white/70 leading-relaxed font-light">
          The K-1000 initiative is more than a program; it's a launchpad. 
          By integrating technical rigor with research excellence, we prepare 
          students for the highest tiers of global industry and academia.
        </p>
      </section>

      {/* ─── BENEFITS GRID ─── */}
      <section className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[40px] bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 transition-all group shadow-xl flex flex-col items-start text-left relative overflow-hidden"
            >
              {/* Decorative Corner Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all" />
              
              <h3 className="text-xl font-[Orbitron] text-white mb-3 tracking-wide group-hover:text-cyan-400 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-white/60 text-sm leading-relaxed font-light mb-6">
                {benefit.desc}
              </p>

              {/* Extra Detail Badge */}
              <div className="mt-auto pt-6 border-t border-white/10 w-full">
                <p className="text-[10px] font-[Orbitron] text-cyan-500/80 uppercase tracking-widest">
                  {benefit.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CALL TO ACTION SECTION ─── */}
      <section className="w-full max-w-7xl relative h-[45vh] rounded-[40px] overflow-hidden border border-white/5 group">
        <img
          src={images[1]}
          alt="Research Development"
          className="size-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-[2.5s]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 bg-black/40 backdrop-blur-[1px]">
          <h2 className="text-2xl md:text-3xl font-[Orbitron] text-white tracking-[0.4em] text-center">
            EMBARK ON THE <span className="text-cyan-400">MISSION</span>
          </h2>
          <motion.a
            href="https://kiit.ac.in/research"
            target="_blank"
            rel="noopener noreferrer"
            className="px-14 py-5 bg-transparent border border-cyan-400 text-cyan-400 font-[Orbitron] uppercase text-[10px] tracking-[0.5em] rounded-full hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_30px_rgba(0,247,255,0.25)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Access Portal
          </motion.a>
        </div>
      </section>

      {/* FOOTER SYSTEM STATUS */}
      <div className="pb-20 opacity-30">
         <p className="text-[10px] font-[Orbitron] tracking-[2em] text-cyan-500 uppercase">
           Elite • Research • Intelligence
         </p>
      </div>
    </div>
  );
}