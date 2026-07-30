'use client';

import { motion } from 'framer-motion';

const flows = [
  {
    id: 1,
    path: 'M500 150 C500 280 500 320 500 430',
    duration: 3,
    delay: 0,
  },

  {
    id: 2,
    path: 'M180 560 C300 560 370 520 500 450',
    duration: 4,
    delay: 1,
  },

  {
    id: 3,
    path: 'M820 560 C700 560 630 520 500 450',
    duration: 3.5,
    delay: 2,
  },
];

export default function EnergyFlow() {
  return (
    <svg
      className="
absolute
inset-0
z-10
h-full
w-full
overflow-visible
pointer-events-none
"
      viewBox="0 0 1000 900"
      fill="none"
    >
      {flows.map((flow) => (
        <EnergyParticle key={flow.id} {...flow} />
      ))}
    </svg>
  );
}

function EnergyParticle({
  path,
  duration,
  delay,
}: {
  path: string;
  duration: number;
  delay: number;
}) {
  return (
    <motion.circle
      r="5"
      fill="#67e8f9"
      filter="url(#glow)"
      initial={{
        offsetDistance: '0%',
      }}
      animate={{
        offsetDistance: '100%',
      }}
      style={{
        offsetPath: `path("${path}")`,
      }}
      transition={{
        duration,

        delay,

        repeat: Infinity,

        ease: 'linear',
      }}
    />
  );
}
