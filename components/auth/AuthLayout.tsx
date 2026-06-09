'use client';

import { ReactNode } from 'react';
import AuroraBackground from '../background/aurora-background';
import { MouseDepthProvider } from './MouseDepthProviders';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <AuroraBackground />

      {/* Noise Texture */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Grid Layer */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial Glow */}
      <div
        aria-hidden
        className="
          absolute
          left-1/2
          top-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/10
          blur-[180px]
        "
      />

      <MouseDepthProvider>
        <div className="relative z-10 min-h-screen">{children}</div>
      </MouseDepthProvider>
    </main>
  );
}
