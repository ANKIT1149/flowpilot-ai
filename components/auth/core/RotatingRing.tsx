'use client';

import { motion } from 'framer-motion';
import { Props } from './CoreGlow';

export default function RotatingRings({ active }: Props) {
  return (
    <>
      {/* Outer Orbital Ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: active ? 15 : 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-85
          w-85
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-300/20
          lg:h-100
          lg:w-100
        "
      />

      {/* Dashed Intelligence Ring */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-72.5
          w-72.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-dashed
          border-white/20
          lg:h-85
          lg:w-85
        "
      />

      {/* Inner Energy Ring */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-67.5
          w-67.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-400/20
          blur-[1px]
          lg:h-77.5
          lg:w-77.5
        "
      />

      {/* Orbit Nodes */}
      <OrbitNode
        className="
          left-1/2
          top-0
          -translate-x-1/2
        "
      />

      <OrbitNode
        className="
          bottom-5
          left-12
        "
      />

      <OrbitNode
        className="
          right-12
          top-20
        "
      />
    </>
  );
}

function OrbitNode({ className }: { className: string }) {
  return (
    <motion.div
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [1, 1.4, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`
        absolute
        h-2
        w-2
        rounded-full
        bg-cyan-300
        shadow-[0_0_20px_rgba(34,211,238,0.8)]
        ${className}
      `}
    />
  );
}
