'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { HERO } from './hero.constants';
import { cn } from '@/lib/cn';
import { radius } from '@/src/theme/design-system/';

interface HeroBadgeProps {
  href?: string;
  className?: string;
}

export function HeroBadge({
  href = HERO.badgeHref || '#',
  className,
}: HeroBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className={className}
    >
      <Link
        href={href}
        className={cn(
          'group relative inline-flex items-center gap-2.5 overflow-hidden px-4 py-4',
          'bg-white/[0.04] backdrop-blur-xl dark:bg-neutral-900/80',

          'border border-white/10 dark:border-white/10',
          radius.pill,

          'transition-all duration-300 ease-out',
          'hover:border-white/25 hover:bg-white/[0.08] hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.25)]',
          'dark:hover:border-neutral-700 dark:hover:bg-neutral-800/80'
        )}
      >

        <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -inset-[100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#a855f7_50%,#6366f1_100%)] opacity-25" />
        </div>

        
        <div className="relative flex items-center justify-center">
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
          </span>
          <Sparkles
            size={16}
            className="text-indigo-400 transition-transform duration-300 group-hover:rotate-12"
          />
        </div>

      
        <span
          className={cn(
            'text-sm font-medium tracking-wide',
            'text-zinc-200 transition-colors group-hover:text-white'
          )}
        >
          {HERO.badge}
        </span>

     
        <span className="h-3 w-px bg-white/10" />


        <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-300 transition-colors group-hover:text-indigo-200">
          Explore
          <ArrowRight
            size={13}
            className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
          />
        </span>
      </Link>
    </motion.div>
  );
}
