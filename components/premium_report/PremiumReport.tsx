"use client";

import { motion } from "framer-motion";

import ReportCard from "./ReportCard";
import ReportContents from "./ReportContent";
import ReportStats from "./ReportStats";

export default function PremiumReport() {
  return (
    <section className="relative pt-2 overflow-hidden">
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[900px]
            w-[900px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-5
              py-2
              text-xs
              uppercase
              tracking-[0.3em]
              text-cyan-300
            "
          >
            Premium Intelligence Report
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-bold
              leading-tight
              text-white
              lg:text-6xl
            "
          >
            Every insight becomes a
            <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
              {" "}
              consulting-grade strategy.
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-white/60
            "
          >
            CreatorLens transforms thousands of data points into a beautifully
            structured intelligence report that explains exactly how a creator
            grows.
          </p>
        </motion.div>

        {/* Energy Beam */}
        <div className="relative mx-auto my-10 h-36 w-px">
          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleY: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-cyan-400
              via-cyan-300
              to-transparent
            "
          />

          <motion.div
            animate={{
              y: [0, 120],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-1/2
              h-8
              w-8
              -translate-x-1/2
              rounded-full
              bg-cyan-300
              blur-xl
            "
          />
        </div>

        {/* Main Grid */}
        <div
          className="
            grid
            items-center
            gap-20
            lg:grid-cols-2
          "
        >
          <ReportContents />

          <div className="relative flex justify-center">
            <ReportCard />
          </div>
        </div>

        {/* Divider */}
        <div
          className="
            my-24
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        {/* Stats */}
        <ReportStats />
      </div>
    </section>
  );
}