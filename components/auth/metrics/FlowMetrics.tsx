'use client';

import { motion } from 'framer-motion';

const metrics = [
  {
    value: '1.2M+',
    label: 'Posts Distributed',
  },
  {
    value: '98%',
    label: 'Publishing Accuracy',
  },
  {
    value: '12x',
    label: 'Faster Workflow',
  },
];

export default function FloatingMetrics() {
  return (
    <>
      {/* Top */}
      <MetricCard
        className="absolute top-2 right-20"
        value={metrics[0].value}
        label={metrics[0].label}
        delay={0}
      />

      {/* Middle */}
      <MetricCard
        className="absolute bottom-40 right-0"
        value={metrics[1].value}
        label={metrics[1].label}
        delay={1}
      />

      {/* Bottom */}
      <MetricCard
        className="absolute -bottom-4 right-[580px]"
        value={metrics[2].value}
        label={metrics[2].label}
        delay={2}
      />
    </>
  );
}

function MetricCard({
  value,
  label,
  className,
  delay,
}: {
  value: string;
  label: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
      }}
      className={className}
    >
      <div
        className="
          w-[180px]
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          p-5
          backdrop-blur-2xl
          shadow-[0_0_40px_rgba(255,255,255,0.04)]
        "
      >
        <h3
          className="
            text-3xl
            font-bold
            text-white
          "
        >
          {value}
        </h3>

        <p
          className="
            mt-2
            text-sm
            text-slate-400
          "
        >
          {label}
        </p>
      </div>
    </motion.div>
  );
}
