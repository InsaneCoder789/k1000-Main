"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoCharge({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* BG STARS FROM THE REAL GALAXY */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:3px_3px]" />

      {/* CORNER LOGOS (MATCH SYSTEM VIEW) */}
      <img src="/k1000-logo.png" className="absolute top-6 left-8 h-12 opacity-60" />
      <img src="/kiit-logo.png" className="absolute top-6 right-8 h-14 opacity-60" />

      {/* CHARGING LOGO */}
      <motion.div
        initial={{ scale: 0.8, filter: "brightness(0.3)" }}
        animate={{ scale: 1, filter: "brightness(1.6)" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative flex flex-col items-center"
        onAnimationComplete={() => setTimeout(onDone, 300)}
      >
        <Image
          src="/k1000-small.png"
          alt="K-1000"
          width={260}
          height={260}
          className="drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]"
          priority
        />

        {/* ENERGY BAR */}
        <motion.div
          className="w-64 h-[3px] bg-white/15 mt-6 overflow-hidden rounded-full"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-cyan-300 rounded-full shadow-[0_0_10px_#00eaff]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
