'use client';

import { motion } from 'framer-motion';
import OauthButtons from './oauath-button';
import { TrustSection } from './hero/TrustSection';
import { useMouseDepth } from './MouseDepthProviders';

export default function LoginCard() {
  const mouse = useMouseDepth();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.95,
        rotateX: 10,
        rotateY: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: -mouse.y * 3,
        rotateY: mouse.x * 3,
      }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 20,
        delay: 0.8,
      }}
      style={{
        perspective: '2000px',
      }}
      className="relative w-full max-w-xl"
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-[36px]
          bg-linear-to-r
          from-violet-500/20
          via-cyan-500/10
          to-violet-500/20
          blur-3xl
        "
      />

      {/* Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-3xl
          shadow-[0_0_100px_rgba(124,58,237,0.15)]
        "
      >
        {/* Reflection */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white/10
            via-transparent
            to-transparent
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[36px]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
  "
        />

        <div className="relative p-10">
          {/* Header */}
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-cyan-300
              "
            >
              Authentication
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                tracking-tight
                text-white
              "
            >
              Enter FlowPilot
            </h2>

            <p
              className="
                mt-3
                text-slate-400
                leading-relaxed
              "
            >
              Continue with your preferred account and access your AI-powered
              content distribution workspace.
            </p>
          </div>

          {/* OAuth */}
          <OauthButtons />

          {/* Divider */}
          <div
            className="
    my-10
    h-px
    bg-gradient-to-r
    from-transparent
    via-cyan-400/30
    to-transparent
  "
          />

          {/* Features */}
          <TrustSection />
        </div>
      </div>
    </motion.div>
  );
}
