"use client";

import { motion } from "framer-motion";

export default function HeroTypography() {
  return (
    <div className="max-w-3xl">
      {/* Badge */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-white/10
          bg-white/5
          px-4
          py-2
          backdrop-blur-xl
        "
      >
        <span className="h-2 w-2 rounded-full bg-cyan-400" />

        <span className="ml-2 text-sm text-slate-300">
          AI Content Distribution Engine
        </span>
      </motion.div>

      {/* Logo Text */}

      <motion.h1
        initial={{
          opacity: 0,
          filter: "blur(20px)",
          y: 40,
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mt-8
          text-7xl
          font-black
          tracking-[-0.08em]
          text-white
          md:text-8xl
          lg:text-[120px]
        "
      >
        FLOWPILOT
      </motion.h1>

      {/* AI */}

      <motion.div
        initial={{
          opacity: 0,
          x: -30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
        className="
          mt-2
          inline-flex
          items-center
          rounded-full
          border
          border-violet-500/30
          bg-violet-500/10
          px-5
          py-2
          backdrop-blur-xl
        "
      >
        <span
          className="
            bg-gradient-to-r
            from-violet-300
            via-cyan-300
            to-violet-300
            bg-clip-text
            text-lg
            font-semibold
            text-transparent
          "
        >
          AI
        </span>
      </motion.div>

      {/* Tagline */}

      <div className="mt-10 space-y-2">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="
            text-4xl
            font-bold
            tracking-tight
            text-white
            md:text-5xl
          "
        >
          Upload Once.
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.3,
            duration: 0.8,
          }}
          className="
            bg-gradient-to-r
            from-cyan-300
            via-white
            to-violet-300
            bg-clip-text
            text-4xl
            font-bold
            tracking-tight
            text-transparent
            md:text-5xl
          "
        >
          Publish Everywhere.
        </motion.div>
      </div>

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.6,
          duration: 0.8,
        }}
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-relaxed
          text-slate-400
        "
      >
        Transform a single video into platform-optimized content,
        generate captions with AI, schedule intelligently, and
        distribute across every major platform from one dashboard.
      </motion.p>
    </div>
  );
}