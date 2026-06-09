"use client";

import { motion } from "motion/react";

export function MeshGradient() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        left-[-20%]
        top-[-10%]
        h-[700px]
        w-[700px]
        rounded-full
        bg-violet-600/20
        blur-[180px]
      "
      />

      <motion.div
        animate={{
          x: [0, -120, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        bottom-[-20%]
        right-[-10%]
        h-[800px]
        w-[800px]
        rounded-full
        bg-blue-600/20
        blur-[180px]
      "
      />
    </>
  );
}