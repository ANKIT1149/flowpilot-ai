/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ProgressIndicator({
  loading,
  error,
}: {
  loading: boolean;
  error: string;
}) {
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    if (loading) {
      setWidth('70%');
    } else {
      setWidth('100%');
    }
  }, [loading]);
  return (
    <div
      className="
        h-3
        overflow-hidden
        rounded-full
        bg-white/5
        border
        border-white/10
      "
    >
        <motion.div
        initial={{width: "0%"}}
          animate={{ width: width }}
          transition={{
            duration: loading ? 3 : 0.8,
            ease: 'easeInOut',
          }}
          className="h-full
          rounded-full
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-cyan-500"
          />
          

    </div>
  );
}
