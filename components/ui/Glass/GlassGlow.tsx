"use client";

import { motion } from "framer-motion";

export function GlassGlow() {
  return (
    <>
      {/* Primary Glow */}
      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [-10, 15, -10],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-24
          top-1/2
          h-72
          w-72
          -translate-y-1/2
          rounded-full
          bg-violet-500/12
          blur-[120px]
        "
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          x: [20, -20, 20],
          y: [15, -10, 15],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-24
          top-1/2
          h-80
          w-80
          -translate-y-1/2
          rounded-full
          bg-cyan-200/10
          blur-[140px]
        "
      />

      {/* Center Accent */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-44
          w-44
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-800
          blur-[90px]
        "
      />
    </>
  );
}