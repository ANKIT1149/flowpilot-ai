"use client";

import { motion } from "framer-motion";

import { HERO } from "./hero.constants";
import { cn } from "@/lib/cn";
import { typography } from "@/src/theme/design-system";

export function HeroHeadline() {
  return (
    <div className="relative flex justify-center">
      {/* Glow */}
      <div className="absolute top-12 h-48 w-[650px] rounded-full bg-gradient-to-r from-fuchsia-500/20 via-cyan-400/15 to-violet-500/20 blur-[120px]" />

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn(
          "relative z-10 mt-8 max-w-6xl text-center text-white",
          typography.hero.title
        )}
      >
        <span className="block tracking-[-0.05em] leading-[0.95]">
          {HERO.title[0]}
        </span>

        <motion.span
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            mt-3
            block
            bg-[length:250%_250%]
            bg-gradient-to-r
            from-violet-300
            via-cyan-300
            via-emerald-300
            to-fuchsia-300
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_30px_rgba(139,92,246,0.35)]
          "
        >
          {HERO.title[1]}
        </motion.span>
      </motion.h1>
    </div>
  );
}