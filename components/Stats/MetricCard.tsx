"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MetricCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export function MetricCard({
  icon,
  value,
  label,
}: MetricCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        p-6
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
      "
    >
      {/* Glow */}

      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[30px] bg-cyan-500/5" />
      </div>

      {/* Top reflection */}

      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

      {/* Icon */}

      <motion.div
        whileHover={{ rotate: 6, scale: 1.08 }}
        className="text-cyan-300"
      >
        {icon}
      </motion.div>

      {/* Number */}

      <h3 className="mt-6 text-4xl font-black text-white">
        {value}
      </h3>

      {/* Label */}

      <p className="mt-2 text-white/60">
        {label}
      </p>

      {/* Animated line */}

      <motion.div
        className="mt-6 h-px bg-gradient-to-r from-cyan-400 to-transparent"
        initial={{ width: "30%" }}
        whileHover={{ width: "100%" }}
      />
    </motion.div>
  );
}