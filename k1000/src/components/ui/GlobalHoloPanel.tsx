"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import dynamic from "next/dynamic";

type Props = {
  page: string;
  onClose: () => void;
};

/** 🔥 Map nav names -> actual pages */
const pageMap: Record<string, any> = {
  home: dynamic(() => import("@/app/Sections/home/page")),
  about: dynamic(() => import("@/app/Sections/about/page")),
  benefits: dynamic(() => import("@/app/Sections/benefits/page")),
  branches: dynamic(() => import("@/app/Sections/branches/page")),
  departments: dynamic(() => import("@/app/Sections/departments/page")),
  events: dynamic(() => import("@/app/Sections/events/page")),
  apply: dynamic(() => import("@/app/Sections/apply/page")),
  contact: dynamic(() => import("@/app/Sections/contact/page")),
};

export default function GlobalHoloPanel({ page, onClose }: Props) {
  const PageComponent = pageMap[page];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 z-[99] pointer-events-auto"
    >
      {/* DARK BACKDROP */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />

      {/* FULL SCREEN GLASS PANEL */}
      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 20 }}
        className="absolute inset-0 m-auto w-[95vw] h-[92vh]
                   bg-white/[0.05] border border-white/20
                   rounded-3xl backdrop-blur-2xl
                   shadow-[0_0_120px_rgba(0,200,255,0.25)]
                   overflow-hidden"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-12 h-12 rounded-full
                     bg-white/10 hover:bg-white/20 transition
                     flex items-center justify-center"
        >
          <X className="text-white" />
        </button>

        {/* LOAD PAGE HERE */}
        <div className="w-full h-full overflow-y-auto p-10">
          {PageComponent ? <PageComponent /> : (
            <p className="text-white/60">⚠️ Page not found.</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
