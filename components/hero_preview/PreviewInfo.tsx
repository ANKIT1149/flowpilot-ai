'use client';

import { motion, Variants } from 'framer-motion';
import { BadgeCheck, Calendar, Clock3, Eye, ExternalLink } from 'lucide-react';
import PreviewButton from './PreviewButton';
import { VideoPreviewInfo } from './type';
import { formatTimeUpload, formatUploadDate, formatViews } from '@/utils/Format';

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function PreviewInfo({
  title,
  timestamp,
  channel,
  channel_url,
  webpage_url,
  verified,
  views,
  upload_date,
}: VideoPreviewInfo) {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="space-y-8">
        {/* Status Badge */}

        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            ✨ Ready for Analysis
          </span>
        </motion.div>

        {/* Title */}

        <motion.div variants={itemVariants} className="space-y-3">
          <h2 className="text-3xl font-bold font-serif text-italic leading-tight text-white">
            {title}
          </h2>

          <div className="flex items-center gap-2 text-white/70">
            <span className="font-semibold">
              <a
                href={`${channel_url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {channel}
              </a>
            </span>

            {verified ? (
              <BadgeCheck size={18} className="fill-cyan-700 text-cyan-500" />
            ) : (
              <BadgeCheck size={18} className="fill-red-800 text-red-500" />
            )}
          </div>
        </motion.div>

        {/* Stats */}

        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-md">
            <Eye size={16} />
            
            {formatViews(views)}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-md">
            <Calendar size={16} />
            {formatUploadDate(upload_date)}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-md">
            <Clock3 size={16} />
            {formatTimeUpload(timestamp)}
          </div>
        </motion.div>

        {/* Divider */}

        <motion.div
          variants={itemVariants}
          className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Link */}

        <motion.a
          variants={itemVariants}
          href={`${webpage_url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mb-8 w-fit items-center gap-2 text-2xl underline font-semibold font-serif text-amber-200 transition-all duration-300 hover:gap-3 hover:text-cyan-200"
        >
          Watch on YouTube
          <ExternalLink size={20} />
        </motion.a>
      </div>

      <PreviewButton />
    </div>
  );
}
