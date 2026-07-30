'use client';

import { BrainCircuit } from 'lucide-react';

import FeatureModule from './FeatureModule';

export default function IntelligenceModule() {
  return (
    <FeatureModule
      position="left"
      icon={BrainCircuit}
      title="AI Intelligence"
      subtitle="Deep analysis transforms creator data into actionable intelligence."
      badge="Intelligence"
      items={['Audience Insights', 'Trend Analysis', 'Opportunity Score']}
    />
  );
}
