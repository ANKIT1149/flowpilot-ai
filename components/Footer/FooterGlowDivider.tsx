"use client";

import { motion } from "framer-motion";

export default function FooterGlowDivider() {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 z-20">
      <div className="relative mx-auto max-w-7xl">
        {/* Main Glow Line */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            relative
            h-px
            w-full
            bg-[linear-gradient(90deg,transparent,rgba(34,211,238,.9),rgba(168,85,247,.9),rgba(34,211,238,.9),transparent)]
            bg-[length:250%_100%]
          "
        />

        {/* Soft Bloom */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-10
            w-[70%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-cyan-400/25
            to-transparent
            blur-xl
          "
        />

        {/* Center Highlight */}
        <motion.div
          animate={{
            opacity: [0.35, 1, 0.35],
            scaleX: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-0
            h-[2px]
            w-40
            -translate-x-1/2
            rounded-full
            bg-cyan-300
            blur-sm
          "
        />

        {/* Moving Shimmer */}
        <motion.div
          animate={{
            x: ["-120%", "220%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
          className="
            absolute
            top-[-2px]
            h-2
            w-32
            -skew-x-12
            bg-gradient-to-r
            from-transparent
            via-white/70
            to-transparent
            blur-md
          "
        />
      </div>
    </div>
  );
}