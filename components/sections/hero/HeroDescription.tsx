"use client";

import { motion } from "framer-motion";

import { HERO } from "./hero.constants";
import { cn } from "@/lib/cn";
import { typography } from "@/src/theme/design-system";

export function HeroDescription() {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.3,
        duration: 0.7,
        ease: "easeOut",
      }}
      className={cn(
        "mt-8 max-w-3xl text-center",
        typography.hero.description
      )}
    >
      {HERO.description}
    </motion.p>
  );
}