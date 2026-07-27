"use client";

import { motion } from "framer-motion";

export default function FooterBackground() {
  return (
    <>
      {/* Floating Glass Panel */}
      <div className="absolute inset-6 md:inset-8 lg:inset-10 overflow-hidden rounded-[40px] border border-white/[0.08] bg-white/[0.035] backdrop-blur-3xl">
        {/* Glass Tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-violet-500/[0.05]" />

        {/* Top Reflection */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent" />

        {/* Inner Glow */}
        <motion.div
          animate={{
            opacity: [0.2, 0.45, 0.2],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.06]
            blur-[140px]
          "
        />

        {/* Corner Lights */}
        <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-[90px]" />
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-violet-400/10 blur-[90px]" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-violet-400/10 blur-[90px]" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-[90px]" />

        {/* Bottom Ambient Light */}
        <div className="absolute bottom-0 left-1/2 h-52 w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/5 via-violet-500/10 to-cyan-500/5 blur-[100px]" />

        {/* Inner Border */}
        <div className="absolute inset-[1px] rounded-[39px] border border-white/[0.04]" />
      </div>

      {/* Background Shadow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-12 rounded-[44px] bg-black/40 blur-3xl" />
      </div>
    </>
  );
}