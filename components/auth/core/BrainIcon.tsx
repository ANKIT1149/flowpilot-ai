'use client';

import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

export default function BrainIcon() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className=" relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-lg"
    >
      <BrainCircuit
        className="h-10 w-10 text-cyan-200"
      />
    </motion.div>
  );
}
