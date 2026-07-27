"use client";

import { motion } from "framer-motion";

export default function FooterShimmer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: ["-120%", "840%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatDelay: 6,
          ease: "linear",
        }}
        className="
          absolute
          -inset-y-20
          left-0
          w-40
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-white/[0.12]
          to-transparent
          blur-xl
        "
      />

      {/* Secondary Cyan Reflection */}
      <motion.div
        animate={{
          x: ["-150%", "750%"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatDelay: 10,
          ease: "linear",
        }}
        className="
          absolute
          -inset-y-32
          left-0
          w-72
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-cyan-300/[0.08]
          to-transparent
          blur-3xl
        "
      />
    </div>
  );
}