"use client";

import { motion } from "framer-motion";
import {
  FileText,
  BrainCircuit,
  Lightbulb,
  Download,
} from "lucide-react";

const stats = [
  {
    icon: FileText,
    value: "40+",
    label: "Pages",
    description: "Consulting-grade report",
  },
  {
    icon: BrainCircuit,
    value: "120+",
    label: "Insights",
    description: "AI-generated analysis",
  },
  {
    icon: Lightbulb,
    value: "9",
    label: "AI Models",
    description: "Working together",
  },
  {
    icon: Download,
    value: "PDF",
    label: "Export",
    description: "Instant download",
  },
];

export default function ReportStats() {
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
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
              delay: index * 0.12,
              duration: 0.6,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-white/[0.05]
              p-6
              backdrop-blur-3xl
            "
          >
            {/* Ambient Glow */}
            <div
              className="
                absolute
                left-1/2
                top-0
                h-28
                w-28
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-400/15
                blur-[60px]
                transition-all
                duration-500
                group-hover:scale-125
              "
            />

            {/* Border Highlight */}
            <div
              className="
                absolute
                inset-x-6
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-cyan-300/70
                to-transparent
              "
            />

            {/* Shimmer */}
            <motion.div
              animate={{
                x: ["-150%", "220%"],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "linear",
              }}
              className="
                absolute
                inset-y-0
                w-20
                -skew-x-12
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                "
              >
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>

              <motion.h3
                className="
                  mt-6
                  text-4xl
                  font-bold
                  text-white
                "
                whileInView={{
                  opacity: [0, 1],
                }}
              >
                {stat.value}
              </motion.h3>

              <p className="mt-2 text-sm font-medium text-cyan-300">
                {stat.label}
              </p>

              <p className="mt-3 text-sm leading-6 text-white/55">
                {stat.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}