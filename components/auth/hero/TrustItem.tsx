
import { motion } from 'framer-motion';

export const TrustItem = ({ text, variants }: { text: string; variants: any }) => {
  return (
    <motion.div
      variants={variants}
      className="flex items-center gap-4 group"
    >
      {/* The Glow-Dot */}
      <div className="relative flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
        {/* Subtle pulse ring */}
        <div className="absolute h-4 w-4 rounded-full border border-cyan-400/30 animate-ping" />
      </div>

      <span className="text-slate-300 font-medium tracking-wide group-hover:text-white transition-colors duration-300">
        {text}
      </span>
    </motion.div>
  );
};