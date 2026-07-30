'use client';

import { motion } from 'framer-motion';
import Network from './Network';
import AICore from '../auth/core/AiCore';
import { IntelligenceModule, ResearchModule, StrategyModule } from '../module';
import PremiumReport from '../premium_report/PremiumReport';

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-25">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/5
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-cyan-300
              backdrop-blur-xl
            "
          >
            Intelligence Engine
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-black
              leading-tight
              tracking-tight
              font-serif
              text-white
              lg:text-6xl
            "
          >
            How CreatorLens
            <br />
            Thinks Before You Create
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-white/60
            "
          >
            CreatorLens doesn't simply analyze a YouTube video. It researches
            your niche, understands your audience, discovers opportunities, and
            generates an actionable growth strategy powered by AI.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* AI ENGINE */}
        {/* ========================================================= */}

        <div className="relative mt-70">
          <Network>
            <AICore />
            <ResearchModule />

            <IntelligenceModule />

            <StrategyModule />
          </Network>
          {/* <Network>
            <AICore />

            <ResearchModule />

            <IntelligenceModule />

            <StrategyModule />
          </Network> */}
        </div>

        {/* ========================================================= */}
        {/* FINAL REPORT */}
        {/* ========================================================= */}

        <div className="mt-0">
          <PremiumReport />
        </div>
      </div>
    </section>
  );
}
