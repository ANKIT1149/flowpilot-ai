'use client';

import Loader from '@/components/loader/Loader';
import { HeroSearchButtonProp } from '@/interface/HeroSearchButton';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSearchButton({
  FetchURLData,
  loading,
  disableButton,
}: HeroSearchButtonProp) {
  return (
    <>
      {loading ? (
        <Loader textArea="Getting Insight..." />
      ) : (
        <motion.button
          onClick={FetchURLData}
          whileHover={!disableButton ? { scale: 1.03, y: -2 } : undefined}
          whileTap={!disableButton ? { scale: 0.97 } : undefined}
          disabled={disableButton}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
          }}
          className={`"
        group
        relative
        inline-flex
        items-center
        justify-center
        h-14
        px-8
        rounded-full
        overflow-hidden
        
        /* Glassmorphic Base */
        bg-slate-950/60
        backdrop-blur-xl

        /* Border Effect */
        border
        border-white/10
        hover:border-indigo-500/50
        
          ${
            disableButton
              ? 'opacity-50 cursor-not-allowed pointer-events-none'
              : 'cursor-pointer'
          }
  
        /* Premium Shadow & Glow */
        shadow-[0_8px_32px_rgba(0,0,0,0.37)]
        hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)]

        transition-all
        duration-300
        cursor-pointer
      `}
        >
          <div
            className="
          absolute 
          -inset-px 
          rounded-full 
          bg-linear-to-r 
          from-indigo-700 
          via-amber-500 
          to-cyan-400 
          opacity-0 
          blur-sm 
          transition-opacity 
          duration-500 
          group-hover:opacity-60 
          -z-10
        "
          />

          <div
            className="
          absolute
          inset-0
          -translate-x-full
          bg-linear-to-r
          from-transparent
          via-white/15
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-full
        "
          />

          <div className="relative z-10 flex items-center gap-3">
            <Sparkles
              className="h-4 w-4 text-indigo-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              strokeWidth={2}
            />

            <span
              className="
            text-lg
            font-medium
            tracking-wide
            font-serif
            text-italic
            text-slate-100
            group-hover:text-white
            group-hover:font-bold
            transition-colors
          "
            >
              Get Insights
            </span>

            <motion.div
              whileHover={{
                x: 4,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 15,
              }}
              className="flex items-center justify-center bg-white/10 rounded-full p-1.5 border border-white/10 group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-colors duration-300"
            >
              <ArrowRight
                className="h-3.5 w-3.5 text-white"
                strokeWidth={2.5}
              />
            </motion.div>
          </div>
        </motion.button>
      )}
    </>
  );
}
