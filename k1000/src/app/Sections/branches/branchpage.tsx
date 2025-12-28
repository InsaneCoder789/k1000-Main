"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://cdn.prod.website-files.com/67aa2520eb413205a7dac909/67aa32340b3a8697b5760399_KIIT-Campus-Front-Library-1200x416.jpg",
];

const conthrax = "font-['Conthrax',_sans-serif]";

const branches = [
  {
    title: "Training Program",
    tag: "Unit: Skill Acquisition",
    desc: "A peer-to-peer learning initiative focused on both technical and non-technical mastery. Students engage in workshops and real-world projects to build high-level practical knowledge.",
    focus: "Hands-on Workshops • Peer Mentoring • Professional Growth"
  },
  {
    title: "Research and Publications",
    tag: "Unit: Academic Innovation",
    desc: "Supports students in the end-to-end process of academic research. From selecting high-impact topics to final submissions in reputed journals and global conferences.",
    focus: "Journal Drafting • Faculty Collaboration • IPR Support"
  },
  {
    title: "Project Wing",
    tag: "Unit: Product Development",
    desc: "Enables skilled members to build real-world solutions in a team-driven environment. We provide the resources and mentorship required to turn ideas into impactful prototypes.",
    focus: "Agile Development • Resource Allocation • Industry Prototypes"
  },
  {
    title: "Event Organization",
    tag: "Unit: Operations & Management",
    desc: "The logistics backbone of K-1000. This wing plans and executes hackathons, webinars, and speaker sessions, building leadership and communication excellence.",
    focus: "Hackathon Management • Speaker Relations • Global Webinars"
  },
  {
    title: "Internship and Placement",
    tag: "Unit: Career Bridge",
    desc: "Bridges the gap between campus and industry. We provide industry connections, resume reviews, and mock interview sessions to secure high-tier recruitment.",
    focus: "Corporate Relations • Resume Optimization • Mock Drills"
  },
  {
    title: "Higher Studies",
    tag: "Unit: Global Advancement",
    desc: "Guidance for students aiming for post-graduate excellence in India or abroad. We streamline SOP writing, scholarship applications, and entrance exam prep.",
    focus: "SOP/LOR Drafting • Scholarship Tracking • University Mapping"
  },
];

export default function BranchesPage() {
  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center space-y-32 py-10 px-6 font-sans bg-black">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative w-full max-w-7xl h-[50vh] rounded-[40px] overflow-hidden border border-cyan-500/20 shadow-[0_0_50px_rgba(0,247,255,0.1)]">
        <img 
          src={images[0]} 
          className="absolute inset-0 size-full object-cover brightness-[0.35]" 
          alt="KIIT Library" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${conthrax} text-5xl md:text-7xl tracking-[0.2em] text-white uppercase`}
          >
            Our <span className="text-cyan-400 drop-shadow-[0_0_15px_#00f7ff]">Branches</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            className="h-1 bg-cyan-500 mt-6 shadow-[0_0_10px_#00f7ff]"
          />
        </div>
      </section>

      {/* ─── INTRO DESCRIPTION ─── */}
      <section className="w-full max-w-4xl text-center">
        <p className="text-xl text-white/70 leading-relaxed font-light font-[Orbitron] tracking-wide">
          Explore the strategic divisions of <span className="text-white border-b border-cyan-500/50">K-1000</span>. 
          Each wing is a specialized ecosystem designed to accelerate your growth 
          across specific domains of technology, research, and leadership.
        </p>
      </section>

      {/* ─── BRANCHES GRID ─── */}
      <section className="w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 rounded-[45px] bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all duration-500 flex flex-col h-full shadow-2xl overflow-hidden"
            >
              {/* Top Unit Tag */}
              <span className={`${conthrax} text-[9px] text-cyan-500/60 tracking-[0.3em] uppercase mb-6 block`}>
                {branch.tag}
              </span>

              <h3 className={`${conthrax} text-2xl text-white mb-6 group-hover:text-cyan-400 transition-colors tracking-tight`}>
                {branch.title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed font-light mb-8 flex-grow">
                {branch.desc}
              </p>

              {/* Bottom Focus Detail */}
              <div className="pt-6 border-t border-white/5">
                <p className={`${conthrax} text-[9px] text-white/30 group-hover:text-white/60 transition-colors tracking-widest`}>
                  {branch.focus}
                </p>
              </div>

              {/* Decorative Background Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/5 blur-[80px] group-hover:bg-cyan-500/10 transition-all" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CALL TO ACTION ─── */}
      <section className="w-full max-w-5xl flex flex-col items-center text-center space-y-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <h2 className={`${conthrax} text-2xl md:text-3xl tracking-[0.2em] uppercase`}>
          WANT TO LEARN <span className="text-cyan-400">MORE?</span>
        </h2>
        <motion.a
          href="https://kiit.ac.in/research"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-12 py-4 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 border border-cyan-500/50 rounded-full group-hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(0,247,255,0.2)]" />
          <span className={`${conthrax} relative text-[10px] tracking-[0.4em] text-cyan-400 group-hover:text-white transition-colors`}>
            SYSTEM PORTAL
          </span>
        </motion.a>
      </section>

      {/* FOOTER SYSTEM STATUS */}
      <div className="pb-20">
         <p className={`${conthrax} text-[10px] tracking-[1.2em] text-white/10 uppercase`}>
           Integrated Division Protocol • K-1000
         </p>
      </div>
    </div>
  );
}