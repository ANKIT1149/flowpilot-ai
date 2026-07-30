'use client';

import { motion } from 'framer-motion';

export interface Props {
  active: boolean;
}

export default function CoreGlow({ active }: Props) {
  return (
    <>
      {/* Main Cyan Aura */}
      <motion.div
        animate={{
          opacity: active ? 0.7 : 0.35,
          scale: active ? 1.2 : 1,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/20
          blur-[140px]
        "
      />

      {/* Violet AI Energy Field */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/20
          blur-[120px]
        "
      />

      {/* Center Light Source */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[160px]
          w-[160px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-violet-500
          blur-[80px]
        "
      />
    </>
  );
}
