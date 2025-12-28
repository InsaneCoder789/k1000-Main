"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { X, Shield, Award, BookOpen, Cpu } from "lucide-react";
import { leadership } from "@/data/leadership";

const conthrax = "font-['Conthrax',_sans-serif]";

export default function AboutPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const board = [
    {
      id: "vc-1",
      name: "Prof. Dr. Saranjit Singh",
      position: "Vice Chancellor",
      image: "/about/member-1.jpg",
      description: "Prof. (Dr.) Saranjit Singh received his Ph.D. in Production Engineering from BIT Mesra, M.Tech. from IIT Varanasi (formerly IT-BHU), and B.E. in Mechanical Engineering from Savitribai Phule Pune University. With extensive teaching and research experience, his interests span material processing technologies, metal forming of advanced materials like sintered and foam composites, cleaner manufacturing, DFX methodologies, and quality management. At KIIT, he has held several senior administrative roles, including Dean (Training & Placements), Director (Industry Engagements), and Dean of the School of Mechanical Engineering.",
    },
    {
      id: "reg-2",
      name: "Prof. Dr. Jnyana Ranjan Mohanty",
      position: "Registrar",
      image: "/about/member-2.jpg",
      description: "With over 28 years of rich experience in research, academic development, and innovation, Prof. Mohanty serves as the Registrar of KIIT University. He has been instrumental in shaping the university's administrative framework and innovation ecosystem. An accomplished author and conference chair, he has mentored numerous Ph.D. scholars and continues to lead strategic academic initiatives that position KIIT at the forefront of global education standards.",
    },
    {
      id: "fi-3",
      name: "Dr. Ajit Kumar Pasayat",
      position: "Faculty Incharge",
      image: "/about/member-3.jpg",
      description: "Holding a Ph.D. and M.Tech. from IIT Kharagpur, Dr. Pasayat is a specialist in AI/ML, Data Analytics, and Cognitive Systems. As the Faculty Incharge, he bridges the gap between theoretical research and industrial application. His role involves overseeing high-impact innovation projects and serving as a key reviewer for technical advancements within the K-1000 guild, ensuring KIIT remains a hub for cutting-edge technological mastery.",
    },
  ];

  const activeMember = board.find((m) => m.id === selectedId);

  return (
    <div className="w-full flex flex-col items-center space-y-32 py-10 font-sans bg-black overflow-x-hidden">
      
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative w-full h-[55vh] rounded-[40px] overflow-hidden border border-cyan-500/20 shadow-2xl">
        <img src="/about/KIIT.jpg" className="absolute inset-0 size-full object-cover brightness-[0.45]" alt="KIIT Campus" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
          <motion.h1 className={`${conthrax} text-5xl md:text-7xl tracking-[0.25em] text-white uppercase`}>
            ABOUT <span className="text-cyan-400 drop-shadow-[0_0_15px_#00f7ff]">KIIT</span>
          </motion.h1>
          <p className="text-white/50 mt-4 font-[Orbitron] tracking-[0.5em] text-xs uppercase">Vision • Innovation • Excellence</p>
        </div>
      </section>

      {/* ─── SECTION 2: OUR FOUNDER (RESTORED) ─── */}
      <section className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-center px-6">
        <motion.div whileHover={{ scale: 1.02 }} className="relative h-[500px] rounded-[40px] border border-cyan-500/20 overflow-hidden shadow-2xl">
          <img 
            src="/about/Founder.png" 
            className="size-full object-cover object-[center_25%] transition-transform duration-700 hover:scale-105" 
            alt="Founder" 
          />
        </motion.div>
        <div className="space-y-8">
          <h2 className={`${conthrax} text-4xl md:text-6xl text-white uppercase tracking-tighter`}>
            Our <span className="text-cyan-400">Founder</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 shadow-[0_0_15px_#00f7ff]" />
          <div className="space-y-4">
            <span className={`${conthrax} text-cyan-400 block text-lg tracking-widest uppercase`}>Prof. Dr. Achyuta Samanta</span>
            <p className="text-xl text-white/70 font-light leading-relaxed tracking-wide">
              Starting with just Rs 5000, he built a global legacy. His journey from poverty to the pinnacle of education serves as the heartbeat of KIIT's mission to transform lives through knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: BOARD MEMBERS (Morphing Cards) ─── */}
      <section className="w-full max-w-[1200px] px-6">
        <h2 className={`${conthrax} text-center text-4xl md:text-5xl tracking-[0.3em] text-cyan-400 mb-20 uppercase`}>
          Board Members
        </h2>

        <LayoutGroup>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
            {board.map((m) => (
              <motion.div
                layoutId={m.id}
                key={m.id}
                onClick={() => setSelectedId(m.id)}
                className="group cursor-pointer flex flex-col items-center w-full max-w-[300px]"
              >
                <motion.div 
                   layoutId={`img-${m.id}`}
                   className="w-full aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-colors bg-[#0a0a0a]"
                >
                  <img 
                    src={m.image} 
                    className="size-full object-cover object-[center_25%] brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" 
                    alt={m.name} 
                  />
                </motion.div>
                <motion.h3 layoutId={`name-${m.id}`} className={`${conthrax} text-lg text-white mt-6 text-center leading-tight`}>{m.name}</motion.h3>
                <motion.p layoutId={`pos-${m.id}`} className="text-cyan-500/60 text-[9px] font-[Orbitron] uppercase mt-2 tracking-[0.3em]">{m.position}</motion.p>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedId && activeMember && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={() => setSelectedId(null)}
                  className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[150] cursor-zoom-out"
                />

                <div className="fixed inset-0 z-[160] flex items-center justify-center p-4 pointer-events-none">
                  <motion.div 
                    layoutId={selectedId}
                    className="w-full max-w-[1100px] bg-[#050505] border border-white/10 rounded-[48px] overflow-hidden pointer-events-auto shadow-2xl flex flex-col md:flex-row relative"
                  >
                    <button 
                      onClick={() => setSelectedId(null)}
                      className="absolute top-8 right-8 text-white/20 hover:text-white z-50 transition-colors p-2"
                    >
                      <X size={32} />
                    </button>

                    <motion.div layoutId={`img-${selectedId}`} className="w-full md:w-[40%] h-[400px] md:h-auto overflow-hidden">
                      <img src={activeMember.image} className="size-full object-cover object-[center_25%]" />
                    </motion.div>

                    <div className="flex-1 p-10 md:p-16 flex flex-col justify-center space-y-8 relative">
                      <div className="space-y-2">
                        <motion.h3 layoutId={`name-${selectedId}`} className={`${conthrax} text-3xl md:text-4xl text-white tracking-tight`}>
                          {activeMember.name}
                        </motion.h3>
                        <motion.p layoutId={`pos-${selectedId}`} className="text-cyan-400 font-[Orbitron] text-xs uppercase tracking-[0.4em] font-bold">
                          {activeMember.position}
                        </motion.p>
                      </div>

                      <div className="h-px w-20 bg-cyan-500/40" />

                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white/60 text-base md:text-lg leading-relaxed font-light text-justify"
                      >
                        {activeMember.description}
                      </motion.p>

                      <div className="absolute bottom-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                        <Cpu size={250} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </section>

      {/* ─── SECTION 4: CORE TEAM ─── */}
      <section className="w-full max-w-[1300px] px-6">
        <h2 className={`${conthrax} text-center text-5xl md:text-6xl mb-28 text-white uppercase`}>
          Core <span className="text-cyan-400">Team</span>
        </h2>

        {leadership.hierarchy.map((grp, gi) => {
          const isExecutive = grp.title.toLowerCase().includes("executive");
          const gridClass = isExecutive ? "md:grid-cols-2 max-w-[850px]" : "md:grid-cols-3 max-w-[1200px]";

          return (
            <div key={gi} className="w-full flex flex-col items-center mb-44">
              <h3 className={`${conthrax} text-2xl md:text-3xl mb-20 text-white/80 border-b border-cyan-500/10 pb-4 px-16 tracking-[0.4em] uppercase`}>
                {grp.title}
              </h3>

              <div className={`grid grid-cols-1 ${gridClass} gap-x-20 gap-y-28 w-full justify-items-center`}>
                {grp.members.map((m, mi) => (
                  <motion.div key={mi} className="flex flex-col items-center text-center group">
                    <div className="w-52 h-52 rounded-full p-1 border-2 border-white/5 group-hover:border-cyan-500 transition-all duration-500 overflow-hidden mb-8 shadow-xl">
                      <img src={m.image} className="size-full rounded-full object-cover object-[center_25%]" alt={m.name} />
                    </div>
                    <h4 className={`${conthrax} text-lg text-white tracking-wide`}>{m.name}</h4>
                    <p className="text-cyan-400 text-[12px] font-[Orbitron] tracking-[0.3em] mt-2 uppercase font-bold">{m.position}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <div className="pb-20">
         <p className="text-[10px] font-[Orbitron] tracking-[1.5em] text-cyan-500/20 uppercase">
           Train • Transform • Transcend
         </p>
      </div>
    </div>
  );
}