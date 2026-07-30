'use client';

import { motion } from 'framer-motion';

export default function ConnectionLines() {
  return (
    <svg
      className="
        absolute
        inset-0
        z-0
        h-full
        w-full
        overflow-visible
      "
      viewBox="0 0 1000 900"
      fill="none"
    >
      {/* Research → AI Core */}
      <NeuralPath
        d="
          M500 150
          C500 280 500 320 500 430
        "
      />

      {/* Intelligence → AI Core */}
      <NeuralPath
        d="
          M180 560
          C300 560 370 520 500 450
        "
      />

      {/* Strategy → AI Core */}
      <NeuralPath
        d="
          M820 560
          C700 560 630 520 500 450
        "
      />
    </svg>
  );
}

function NeuralPath({ d }: { d: string }) {
  return (
    <>
      {/* Glow Layer */}
      <motion.path
        d={d}
        stroke="rgba(34,211,238,0.25)"
        strokeWidth="8"
        strokeLinecap="round"
        filter="blur(8px)"
      />

      {/* Main Line */}
      <motion.path
        d={d}
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{
          pathLength: 0,
        }}
        whileInView={{
          pathLength: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
        }}
      />

      {/* Energy Dash */}
      <motion.path
        d={d}
        stroke="rgba(34,211,238,0.8)"
        strokeWidth="2"
        strokeDasharray="8 18"
        strokeLinecap="round"
        initial={{
          strokeDashoffset: 100,
        }}
        animate={{
          strokeDashoffset: -100,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </>
  );
}
