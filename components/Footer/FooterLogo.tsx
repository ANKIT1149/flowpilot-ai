"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function FooterLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-20
          -z-10
          h-[320px]
          w-[320px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/20
          blur-[120px]
        "
      />

      {/* Badge */}
      <motion.div
        whileHover={{
          y: -2,
          scale: 1.03,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        className="
          group
          relative
          mb-8
          inline-flex
          items-center
          gap-2
          overflow-hidden
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          px-5
          py-2.5
          backdrop-blur-xl
        "
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5" />

        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="relative h-2 w-2 rounded-full bg-emerald-400"
        />

        <Sparkles className="relative h-4 w-4 text-cyan-300" />

        <span className="relative text-xs font-medium tracking-[0.18em] uppercase text-white/80">
          AI Creator Intelligence
        </span>
      </motion.div>

      {/* Logo */}
      <div className="group relative inline-block">
        {/* Glow */}
        <div
          className="
            absolute
            inset-0
            bg-cyan-400/20
            blur-3xl
            opacity-0
            transition-opacity
            duration-700
            group-hover:opacity-100
          "
        />

        {/* Gradient Text */}
        <h2
          className="
            relative
            bg-gradient-to-b
            from-white
            via-cyan-100
            to-cyan-400
            bg-clip-text
            text-6xl
            font-black
            tracking-tight
            text-transparent
            lg:text-7xl
          "
        >
          CreatorLens
        </h2>

        {/* Shine */}
        <motion.div
          animate={{
            x: ["-150%", "220%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "linear",
          }}
          className="
            absolute
            inset-y-0
            w-24
            -skew-x-12
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            blur-md
          "
        />
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
        className="
          mt-6
          text-xl
          font-medium
          tracking-tight
          text-white/90
        "
      >
        AI-Powered Creator Intelligence
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.35,
          duration: 0.6,
        }}
        className="
          mt-4
          max-w-2xl
          text-base
          leading-8
          text-white/55
        "
      >
        Analyze creators, uncover winning strategies, discover opportunities,
        and transform content insights into your next breakthrough.
      </motion.p>

      {/* Decorative Stars */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-8 top-10 text-cyan-300/60"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute right-8 top-20 text-violet-300/60"
      >
        ✦
      </motion.div>
    </motion.div>
  );
}