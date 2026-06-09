"use client";

import { motion } from "framer-motion";

export default function AICore() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Outer Ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-cyan-400/10
        "
      />

      {/* Middle Ring */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-violet-400/15
        "
      />

      {/* Inner Ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[320px]
          w-[320px]
          rounded-full
          border
          border-white/10
        "
      />

      {/* Core Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          h-[180px]
          w-[180px]
          rounded-full
          bg-gradient-to-r
          from-violet-500/30
          via-cyan-400/30
          to-violet-500/30
          blur-3xl
        "
      />

      {/* Center Orb */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          h-28
          w-28
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
        "
      />

      {/* Orbit Dot 1 */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[520px]
          w-[520px]
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-3
            w-3
            -translate-x-1/2
            rounded-full
            bg-cyan-400
            shadow-[0_0_20px_rgba(34,211,238,0.8)]
          "
        />
      </motion.div>

      {/* Orbit Dot 2 */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[420px]
          w-[420px]
        "
      >
        <div
          className="
            absolute
            right-0
            top-1/2
            h-3
            w-3
            -translate-y-1/2
            rounded-full
            bg-violet-400
            shadow-[0_0_20px_rgba(167,139,250,0.8)]
          "
        />
      </motion.div>
    </div>
  );
}