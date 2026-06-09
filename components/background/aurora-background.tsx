'use client';

import { motion } from 'framer-motion';

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Orb 1 */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 80, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          top-[-20%]
          left-[-10%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-violet-600/25
          blur-[160px]
        "
      />

      {/* Orb 2 */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -60, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          right-[-15%]
          top-[10%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-cyan-500/20
          blur-[180px]
        "
      />

      {/* Orb 3 */}
      <motion.div
        animate={{
          x: [0, 80, -100, 0],
          y: [0, -120, 40, 0],
          scale: [1, 1.05, 0.92, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          bottom-[-25%]
          left-[25%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-fuchsia-500/15
          blur-[170px]
        "
      />
    </div>
  );
}
