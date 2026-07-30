"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BrainCircuit,
  Compass,
  Lightbulb,
  Radar,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const sections = [
  {
    icon: Sparkles,
    title: "Executive Summary",
    description: "High-level creator insights",
  },
  {
    icon: Compass,
    title: "Niche Opportunity",
    description: "Untapped market positioning",
  },
  {
    icon: BrainCircuit,
    title: "Audience Intelligence",
    description: "Behavior & interest analysis",
  },
  {
    icon: Radar,
    title: "Competitor Landscape",
    description: "Strengths & weaknesses mapped",
  },
  {
    icon: Target,
    title: "Content Gap Analysis",
    description: "Topics your competitors miss",
  },
  {
    icon: TrendingUp,
    title: "Trend Forecasting",
    description: "Emerging content opportunities",
  },
  {
    icon: BadgeCheck,
    title: "Opportunity Score",
    description: "AI confidence rating",
  },
  {
    icon: Lightbulb,
    title: "AI Video Ideas",
    description: "Personalized content concepts",
  },
  {
    icon: Rocket,
    title: "30-Day Growth Roadmap",
    description: "Actionable creator strategy",
  },
];

export default function ReportContents() {
  return (
    <div className="relative max-w-md">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/10
            px-4
            py-1.5
            text-xs
            font-medium
            uppercase
            tracking-[0.25em]
            text-cyan-300
          "
        >
          Premium Intelligence
        </span>

        <h2 className="mt-6 text-4xl font-semibold text-white">
          Everything the AI compiles into your report.
        </h2>

        <p className="mt-4 text-lg leading-8 text-white/60">
          A consulting-grade document generated specifically for the creator
          you're analyzing.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative mt-12">
        {/* Vertical Line */}
        <div
          className="
            absolute
            left-5
            top-0
            bottom-0
            w-px
            bg-gradient-to-b
            from-cyan-400/60
            via-cyan-400/20
            to-transparent
          "
        />

        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={section.title}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.55,
                }}
                className="group relative flex gap-5"
              >
                {/* Node */}
                <div className="relative z-10">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(34,211,238,.2)",
                        "0 0 18px rgba(34,211,238,.8)",
                        "0 0 0px rgba(34,211,238,.2)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.15,
                    }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-cyan-400/30
                      bg-cyan-400/10
                      backdrop-blur-xl
                    "
                  >
                    <Icon className="h-4 w-4 text-cyan-300" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <h4
                    className="
                      text-base
                      font-medium
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-cyan-300
                    "
                  >
                    {section.title}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-white/55">
                    {section.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          px-5
          py-4
          backdrop-blur-2xl
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            h-2.5
            w-2.5
            rounded-full
            bg-emerald-400
          "
        />

        <span className="text-sm text-white/70">
          Personalized for every creator you analyze
        </span>
      </motion.div>
    </div>
  );
}