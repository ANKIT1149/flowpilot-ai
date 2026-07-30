'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Feature = 'research' | 'intelligence' | 'strategy' | null;

interface ContextType {
  activeFeature: Feature;

  setActiveFeature: (feature: Feature) => void;
}

const NetworkContext = createContext<ContextType | null>(null);

export function NetworkProvider({ children }: { children: ReactNode }) {
  const [activeFeature, setActiveFeature] = useState<Feature>(null);

  return (
    <NetworkContext.Provider
      value={{
        activeFeature,
        setActiveFeature,
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetwork() {
  const context = useContext(NetworkContext);

  if (!context) {
    throw new Error('NetworkProvider missing');
  }

  return context;
}
