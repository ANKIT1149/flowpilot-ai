"use client";

import { motion } from "framer-motion";

export function MetricCenter() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto flex h-56 w-56 items-center justify-center"
    >
      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />

      {/* Rotating Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          rounded-full
          border
          border-cyan-400/30
        "
      />

      {/* Glass Card */}

      <motion.div
        whileHover={{
          y: -4,
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
        className="
          relative
          flex
          h-48
          w-48
          flex-col
          items-center
          justify-center
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,.45)]
        "
      >
        {/* Reflection */}

        <div
          className="
            absolute
            inset-x-5
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/50
            to-transparent
          "
        />

        <motion.h3
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            text-5xl
            font-black
            tracking-tight
            text-white
          "
        >
          98.7%
        </motion.h3>

        <p className="mt-3 text-sm text-white/60">
          Analysis Confidence
        </p>

        <span
          className="
            mt-2
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
            px-3
            py-1
            text-xs
            uppercase
            tracking-[0.2em]
            text-cyan-300
          "
        >
          AI CORE
        </span>
      </motion.div>
    </motion.div>
  );
}