'use client';

import { ReactNode } from 'react';
import { NetworkProvider } from './NetworkContext';
import EnergyFlow from './EnergyFlow';
import ConnectionLines from './ConnectionLine';
import HoverConnections from './HoverSection';

interface NetworkProps {
  children: ReactNode;
}

export default function Network({ children }: NetworkProps) {
  return (
    <NetworkProvider>
      <div
        className="
        relative
        mx-auto
        h-[650px]
        w-full
      "
      >
        {/* SVG Connection Layer */}
        <ConnectionLines />


        {/* Moving Data */}
        <EnergyFlow />

        {/* Interactive Glow */}
        <HoverConnections />

        {/* Components */}
        <div
          className="
          relative
          z-20
          h-full
          w-full
        "
        >
          {children}
        </div>
      </div>
    </NetworkProvider>
  );
}
