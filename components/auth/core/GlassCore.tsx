"use client";

import { motion } from "framer-motion";
import BrainIcon from "./BrainIcon";
import { Props } from "./CoreGlow";

export default function GlassCore({active}: Props) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        left-1/2
        top-1/2
        flex
        h-[220px]
        w-[220px]
        -translate-x-1/2
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-white/[0.15]
        bg-white/[0.04]
        backdrop-blur-3xl
        shadow-[0_0_80px_rgba(34,211,238,0.25)]
        lg:h-[260px]
        lg:w-[260px]
      "
    >

      {/* Inner Energy Gradient */}
      <motion.div
        animate={{
          opacity: [0.35,0.65,0.35],
          scale:[1,1.1,1],
        }}
        transition={{
          duration:5,
          repeat:Infinity,
          ease:"easeInOut",
        }}
        className="
          absolute
          inset-8
          rounded-full
          bg-gradient-to-br
          from-cyan-400/40
          via-blue-500/20
          to-violet-500/40
          blur-2xl
        "
      />


      {/* Glass Reflection */}
      <div
        className="
          absolute
          inset-0
          overflow-hidden
          rounded-full
        "
      >
        <motion.div
          animate={{
            x:["-120%","120%"],
          }}
          transition={{
            duration:8,
            repeat:Infinity,
            repeatDelay:6,
            ease:"linear",
          }}
          className="
            absolute
            -inset-y-10
            w-20
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-white/25
            to-transparent
            blur-md
          "
        />
      </div>


      {/* Inner Ring */}
      <div
        className="
          absolute
          inset-5
          rounded-full
          border
          border-white/10
        "
      />


      {/* Brain Icon */}
      <BrainIcon />

    </motion.div>
  );
}