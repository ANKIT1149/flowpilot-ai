'use client';

import { motion } from 'framer-motion';
import { Props } from './CoreGlow';

export default function CorePulse({ active }: Props) {
  return (
    <>
      {/* Main Expanding Pulse */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-400/20
        "
        animate={{
          scale: [1, 1.45],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: active ? 2 : 5,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />

      {/* Second Delayed Pulse */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-violet-400/20
        "
        animate={{
          scale: [1, 1.35],
          opacity: [0.35, 0],
        }}
        transition={{
          duration: 5,
          delay: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />

      {/* Core Breathing Light */}
      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[180px]
          w-[180px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </>
  );
}
