"use client";

import { motion } from "framer-motion";
import { BrandProps } from "./brand.types";
import { cn } from "@/lib/cn";

const textSize = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-3xl",
};

export function BrandText({
  size = "md",
  className,
}: BrandProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 font-semibold tracking-tight",
        textSize[size],
        className
      )}
    >
      <span className="text-white">
        Creator
      </span>

      <motion.span
        className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent"
        animate={{
          backgroundPosition: [
            "0%",
            "100%",
            "0%",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200%",
        }}
      >
        Lens
      </motion.span>

      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">
        AI
      </span>
    </div>
  );
}