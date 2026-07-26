"use client";

import { motion } from "framer-motion";

export function GlassShine() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-4xl">
      {/* Ambient Glass Reflection */}
      <motion.div
        className="
          absolute
          -left-32
          -top-32
          h-[340px]
          w-[620px]
          rounded-full

          bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_40%,transparent_75%)]

          blur-[90px]
          mix-blend-screen
        "
        animate={{
          rotate: [0, 8, -6, 0],
          x: [0, 25, -18, 0],
          y: [0, 12, -10, 0],
          opacity: [0.08, 0.16, 0.1, 0.08],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Reflection */}
      <motion.div
        className="
          absolute
          right-[-140px]
          bottom-[-120px]
          h-[280px]
          w-[420px]
          rounded-full

          bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,rgba(99,102,241,0.03)_45%,transparent_75%)]

          blur-[80px]
          mix-blend-screen
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.05, 0.12, 0.05],
          x: [0, -15, 0],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rare Shine Sweep */}
      <motion.div
        className="
          absolute
          -left-1/2
          top-0
          h-full
          w-40

          -skew-x-[24deg]

          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent

          blur-xl
        "
        animate={{
          x: ["-120%", "420%"],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 10,
        }}
      />

      {/* Top Edge Reflection */}
      <div
        className="
          absolute
          left-6
          right-6
          top-0
          h-px

          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />

      {/* Bottom Soft Reflection */}
      <div
        className="
          absolute
          bottom-0
          left-10
          right-10
          h-px

          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />
    </div>
  );
}