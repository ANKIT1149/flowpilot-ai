"use client";

import { motion } from "framer-motion";

interface AnimatedBeamProps {
  d: string;
  delay?: number;
}

export function AnimatedBeam({
  d,
  delay = 0,
}: AnimatedBeamProps) {
  return (
    <svg
      className="absolute inset-0 h-full w-full overflow-visible pointer-events-none"
      viewBox="0 0 1000 520"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="beamGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="50%" stopColor="#67e8f9" stopOpacity=".9" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>

        <filter id="beamGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base Line */}

      <path
        d={d}
        fill="none"
        stroke="rgba(255,255,255,.08)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Glow */}

      <motion.path
        d={d}
        fill="none"
        stroke="url(#beamGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#beamGlow)"
        initial={{
          pathLength: 0,
        }}
        whileInView={{
          pathLength: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.4,
          delay,
        }}
      />

      {/* Energy Particle */}

      <motion.circle
        r="5"
        fill="#67e8f9"
        filter="url(#beamGlow)"
        initial={{
          offsetDistance: "0%",
        }}
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          duration: 2.2,
          delay,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "linear",
        }}
        style={{
          offsetPath: `path("${d}")`,
        }}
      />
    </svg>
  );
}