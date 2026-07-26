'use client';

import { containerVariants, itemVariants } from '@/constants/motion';

import { motion } from 'framer-motion';
import { PreviewPlayer } from './PreviewPlayer';
import { PreviewInfo } from './PreviewInfo';
import { VideoPreview } from '@/interface/FetchURLData';

interface VideoPreviewProps {
  showData: VideoPreview;
}

export function HeroPreview({ showData }: VideoPreviewProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto mt-10 w-full max-w-7xl px-4"
    >
      <motion.div
        whileHover={{
          y: -2,
          transition: { duration: 1 },
        }}
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.35)]
        "
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-white/5" />

        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative grid gap-8 p-6 lg:grid-cols-[1.2fr_1fr] lg:p-8">
          {/* LEFT */}

          <motion.div
            variants={itemVariants}
            className="
              aspect-video
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-black/30
            "
          >
            <PreviewPlayer videoId={showData.id} />
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between"
          >
            {/* CTA */}

            <PreviewInfo
              title={showData.title}
              views={showData.views}
              verified={showData.verified}
              upload_date={showData.upload_date}
              timestamp={showData.timestamp}
              channel_url={showData.channel_url}
              channel={ showData.channel}
              webpage_url={showData.webpage_url}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
