"use client";

import GlassPanel from "@/components/ui/Glasspanel";
import { benefits } from "/Users/rohanc/K1000/k1000/public/data.json";

export default function BenefitsSection() {
  return (
    <section className="py-20 flex justify-center">
      <GlassPanel accent="#b473ff" width="90vw">
        <h2 className="text-center text-3xl mb-12 text-purple-300 tracking-[0.2em]">
          BENEFITS & PERKS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white border border-white/20 hover:bg-white/20 transition"
            >
              <h3 className="text-cyan-300 text-xl mb-3">{b.title}</h3>
              <p className="text-white/70 text-sm">{b.description}</p>
            </div>
          ))}
        </div>
      </GlassPanel>
    </section>
  );
}
