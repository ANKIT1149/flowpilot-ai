"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function ReportCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        rotateX: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        rotateY: -8,
        rotateX: 6,
        y: -12,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
        relative
        mx-auto
        h-[520px]
        w-[400px]
        perspective-[2000px]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/20
          blur-[120px]
        "
      />

      {/* Glass Report */}
      <div
        className="
          relative
          h-full
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-3xl
          shadow-[0_40px_100px_rgba(0,0,0,.45)]
        "
      >
        {/* Gradient Border */}
        <div
          className="
            absolute
            inset-0
            rounded-[40px]
            bg-gradient-to-br
            from-cyan-400/20
            via-transparent
            to-violet-500/20
          "
        />

        {/* Reflection */}
        <motion.div
          animate={{
            x: ["-150%", "200%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "linear",
          }}
          className="
            absolute
            inset-y-0
            w-24
            -skew-x-12
            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent
          "
        />

        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Header */}
          <div className="flex items-center gap-3">
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
              <Sparkles className="h-6 w-6 text-cyan-300" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                CreatorLens
              </p>

              <h3 className="text-lg font-semibold text-white">
                Premium Strategy Report
              </h3>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-white/10" />

          {/* Score */}
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-5
            "
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Opportunity Score
            </p>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="
                mt-2
                text-6xl
                font-bold
                text-white
              "
            >
              92
            </motion.h2>
          </div>

          {/* Sections */}
          <div className="mt-6 space-y-4">
            <ReportRow
              icon={BarChart3}
              title="Audience Intelligence"
            />

            <ReportRow
              icon={TrendingUp}
              title="Growth Roadmap"
            />

            <ReportRow
              icon={FileText}
              title="AI Video Ideas"
            />
          </div>

          {/* Fake Chart */}
          <div className="mt-8">
            <div className="mb-3 flex gap-2">
              {[40, 70, 55, 85, 65].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{
                    height: 10,
                  }}
                  whileInView={{
                    height: h,
                  }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.8,
                  }}
                  className="
                    w-full
                    rounded-full
                    bg-gradient-to-t
                    from-cyan-500
                    to-cyan-300
                  "
                />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div
            className="
              mt-8
              rounded-2xl
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-4
              py-3
            "
          >
            <p className="text-sm text-cyan-200">
              Compiled by CreatorLens AI
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ReportRow({
  icon: Icon,
  title,
}: {
  icon: any;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/5
        "
      >
        <Icon className="h-4 w-4 text-cyan-300" />
      </div>

      <span className="text-sm text-white/75">
        {title}
      </span>
    </div>
  );
}