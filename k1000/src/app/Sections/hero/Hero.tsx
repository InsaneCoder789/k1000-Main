"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="/Hero Section/hero-bg.mp4"
      />

      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 bg-white/[0.04] px-14 py-10 rounded-3xl border border-white/10
        backdrop-blur-2xl text-center max-w-3xl shadow-[0_0_40px_rgba(0,255,255,0.25)]"
      >
        <p className="text-cyan-300 tracking-[0.4em] uppercase text-sm">
          KIIT's Elite Engineering Guild
        </p>

        <h1 className="text-5xl text-white font-[Orbitron] tracking-widest mt-4">
          <span className="text-cyan-300">K-1000</span> Program
        </h1>

        <p className="text-white/80 mt-4">
          Train • Transform • Transcend
        </p>
      </motion.div>
    </div>
  );
}
