"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "> INITIALIZING K-1000 OS",
  "> MEMORY BLOCK 87A ONLINE",
  "> QUANTUM ROUTINES SYNCHRONIZED",
  "> DOMAIN SYSTEMS SECURED",
  "> BOOT SEQUENCE VERIFIED ✓"
];

export default function BootTerminal({ onDone }: { onDone: () => void }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < lines.length - 1) {
      const next = setTimeout(() => setIdx(idx + 1), 500);
      return () => clearTimeout(next);
    }
    setTimeout(onDone, 900); // go to next phase
  }, [idx]);

  return (
    <motion.div
      className="fixed top-5 left-8 text-[12px] font-mono text-[#00ff95] z-[9999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {lines.slice(0, idx + 1).map((l, i) => (
        <div key={i} className="leading-relaxed">{l}</div>
      ))}
    </motion.div>
  );
}
