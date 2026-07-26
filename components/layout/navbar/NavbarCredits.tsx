"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

import { cn } from "@/lib/cn";
import { radius, spacing, typography } from "@/src/theme/design-system";

interface NavbarCreditsProps {
  credits?: number;
}

export function NavbarCredits({
  credits = 125,
}: NavbarCreditsProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.02,
        y: -1,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={cn(
        "flex items-center border border-white/10 bg-white/5 transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/10",

        spacing.credits.height,
        spacing.credits.padding,
        spacing.credits.gap,

        radius.pill
      )}
    >
      <Zap
        size={16}
        className="text-indigo-400"
      />

      <span
        className={cn(
          typography.credits.value,
          "text-white"
        )}
      >
        {credits}
      </span>

      <span
        className={cn(
          typography.credits.label,
          "text-zinc-400"
        )}
      >
        Credits
      </span>
    </motion.button>
  );
}