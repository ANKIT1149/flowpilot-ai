'use client';

import { motion } from 'framer-motion';

import CoreGlow from './CoreGlow';
import CorePulse from './CorePulse';
import CoreParticles from './CoreParticles';
import GlassCore from './GlassCore';
import { useNetwork } from '@/components/Feature/NetworkContext';
import RotatingRings from './RotatingRing';

export default function AICore() {
  const { activeFeature } = useNetwork();

  const isActive: boolean = activeFeature !== null;

  return (
    <motion.div
      animate={{
        scale: isActive ? 1.08 : 1,
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="
        absolute
        left-1/2
        top-1/2
        z-30
        -translate-x-1/2
        -translate-y-1/2
      "
    >
      <div
        className="
        relative
        h-[320px]
        w-[320px]
        lg:h-[360px]
        lg:w-[360px]
        "
      >
        <CoreGlow active={isActive} />

        <RotatingRings active={isActive} />

        <CorePulse active={isActive} />

        <CoreParticles active={isActive} />

        <GlassCore active={isActive} />
      </div>
    </motion.div>
  );
}
