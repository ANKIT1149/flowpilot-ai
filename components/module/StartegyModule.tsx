'use client';

import { Rocket } from 'lucide-react';

import FeatureModule from './FeatureModule';

export default function StrategyModule() {
  return (
    <FeatureModule
      position='right'
      icon={Rocket}
      title="Growth Strategy"
      subtitle="Turn AI insights into a structured creator growth roadmap."
      badge="Strategy"
      items={['AI Video Ideas', '30-Day Roadmap', 'Beginner Guide']}
    />
  );
}
