'use client';

import { motion } from 'framer-motion';

export default function Loader({textArea}: {textArea: string}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-xl z-50">
      {/* Glass container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-center"
      >
        {/* Outer rotating glow ring */}
        <div className="absolute w-32 h-32 rounded-full animate-spin-slow bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 blur-xl opacity-70" />

        {/* Main ring */}
        <div className="w-28 h-28 rounded-full border-4 border-white/10  border-t-white/80 animate-spin" />

        {/* Inner glow core */}
        <div className="absolute w-12 h-12 rounded-full bg-white/10 blur-md animate-pulse" />

        {/* Center dot */}
        <div className="absolute w-4 h-4 rounded-full bg-white shadow-lg shadow-white/40" />
      </motion.div>

      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute mt-44 text-white/70 text-sm tracking-widest"
      >
        {textArea}
      </motion.div>
    </div>
  );
}
