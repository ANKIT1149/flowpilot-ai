"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { BrandProps } from "./brand.types";

const sizes = {
  sm: 28,
  md: 36,
  lg: 48,
};

export function BrandIcon({
  size = "md",
  animated = true,
  className,
}: BrandProps) {
  const dimension = sizes[size];

  return (
    <motion.div
      whileHover={
        animated
          ? {
              rotate: 4,
              scale: 1.05,
            }
          : undefined
      }
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      className={cn("relative flex items-center justify-center", className)}
    >
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 64 64"
        fill="none"
      >
        <defs>
          <linearGradient id="creatorlens-gradient">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        {/* Outer Ring */}
        <circle
          cx="32"
          cy="32"
          r="24"
          stroke="url(#creatorlens-gradient)"
          strokeWidth="2.5"
        />

        {/* Middle Ring */}
        <circle
          cx="32"
          cy="32"
          r="15"
          stroke="url(#creatorlens-gradient)"
          strokeOpacity=".75"
          strokeWidth="2"
        />

        {/* Center */}
        <circle
          cx="32"
          cy="32"
          r="6"
          fill="url(#creatorlens-gradient)"
        />
      </svg>

      <motion.div
        className="absolute h-5 w-5 rounded-full bg-indigo-500/30 blur-xl"
        animate={
          animated
            ? {
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4],
              }
            : undefined
        }
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}