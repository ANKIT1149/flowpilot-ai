"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ReactNode } from "react";

interface CTAPillProps {
  icon?: ReactNode;
  title: string;
  subtitle: string;
}

export function CTAPill({
  icon,
  title,
  subtitle,
}: CTAPillProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 22,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        px-5
        py-4
        min-w-[220px]
        cursor-default
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            inset-0
            rounded-2xl
            bg-cyan-400/5
          "
        />

        <div
          className="
            absolute
            inset-0
            rounded-2xl
            shadow-[0_0_60px_rgba(34,211,238,.18)]
          "
        />
      </div>

      {/* Animated Border */}

      <div
        className="
          absolute
          inset-0
          rounded-2xl
          border
          border-transparent
          transition-all
          duration-500
          group-hover:border-cyan-400/30
        "
      />

      {/* Shine */}

      <motion.div
        initial={{ x: "-180%" }}
        whileHover={{ x: "250%" }}
        transition={{
          duration: 1,
        }}
        className="
          absolute
          inset-y-0
          w-20
          -skew-x-12
          bg-white/20
          blur-md
        "
      />

      <div className="relative flex items-start gap-4">
        {/* Icon */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-cyan-400/20
            bg-cyan-500/10
            text-cyan-300
          "
        >
          {icon ?? <Check size={18} />}
        </motion.div>

        {/* Text */}

        <div>
          <h4 className="font-semibold text-white">
            {title}
          </h4>

          <p className="mt-1 text-xs text-white/50">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Bottom Accent */}

      <motion.div
        initial={{
          width: "20%",
        }}
        whileHover={{
          width: "100%",
        }}
        transition={{
          duration: 0.45,
        }}
        className="
          absolute
          bottom-0
          left-0
          h-px
          bg-gradient-to-r
          from-cyan-400
          via-cyan-300
          to-transparent
        "
      />
    </motion.div>
  );
}