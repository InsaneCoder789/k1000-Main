"use client";

import GlassPanel from "@/components/ui/Glasspanel";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 flex justify-center">
      <GlassPanel
        accent="#22e2ff"
        className="
          w-full max-w-[900px]
          px-12 py-14 rounded-[28px]
          border border-cyan-300/20
          shadow-[0_0_60px_rgba(0,255,255,0.15)]
          bg-black/20 backdrop-blur-[12px]
        "
      >
        {/* 🔹 Title */}
        <motion.h2
          className="
            text-center font-[Orbitron]
            text-4xl tracking-[0.25em]
            text-cyan-300 mb-10
            drop-shadow-[0_0_12px_rgba(0,255,255,0.45)]
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ABOUT K-1000
        </motion.h2>

        {/* 🔹 Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mb-10"
        >
          <img
            src="/hero/hero-1.jpg"
            className="
              w-full max-h-[280px] object-cover rounded-2xl
              border border-white/10
              shadow-[0_0_40px_rgba(0,255,255,0.25)]
            "
          />
        </motion.div>

        {/* 🔹 Body */}
        <p
          className="
            text-white/85 text-[15px]
            leading-relaxed mb-8
          "
        >
          <span className="text-cyan-300 font-[Orbitron] tracking-wide">
            K-1000
          </span>{" "}
          is KIIT University’s official Research & Development guild — dedicated
          to shaping future engineers, researchers, and innovators through
          real-world engineering exposure, mentorship, funded projects,
          state-of-the-art labs, and global opportunities.
        </p>

        {/* 🔹 Foundation List */}
        <h3
          className="
            text-cyan-300 font-[Orbitron]
            tracking-[0.25em]
            text-sm uppercase mb-3
          "
        >
          OUR FOUNDATION
        </h3>

        <ul className="space-y-3 text-white/75 text-[14px] pl-2">
          <li>• Hands-on engineering projects & innovation challenges</li>
          <li>• Research publications, patents & global recognition</li>
          <li>• International internship & industry collaboration pipeline</li>
          <li>• Leadership development & technical mastery pathways</li>
        </ul>

        {/* 🔹 Motto */}
        <p className="text-center text-white/40 mt-10 text-[11px] font-[Orbitron] tracking-[0.4em]">
          TRAIN • TRANSFORM • TRANSCEND
        </p>
      </GlassPanel>
    </section>
  );
}