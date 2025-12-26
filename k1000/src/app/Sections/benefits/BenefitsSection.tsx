"use client";

import GlassPanel from "@/components/ui/Glasspanel";
import { motion } from "framer-motion";
import { benefits } from "@/data/data.json";

// Lucide icons
import {
  Rocket,
  FileText,
  BookOpen,
  Star,
  Award,
  Globe,
  Lightbulb,
  Users,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Rocket,
  FileText,
  BookOpen,
  Star,
  Award,
  Globe,
  Lightbulb,
  Users,
};

export default function BenefitsSection() {
  return (
    <section className="py-8 flex justify-center px-4">
      <GlassPanel
        accent="#22e2ff"
        className="
          w-full max-w-[900px] 
          p-10 rounded-[28px]
          bg-black/20 backdrop-blur-[12px]
          border border-cyan-300/20
          shadow-[0_0_60px_rgba(0,255,255,0.15)]
        "
      >
        {/* TITLE */}
        <h2
          className="
            text-center font-[Orbitron]
            text-4xl tracking-[0.22em]
            text-cyan-300 mb-10
          "
        >
          BENEFITS & PERKS
        </h2>

        {/* BENEFIT CARDS */}
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((b, i) => {
            const Icon = iconMap[b.icon] || Lightbulb;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="
                  flex items-start gap-4
                  bg-white/5 border border-white/10
                  p-6 rounded-xl
                  hover:bg-white/10
                  transition shadow-[0_0_20px_rgba(0,255,255,0.12)]
                "
              >
                {/* ICON */}
                <div className="p-3 rounded-lg bg-cyan-400/10 border border-cyan-300/30 flex-shrink-0">
                  <Icon className="w-6 h-6 text-cyan-300" />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 font-[Orbitron]">
                    {b.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER / MOTTO */}
        <p className="text-center text-white/40 mt-10 text-[11px] font-[Orbitron] tracking-[0.4em]">
          TRAIN • TRANSFORM • TRANSCEND
        </p>
      </GlassPanel>
    </section>
  );
}