"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { leadership } from "@/data/leadership";

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<null | number>(null);

  const board = [
    {
      name: "Prof. Dr. Saranjit Singh",
      position: "Vice Chancellor",
      image: "/about/member-1.jpg",
      description: "Prof. (Dr.) Saranjit Singh holds a Ph.D. from BIT Mesra and M.Tech. from IIT Varanasi. His expertise spans composites, innovation ecosystems and academic leadership.",
    },
    {
      name: "Prof. Dr. Jnyana Ranjan Mohanty",
      position: "Registrar",
      image: "/about/member-2.jpg",
      description: "28+ years in research, academic development & innovation. Registrar of KIIT University; author, conference chair & mentor to Ph.D scholars.",
    },
    {
      name: "Dr. Ajit Kumar Pasayat",
      position: "Faculty Incharge",
      image: "/about/member-3.jpg",
      description: "Ph.D & M.Tech from IIT Kharagpur. Research in AI/ML, Data Analytics & Cognitive Systems. Reviewer and innovation leader at KIIT.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center space-y-32 py-10 font-sans">
      
      {/* ─── SECTION 1: KIIT HERO (Object Cover) ─── */}
      <section className="relative w-full h-[55vh] rounded-[40px] overflow-hidden border border-cyan-500/20 shadow-2xl">
        <img 
          src="/about/KIIT.jpg" 
          className="absolute inset-0 size-full object-cover brightness-[0.45]" 
          alt="KIIT Campus" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-[Orbitron] tracking-[0.25em] text-white"
          >
            ABOUT <span className="text-cyan-400 drop-shadow-[0_0_15px_#00f7ff]">KIIT</span>
          </motion.h1>
          <p className="text-white/50 mt-4 font-[Orbitron] tracking-[0.5em] text-xs uppercase">Vision • Innovation • Excellence</p>
        </div>
      </section>

      {/* ─── SECTION 2: OUR FOUNDER (Object Cover) ─── */}
      <section className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-center px-6">
        <motion.div whileHover={{ scale: 1.02 }} className="relative group">
          <div className="absolute -inset-4 bg-cyan-500/10 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative h-[500px] w-full rounded-[40px] border border-cyan-500/20 overflow-hidden shadow-2xl">
            <img
              src="/about/Founder.png"
              className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              alt="Founder"
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-[Orbitron] text-white uppercase tracking-tighter">
            Our <span className="text-cyan-400">Founder</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 shadow-[0_0_15px_#00f7ff]" />
          <p className="text-xl text-white/70 font-light leading-relaxed tracking-wide">
            <span className="text-cyan-400 font-[Orbitron] block mb-3 text-lg tracking-widest uppercase">Prof. Dr. Achyuta Samanta</span>
            Starting with just Rs 5000, he built a global legacy. His journey from poverty to the pinnacle of education serves as the heartbeat of KIIT's mission to transform lives through knowledge.
          </p>
        </div>
      </section>

      {/* ─── SECTION 3: BOARD MEMBERS (3-Column / Object Cover) ─── */}
      <section className="w-full max-w-[1200px] px-6">
        <h2 className="text-center text-4xl md:text-5xl font-[Orbitron] tracking-[0.35em] text-cyan-400 mb-24 uppercase">
          Board Members
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {board.map((m, i) => (
            <div key={i} className="flex flex-col items-center">
               <motion.div
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedMember(selectedMember === i ? null : i)}
                  className="cursor-pointer group flex flex-col items-center"
                >
                  <div className="w-[260px] aspect-square rounded-full overflow-hidden border-2 border-cyan-500/20 group-hover:border-cyan-400 transition-all duration-500 shadow-2xl">
                    <img src={m.image} className="size-full object-cover object-top" />
                  </div>
                  <h3 className="text-xl font-[Orbitron] text-white mt-8 tracking-wider">{m.name}</h3>
                  <p className="text-cyan-500/60 text-[10px] font-[Orbitron] uppercase mt-2 tracking-[0.3em] group-hover:text-cyan-400">{m.position}</p>
                </motion.div>

                <AnimatePresence>
                  {selectedMember === i && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 p-6 bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-md rounded-3xl max-w-[280px] text-center"
                    >
                      <p className="text-white/60 text-sm italic font-light leading-relaxed">
                        {m.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 4: CORE TEAM (Hierarchy / Object Cover) ─── */}
      <section className="w-full max-w-[1300px] px-6">
        <h2 className="text-center text-5xl md:text-6xl font-[Orbitron] mb-28 text-white uppercase">
          Core <span className="text-cyan-400">Team</span>
        </h2>

        {leadership.hierarchy.map((grp, gi) => {
          const isExecutive = grp.title.toLowerCase().includes("executive");
          const gridClass = isExecutive ? "md:grid-cols-2 max-w-[850px]" : "md:grid-cols-3 max-w-[1200px]";

          return (
            <div key={gi} className="w-full flex flex-col items-center mb-44">
              <h3 className="text-2xl md:text-3xl font-[Orbitron] mb-20 text-white/80 border-b border-cyan-500/10 pb-4 px-16 tracking-[0.5em] uppercase">
                {grp.title}
              </h3>

              <div className={`grid grid-cols-1 ${gridClass} gap-x-20 gap-y-28 w-full justify-items-center`}>
                {grp.members.map((m, mi) => (
                  <motion.div 
                    key={mi} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-56 h-56 rounded-full p-1 border-2 border-white/5 group-hover:border-cyan-500 transition-all duration-500 overflow-hidden mb-8 shadow-xl">
                      <img
                        src={m.image}
                        className="size-full rounded-full object-cover object-top brightness-90 group-hover:brightness-100 transition-all"
                        alt={m.name}
                      />
                    </div>
                    <h4 className="text-xl font-[Orbitron] text-white tracking-wide">{m.name}</h4>
                    <p className="text-cyan-400 text-[15px] font-[Orbitron] tracking-[0.4em] mt-2 uppercase">{m.position}</p>
                    {m.branch && (
                      <p className="text-white/30 text-[20px] font-mono mt-1 uppercase tracking-tighter">{m.branch}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Footer System Status */}
      <div className="pb-20">
         <p className="text-[10px] font-[Orbitron] tracking-[1.5em] text-cyan-500/20 uppercase">
           Train • Transform • Transcend
         </p>
      </div>
    </div>
  );
}