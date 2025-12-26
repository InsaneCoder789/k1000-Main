"use client";

import GlassPanel from "@/components/ui/Glasspanel";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 flex justify-center">
      <GlassPanel accent="#22e2ff">
        <motion.h2
          className="text-center text-4xl tracking-[0.2em] text-cyan-300 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          ABOUT K-1000
        </motion.h2>

        <img
          src="/Hero Section/hero-1.jpg"
          className="rounded-2xl w-full h-[280px] object-cover opacity-80 shadow-lg"
        />

        <p className="text-white/80 text-[15px] leading-relaxed mt-10">
          <b>K-1000</b> is KIIT University's official research & development
          guild, designed to build innovators, researchers and world-class
          engineers through:
        </p>

        <ul className="text-white/70 text-sm leading-loose mt-5 pl-6 list-disc">
          <li>Hands-on engineering projects</li>
          <li>Research publications & patents</li>
          <li>Global internship & collaboration pipeline</li>
          <li>Technical & leadership skill development</li>
        </ul>
      </GlassPanel>
    </section>
  );
}
