'use client';

import { motion, Variants } from 'framer-motion';
import { MetricCenter } from './MetricCenter';
import { Brain, Clock3, Database, Globe } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { AnimatedBeam } from './ConnectionLines';
import { FloatingParticles } from './FloatingParticle';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(12px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function StatsSection() {
  return (
    <section className="relative overflow-hidden py-10">
     
      <FloatingParticles />

      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto flex max-w-7xl flex-col items-center px-6"
      >
        {/* Heading */}

        <motion.span
          variants={item}
          className="text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300"
        >
          AI ENGINE
        </motion.span>

        <motion.h2
          variants={item}
          className="mt-6 max-w-4xl text-center text-5xl font-bold tracking-tight text-white"
        >
          AI Engine at Scale
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-center text-lg leading-8 text-white/60"
        >
          Every CreatorLens report is powered by millions of indexed videos,
          hundreds of extracted signals, and continuous AI reasoning.
        </motion.p>

        {/* Metrics */}

        <div className="relative mt-24 w-full max-w-5xl">
          <AnimatedBeam d="M500 170 C420 170 340 170 250 190" delay={0} />

          <AnimatedBeam d="M500 170 C580 170 660 170 750 190" delay={0.2} />

          <AnimatedBeam d="M500 250 C440 300 390 340 330 420" delay={0.4} />

         <AnimatedBeam d="M500 250 C560 300 610 340 670 420" delay={0.6} />
                  
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <MetricCenter />
          </div>
          {/* Left */}

          <div className="absolute left-0 top-16">
            <MetricCard
              icon={<Database size={24} />}
              value="1.2M+"
              label="Videos Indexed"
            />
          </div>

          {/* Right */}

          <div className="absolute right-0 top-16">
            <MetricCard
              icon={<Brain size={24} />}
              value="156 Signals"
              label="AI Signals"
            />
          </div>

          {/* Bottom Left */}

          <div className="absolute bottom-0 left-24">
            <MetricCard
              icon={<Clock3 size={24} />}
              value="18 sec"
              label="Avg Analysis"
            />
          </div>

          {/* Bottom Right */}

          <div className="absolute bottom-0 right-24">
            <MetricCard
              icon={<Globe size={24} />}
              value="24/7 H"
              label="AI Engine"
            />
          </div>
          <div className="h-130" />
        </div>
      </motion.div>
    </section>
  );
}
