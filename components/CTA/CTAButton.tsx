'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTAButton() {
  return (
    <motion.button
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
        y: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-full
        border
        border-cyan-400/30
        bg-gradient-to-r
       bg-transparent
        px-9
        py-5
        text-base
        font-semibold
        text-white
        shadow-[0_20px_60px_rgba(34,211,238,.35)]
        hover:to-cyan-900
         hover: cursor-pointer
      "
    >
      {/* Shine */}

      <motion.div
        initial={{ x: '-120%' }}
        whileHover={{ x: '220%' }}
        transition={{
          duration: 0.9,
        }}
        className="
          absolute
          inset-y-0
          w-24
          -skew-x-12
          bg-white/40
          blur-md
        "
      />

      <span className="relative flex items-center gap-3">
        <Sparkles
          size={18}
          className="transition-transform duration-300 group-hover:rotate-12"
        />
        Analyze Your First Video
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1.5"
        />
      </span>
    </motion.button>
  );
}
