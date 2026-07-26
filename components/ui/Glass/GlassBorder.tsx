"use client";

import { motion } from "framer-motion";

export function GlassBorder() {
  return (
    <>
      {/* Static Border */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-4xl
          border
          border-white/20
        "
      />

      {/* Inner Border */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[1px]
          rounded-[31px]
          border
          border-cyan-400/40
        "
      />

      {/* Animated Edge Highlight */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-4xl
        "
      >
        <div
          className="
            absolute
            -top-20
            left-1/2
            h-40
            w-40
            -translate-x-1/2

            rounded-full

            bg-gradient-to-r
            from-transparent
            via-cyan-300/60
            to-transparent

            blur-2xl
          "
        />
      </motion.div>
    </>
  );
}