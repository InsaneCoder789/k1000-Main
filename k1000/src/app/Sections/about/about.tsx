"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { leadership } from "@/data/leadership";

// Original Blue Palette: 
// Cyan-Blue: #00f7ff / Deep Blue: #00E5FF
const conthrax = "font-['Conthrax',_sans-serif]";

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedMember]);

  const board = [
    {
      id: "vc-1",
      name: "Prof. Dr. Saranjit Singh",
      position: "Vice Chancellor",
      image: "/about/member-1.jpg",
      description: "Prof. (Dr.) Saranjit Singh received his Ph.D. in Production Engineering from BIT Mesra, M.Tech. from IIT Varanasi (formerly IT-BHU), and B.E. in Mechanical Engineering from Savitribai Phule Pune University. With extensive teaching and research experience, his interests span material processing technologies, metal forming of advanced materials like sintered and foam composites, cleaner manufacturing, DFX methodologies, and quality management.",
    },
    {
      id: "reg-2",
      name: "Prof. Dr. Jnyana Ranjan Mohanty",
      position: "Registrar",
      image: "/about/member-2.jpg",
      description: "With over 28 years of rich experience in research, academic development, and innovation, Prof. Mohanty serves as the Registrar of KIIT University. He has been instrumental in shaping the university's administrative framework and innovation ecosystem.",
    },
    {
      id: "fi-3",
      name: "Dr. Ajit Kumar Pasayat",
      position: "Faculty Incharge",
      image: "/about/member-3.jpg",
      description: "Holding a Ph.D. and M.Tech. from IIT Kharagpur, Dr. Pasayat is a specialist in AI/ML, Data Analytics, and Cognitive Systems. As the Faculty Incharge, he bridges the gap between theoretical research and industrial application.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center space-y-16 md:space-y-40 py-6 md:py-10 font-sans bg-black overflow-x-hidden">

      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative w-[92%] md:w-[95%] h-[50vh] md:h-[60vh] rounded-[24px] md:rounded-[40px] overflow-hidden border border-cyan-500/20 mx-auto shadow-[0_0_50px_rgba(0,247,255,0.1)]">
        <img 
          src="/about/KIIT.jpg" 
          className="absolute inset-0 size-full object-cover brightness-[0.3]" 
          alt="KIIT" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className={`${conthrax} text-5xl sm:text-6xl md:text-8xl tracking-tighter text-white uppercase flex flex-col md:block`}
          >
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f7ff] to-[#00E5FF] drop-shadow-[0_0_15px_rgba(0,247,255,0.5)]">K1000</span>
          </motion.h1>
          <p className={`${conthrax} text-cyan-400/50 mt-4 tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-sm uppercase`}>
            Vision • Innovation • Excellence
          </p>
        </div>
      </section>

      {/* ─── SECTION 2: FOUNDER ─── */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center px-6">
        <div className="relative w-full aspect-[4/5] md:h-[550px] md:aspect-auto rounded-[32px] md:rounded-[48px] overflow-hidden bg-[#050505]">
          <img
            src="/about/Founder.png"
            className="size-full object-cover object-top md:object-center"
            alt="Founder"
          />
        </div>
        <div className="space-y-6 text-center md:text-left">
          <h2 className={`${conthrax} text-3xl md:text-6xl text-white uppercase tracking-tighter`}>
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f7ff] to-[#00E5FF]">Founder</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#00f7ff] to-[#00E5FF] shadow-[0_0_15px_#00f7ff] mx-auto md:mx-0" />
          <div className="space-y-4">
            <span className={`${conthrax} text-cyan-400 block text-base md:text-lg tracking-widest uppercase`}>
              Prof. Dr. Achyuta Samanta
            </span>
            <p className="text-sm md:text-xl text-white/70 font-light leading-relaxed">
              Starting with just Rs 5000, he built a global legacy. His journey from poverty to the pinnacle of education serves as the heartbeat of KIIT's mission to transform lives through knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: BOARD MEMBERS ─── */}
      <section className="w-full max-w-[1400px] px-6">
        <h2 className={`${conthrax} text-center text-2xl md:text-5xl tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#00f7ff] to-[#00E5FF] mb-12 md:mb-16 uppercase`}>
          Board Members
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          {board.map((m) => (
            <motion.div
              key={m.id}
              onClick={() => setSelectedMember(m)}
              whileHover={{ y: -10 }}
              className="cursor-pointer flex flex-col items-center w-full max-w-[320px] group"
            >
              <div className="w-full aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 bg-[#0a0a0a] group-hover:border-cyan-500/50 transition-all duration-300 shadow-2xl">
                <img 
                  src={m.image} 
                  className="size-full object-cover object-top transition-all duration-500 group-hover:scale-105" 
                  alt={m.name}
                />
              </div>
              <h3 className={`${conthrax} text-base md:text-lg text-white mt-6 text-center tracking-wide leading-tight group-hover:text-cyan-400 transition-colors`}>
                {m.name}
              </h3>
              <p className={`${conthrax} text-blue-400/60 text-[9px] md:text-[10px] uppercase mt-2 tracking-widest`}>
                {m.position}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedMember && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMember(null)}
                className="absolute inset-0 bg-black/98 backdrop-blur-md cursor-pointer"
              />
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={() => setSelectedMember(null)}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-[900px] max-h-[90vh] bg-[#050505] border border-cyan-500/30 rounded-[32px] md:rounded-[40px] overflow-y-auto md:overflow-hidden shadow-[0_0_100px_rgba(0,247,255,0.2)] flex flex-col md:flex-row cursor-pointer will-change-transform"
              >
                <div className="w-full md:w-[45%] h-[350px] md:h-auto overflow-hidden">
                  <img src={selectedMember.image} className="size-full object-cover object-top" alt={selectedMember.name} />
                </div>
                <div className="flex-1 p-6 md:p-12 flex flex-col justify-center space-y-4 md:space-y-6">
                  <div>
                    <h3 className={`${conthrax} text-xl md:text-3xl text-white leading-tight`}>{selectedMember.name}</h3>
                    <p className={`${conthrax} text-transparent bg-clip-text bg-gradient-to-r from-[#00f7ff] to-[#00E5FF] text-[10px] md:text-xs mt-2 tracking-widest uppercase font-bold`}>{selectedMember.position}</p>
                  </div>
                  <div className="h-px w-16 md:w-20 bg-gradient-to-r from-cyan-500 to-blue-500" />
                  <p className="text-white/70 text-sm md:text-base leading-relaxed font-light text-justify">
                    {selectedMember.description}
                  </p>
                  <p className={`${conthrax} text-[8px] md:text-[9px] text-white/20 uppercase tracking-[0.4em] text-center pt-2`}>Tap to close</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* ─── SECTION 4: CORE TEAM ─── */}
      <section className="w-full max-w-[1400px] px-4 md:px-6">
        <h2 className={`${conthrax} text-center text-4xl md:text-8xl mb-16 md:mb-32 text-white uppercase tracking-tighter`}>
          CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f7ff] to-[#00E5FF]">TEAM</span>
        </h2>

        {leadership.hierarchy.map((grp, gi) => (
          <div key={gi} className="w-full flex flex-col items-center mb-24 md:mb-40">
            <h3 className={`${conthrax} text-base md:text-2xl lg:text-3xl mb-12 md:mb-16 text-white/90 border-b border-cyan-500/20 pb-3 px-6 md:px-10 tracking-[0.2em] uppercase text-center`}>
              {grp.title}
            </h3>

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${grp.title.toLowerCase().includes("executive") ? "lg:grid-cols-2 max-w-[900px]" : "lg:grid-cols-3 max-w-[1300px]"} gap-10 md:gap-14 w-full`}>
              {grp.members.map((m, mi) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  key={mi} 
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-[32px] md:rounded-[48px] overflow-hidden border-2 border-white/5 group-hover:border-cyan-400 transition-all duration-500 shadow-2xl bg-[#0a0a0a]">
                    <img 
                      src={m.image} 
                      className="size-full object-cover object-top brightness-90 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700" 
                      alt={m.name} 
                    />
                  </div>

                  <div className="mt-6 md:mt-8 space-y-2">
                    <h4 className={`${conthrax} text-sm md:text-lg lg:text-xl text-white tracking-wide leading-tight px-2 group-hover:text-blue-400 transition-colors`}>{m.name}</h4>
                    <p className={`${conthrax} text-transparent bg-clip-text bg-gradient-to-r from-[#00f7ff] to-[#00E5FF] text-[9px] md:text-xs tracking-widest uppercase font-bold`}>
                      {m.position}
                    </p>
                    {m.branch && (
                      <p className={`${conthrax} text-white/30 text-[8px] md:text-[9px] uppercase tracking-widest`}>
                        {m.branch}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="pb-16 text-center px-4">
        <p className={`${conthrax} text-[8px] md:text-[10px] tracking-[0.5em] md:tracking-[1.5em] text-cyan-500/20 uppercase`}>
          Train • Transform • Transcend
        </p>
      </div>
    </div>
  );
}