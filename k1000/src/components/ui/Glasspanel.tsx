"use client";
import { motion } from "framer-motion";

export default function GlassPanel({
  children,
  accent = "#00eaff",
  width = "85vw",
}: {
  children: React.ReactNode;
  accent?: string;
  width?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="
        relative p-10 rounded-3xl mx-auto
        bg-white/10 backdrop-blur-xl border border-white/20
        shadow-[0_0_80px_rgba(0,200,255,0.2)]
        overflow-hidden
      "
      style={{
        width,
        borderColor: accent,
        boxShadow: `0 0 120px ${accent}33`,
      }}
    >
      <img
        src="/k1000-small.png"
        className="absolute inset-0 m-auto w-[420px] opacity-[0.04] pointer-events-none"
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
