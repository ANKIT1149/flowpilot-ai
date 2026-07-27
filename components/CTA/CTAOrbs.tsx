"use client";

import { motion } from "framer-motion";

export function CTAOrb() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex h-40 w-40 items-center justify-center"
    >
      {/* Outer Glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          rounded-full
          bg-cyan-500/20
          blur-[70px]
        "
      />

      {/* Rotating Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          rounded-full
          border
          border-cyan-400/20
        "
      />

      {/* Second Ring */}

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
          inset-3
          rounded-full
          border
          border-cyan-300/10
        "
      />

      {/* Core */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-gradient-to-br
          from-cyan-400/20
          via-cyan-500/10
          to-blue-500/20
          backdrop-blur-3xl
          shadow-[0_0_80px_rgba(34,211,238,.35)]
        "
      >
        {/* Center Dot */}

        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
          }}
          className="h-4 w-4 rounded-full bg-cyan-300"
        />

        {/* Reflection */}

        <div
          className="
            absolute
            top-2
            left-1/2
            h-6
            w-10
            -translate-x-1/2
            rounded-full
            bg-white/20
            blur-md
          "
        />
      </motion.div>

      {/* Floating Orbit Dots */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <div className="absolute left-1/2 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />

        <div className="absolute bottom-4 left-4 h-1.5 w-1.5 rounded-full bg-cyan-200" />

        <div className="absolute bottom-6 right-3 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#67e8f9]" />
      </motion.div>
    </motion.div>
  );
}