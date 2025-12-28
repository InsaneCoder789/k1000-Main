"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import dynamic from "next/dynamic";

type Props = {
  page: string;
  onClose: () => void;
};

const pageMap: Record<string, any> = {
  home: dynamic(() => import("@/app/Sections/home/homepage")),
  about: dynamic(() => import("@/app/Sections/about/page")),
  benefits: dynamic(() => import("@/app/Sections/benefits/BenefitsSection")),
  branches: dynamic(() => import("@/app/Sections/branches/branchpage")),
  departments: dynamic(() => import("@/app/Sections/departments/departmentpage")),
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
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.98, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0, y: 10 }}
        className="relative w-[98vw] h-[96vh] bg-[#050505]/60 border border-[#00f7ff]/20 
                   rounded-[40px] shadow-[0_0_100px_rgba(0,247,255,0.1)] overflow-hidden"
      >
        {/* 1. CUSTOM SCROLLBAR STYLING */}
        <style jsx global>{`
          .custom-scroll::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scroll::-webkit-scrollbar-track {
            background: rgba(0, 247, 255, 0.02);
            margin: 40px 0; /* Keeps scrollbar away from the rounded corners */
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: rgba(0, 247, 255, 0.3);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 247, 255, 0.2);
          }
          .custom-scroll::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 247, 255, 0.6);
          }
        `}</style>

        {/* 2. GRADIENT MASKING (Fades content at top/bottom) */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none opacity-90" />

        {/* 3. SCROLLABLE CONTENT AREA */}
        <div className="w-full h-full overflow-y-auto custom-scroll p-8 md:p-16 pb-40 relative">
          {PageComponent ? <PageComponent /> : (
            <div className="h-full flex items-center justify-center">
                <p className="text-[#00f7ff] tracking-widest animate-pulse font-mono">ERROR: MODULE_NOT_FOUND</p>
            </div>
          )}
        </div>

        {/* 4. FLOATING CLOSE BUTTON */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[310]">
          <motion.button
            onClick={onClose}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(0, 247, 255, 0.15)",
              borderColor: "#00f7ff" 
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-10 py-3 rounded-full border border-[#00f7ff]/40 
                       bg-black/80 backdrop-blur-xl shadow-[0_0_30px_rgba(0,247,255,0.3)] 
                       transition-all group pointer-events-auto"
          >
            <X className="w-4 h-4 text-[#00f7ff] group-hover:rotate-90 transition-transform duration-300" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#00f7ff] font-black">
              Close
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}