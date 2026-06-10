"use client";

import { motion } from "framer-motion";

export default function AnimatedOrb() {
  return (
    <div className="relative">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          h-52
          w-52
          rounded-full
          border
          border-white/10
        "
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-4
          rounded-full
          border
          border-violet-500/20
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          h-52
          w-52
          rounded-full
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-cyan-500
          blur-3xl
          opacity-70
        "
      />

      <div
        className="
          absolute
          inset-[30%]
          rounded-full
          bg-white
          shadow-[0_0_80px_rgba(255,255,255,.8)]
        "
      />
    </div>
  );
}