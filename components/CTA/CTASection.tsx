'use client';

import { motion, Variants } from 'framer-motion';
import { CTAOrb } from './CTAOrbs';
import { CTAButton } from './CTAButton';
import { CTAPill } from './CTAPill';
import { Brain, ShieldCheck, Sparkles } from 'lucide-react';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(10px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-25">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,.06),transparent_70%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
      >
        {/* Badge */}

        <motion.div
          variants={item}
          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-xl"
        >
          AI Research Starts Here
        </motion.div>

        {/* Heading */}

        <motion.h2
          variants={item}
          className="mt-8 max-w-6xl text-4xl font-bold font-serif tracking-tight text-white md:text-6xl"
        >
          Stop Guessing.
          <br />
          Start Creating with Confidence.
        </motion.h2>

        {/* Subtitle */}

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-lg leading-8 text-white/65"
        >
          Analyze any YouTube video, uncover hidden opportunities, understand
          your competitors, and discover what your audience actually wants
          before you publish.
        </motion.p>

        {/* AI Orb Placeholder */}

        <motion.div variants={item} className="mt-14">
          <CTAOrb />
        </motion.div>

        {/* CTA Button Placeholder */}

        <motion.div variants={item} className="mt-12">
          <CTAButton />
        </motion.div>

        {/* Trust Pills */}

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <CTAPill
            icon={<Sparkles size={18} />}
            title="Free Analysis"
            subtitle="Start exploring instantly"
          />

          <CTAPill
            icon={<ShieldCheck size={18} />}
            title="No Credit Card"
            subtitle="No payment required"
          />

          <CTAPill
            icon={<Brain size={18} />}
            title="AI Powered"
            subtitle="Advanced research engine"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
