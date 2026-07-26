'use client';

import { cn } from '@/lib/cn';
import { GlassGlow } from './GlassGlow';
import { GlassBorder } from './GlassBorder';
import { GlassShine } from './GlassShine';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassPannel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn('group relative overflow-hidden rounded-4xl', className)}
    >
          <GlassGlow />
          <GlassBorder />
          <GlassShine />

      <div
        className="
          relative
          z-20

          rounded-4xl

          border border-white/10

          bg-linear-to-b
          from-white/8
          via-white/5
          to-white/3

          backdrop-blur-3xl
          backdrop-saturate-150

          shadow-[0_30px_120px_rgba(0,0,0,.45),0_0_80px_rgba(99,102,241,.12)]
        "
      >
        {children}
      </div>
    </div>
  );
}
