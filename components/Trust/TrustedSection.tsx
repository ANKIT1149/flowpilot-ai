"use client";

import { motion } from "framer-motion";

const brands = [
  "YouTube Creators",
  "Channel Strategists",
  "Creator Agencies",
  "Video Editors",
  "Growth Teams",
  "Educators",
  "Media Studios",
  "Content Researchers",
];

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden py-0">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Heading reveal */}
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/80">
            Built for the creator economy
          </p>

          <h2 className="mt-3 text-2xl font-serif font-semibold text-white md:text-3xl">
            Research, strategy, and growth in one AI workspace
          </h2>
        </motion.div>

        {/* Glass marquee shell */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] py-5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
        >
          {/* Top highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0B0F19] via-[#0B0F19]/70 to-transparent" />

          <motion.div
            className="flex w-max items-center gap-4 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" } as any}
          >
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand}-${index}`}
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-white/70 backdrop-blur-md transition-colors duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08] hover:text-white"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400/70 transition-all duration-300 group-hover:scale-125 group-hover:bg-cyan-300" />
                {brand}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-5 text-center text-sm text-white/45"
        >
          Replace these labels with real customer or partner logos as CreatorLens gains traction.
        </motion.p>
      </div>
    </section>
  );
}