'use client';

import { motion } from 'framer-motion';

interface PreviewPlayerProps {
  videoId?: string;
}

export function PreviewPlayer({ videoId }: PreviewPlayerProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -2,
      }}
      className="group  relative aspect-video rounded-2xl border border-white/10 bg-black"
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
        title="YouTube video"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full"
      />

      {/* Soft Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-bg-red-500/70 to-transparent" />

      {/* Hover Border Glow */}
      {/* Outer Border Glow */}
      <div className="group relative">
        <div
          className="
      absolute
      -inset-0.75
      rounded-2xl
      opacity-0
      transition-all
      duration-500
      group-hover:opacity-100
    "
        >
          <div
            className="
        absolute
        inset-0
        rounded-2xl
        border-4
        border-amber-800
        shadow-[0_0_10px_#22d3ee,0_0_25px_#22d3ee,0_0_50px_#22d3ee,0_0_80px_#22d3ee]
        animate-pulse
      "
          />
        </div>
      </div>
    </motion.div>
  );
}
