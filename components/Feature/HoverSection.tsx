'use client';

import { motion } from 'framer-motion';
import { useNetwork } from './NetworkContext';

export default function HoverConnections() {
  const { activeFeature } = useNetwork();

  return (
    <svg
      className="
absolute
inset-0
z-20
pointer-events-none
h-full
w-full
"
      viewBox="0 0 1000 900"
    >
      {/* Research Highlight */}

      <motion.path
        d="
M500 150
C500 280 500 320 500 430
"
        animate={{
          opacity: activeFeature === 'research' ? 1 : 0,
        }}
        stroke="
rgba(34,211,238,0.9)
"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Intelligence */}

      <motion.path
        d="
M180 560
C300 560 370 520 500 450
"
        animate={{
          opacity: activeFeature === 'intelligence' ? 1 : 0,
        }}
        stroke="
rgba(34,211,238,0.9)
"
        strokeWidth="6"
      />

      {/* Strategy */}

      <motion.path
        d="
M820 560
C700 560 630 520 500 450
"
        animate={{
          opacity: activeFeature === 'strategy' ? 1 : 0,
        }}
        stroke="
rgba(34,211,238,0.9)
"
        strokeWidth="6"
      />
    </svg>
  );
}
