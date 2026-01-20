"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaLaptopCode,
  FaUniversity,
  FaMicroscope,
  FaHeartbeat,
  FaGavel,
  FaDumbbell,
} from "react-icons/fa";

const conthrax = "font-['Conthrax',_sans-serif]";

const categories = [
  {
    title: "Engineering & Technology",
    id: "DEPT-ENG-01",
    icon: <FaLaptopCode />,
    schools: [
      "School of Computer Applications",
      "School of Computer Engineering",
      "School of Civil Engineering",
      "School of Electronics Engineering",
      "School of Mechanical Engineering",
      "School of Electrical Engineering",
      "School of Chemical Engineering",
    ],
  },
  {
    title: "Sciences & Applied Sciences",
    id: "DEPT-SCI-02",
    icon: <FaMicroscope />,
    schools: [
      "School of Biotechnology",
      "School of Applied Sciences",
      "School of Architecture & Planning",
    ],
  },
  {
    title: "Management & Social Sciences",
    id: "DEPT-MGMT-03",
    icon: <FaUniversity />,
    schools: [
      "School of Management",
      "School of Rural Management",
      "School of Economics & Commerce",
      "Department of Psychology",
      "Department of Sociology",
      "Department of Library and Info Science",
      "Department of Humanities (English)",
      "Department of Language & Literature",
    ],
  },
  {
    title: "Medical & Health Sciences",
    id: "DEPT-MED-04",
    icon: <FaHeartbeat />,
    schools: [
      "School of Medical Sciences",
      "School of Dental Sciences",
      "School of Nursing Sciences",
      "School of Public Health",
      "School of Pharmacy",
      "School of Physiotherapy",
      "School of Yoga & Naturopathy",
    ],
  },
  {
    title: "Law & Public Policy",
    id: "DEPT-LAW-05",
    icon: <FaGavel />,
    schools: ["School of Law", "School of Public Policy"],
  },
  {
    title: "Sports & Tourism",
    id: "DEPT-SPR-06",
    icon: <FaDumbbell />,
    schools: [
      "School of Sports and Yogic Sciences",
      "School of Hospitality and Tourism",
    ],
  },
];

export default function DepartmentsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Reset scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={ref} className="w-full min-h-screen text-white flex flex-col items-center space-y-16 md:space-y-24 py-6 md:py-10 px-4 md:px-6 bg-black overflow-x-hidden">
      
      {/* ─── HERO HEADER ─── */}
      <section className="relative w-full max-w-7xl h-[35vh] md:h-[40vh] rounded-[24px] md:rounded-[40px] overflow-hidden border border-cyan-500/20 shadow-2xl">
        <img 
          src="https://cdn.prod.website-files.com/67aa2520eb413205a7dac909/67aa3147b53442d24541b355_KIIT-University-Bhubaneswar.jpeg" 
          className="absolute inset-0 size-full object-cover brightness-[0.3]" 
          alt="KIIT Departments" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${conthrax} text-2xl sm:text-4xl md:text-7xl tracking-[0.1em] md:tracking-[0.2em] uppercase text-white leading-tight`}
          >
            KIIT <span className="text-cyan-400 drop-shadow-[0_0_15px_#00f7ff]">Departments</span>
          </motion.h1>
          <p className={`${conthrax} text-white/40 mt-4 tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-xs uppercase`}>
            Academic Infrastructure Protocol
          </p>
        </div>
      </section>

      {/* ─── CATEGORIES GRID ─── */}
      <section className="w-full max-w-7xl grid grid-cols-1 gap-12 md:gap-16">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative p-1 border-l border-cyan-500/30 pl-6 md:pl-12"
          >
            {/* Header with Icon */}
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-8 md:mb-10">
              <div className="w-fit text-2xl md:text-3xl text-cyan-400 bg-cyan-500/10 p-3 md:p-4 rounded-2xl border border-cyan-500/20">
                {category.icon}
              </div>
              <div>
                <span className={`${conthrax} text-[8px] md:text-[9px] text-cyan-500/50 tracking-[0.3em] md:tracking-[0.4em] uppercase`}>
                  {category.id}
                </span>
                <h3 className={`${conthrax} text-lg md:text-3xl text-white tracking-widest uppercase mt-1 leading-tight`}>
                  {category.title}
                </h3>
              </div>
            </div>

            {/* Schools List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {category.schools.map((school, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5, backgroundColor: "rgba(0, 247, 255, 0.05)" }}
                  className="p-3 md:p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center space-x-3 md:space-x-4 group cursor-default transition-all"
                >
                  <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:shadow-[0_0_8px_#00f7ff] transition-all" />
                  <span className="font-sans text-xs md:text-sm text-white/60 group-hover:text-white transition-colors font-light">
                    {school}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Decorative Connection Line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent opacity-20" />
          </motion.div>
        ))}
      </section>

      {/* ─── FOOTER BRANDING ─── */}
      <div className="pb-10 md:pb-20 opacity-20 text-center">
         <p className={`${conthrax} text-[8px] md:text-[10px] tracking-[0.8em] md:tracking-[1.5em] text-cyan-500 uppercase`}>
           Academic Excellence • K-1000 Verified
         </p>
      </div>
    </div>
  );
}