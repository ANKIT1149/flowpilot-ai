interface LandingBackgroundProps {
    children: React.ReactNode;
}

export function LandingBackground({ children }: LandingBackgroundProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070709] text-foreground">
      {/* 1. Fully Visible Base Grid (Spans 100% Edge-to-Edge) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* 2. Full-Screen Ambient Color Washes (Spans the entire viewport width/height) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.07),transparent_40%)] pointer-events-none" />

      {/* 3. Full-Screen Sweeping Light Beam (Moves diagonally across the whole background) */}
      <div className="absolute -inset-[100%] pointer-events-none opacity-40 animate-pan-beam bg-[linear-gradient(45deg,transparent_40%,rgba(99,102,241,0.12)_50%,transparent_60%)]" />

      {/* 4. Cozy Atmospheric Vignette (Softens harsh edges while keeping the full grid visible) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,7,9,0.75)_100%)] pointer-events-none" />

      {/* 5. Something Extra: Subtle Shimmer Dust / Particle Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.025] animate-pulse duration-[5000ms] pointer-events-none" />
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-[100px] bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent animate-scan" />
      </div>

      {/* 5. Tactile Micro-Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      {/* Content Container */}
      <section className="relative z-10 pt-40">
        {children}
      </section>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes panBeam {
          0% {
            transform: translate(-20%, -20%);
          }
          50% {
            transform: translate(20%, 20%);
          }
          100% {
            transform: translate(-20%, -20%);
          }
        }
        .animate-pan-beam {
          animation: panBeam 18s ease-in-out infinite;
        }
      `}</style>

      <style>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(1000%);
          }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </main>
  );
}