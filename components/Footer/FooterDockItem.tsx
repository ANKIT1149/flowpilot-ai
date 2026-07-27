'use client';

import { motion } from 'framer-motion';

interface Props {
  label: string;
}

export default function FooterDockItem({ label }: Props) {
  return (
    <motion.button
      whileHover={{
        y: -5,
        scale: 1.05,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 18,
      }}
      className="
group/item
relative
overflow-hidden
rounded-2xl
px-5
py-2.5
text-lg
font-serif
font-medium
text-white/60
transition-all
duration-500
hover:text-white
"
    >
      {/* Hover Glow */}

      <span
        className="
absolute
inset-0
rounded-2xl
bg-cyan-400/10
opacity-0
blur-xl
transition-opacity
duration-500
group-hover/item:opacity-100
"
      />

      {/* Sliding Light */}

      <motion.span
        initial={{
          x: '-100%',
        }}
        whileHover={{
          x: '200%',
        }}
        transition={{
          duration: 0.8,
        }}
        className="
absolute
inset-y-0
w-10
bg-gradient-to-r
from-transparent
via-white/20
to-transparent
skew-x-12
"
      />

      <span className="relative z-10">{label}</span>
    </motion.button>
  );
}
