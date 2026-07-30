'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

interface FeatureModuleProps {
  title: string;
  subtitle: string;
  badge: string;
  items: string[];
  position: 'top' | 'left' | 'right';
  icon: LucideIcon;
}

export default function FeatureModule({
  title,
  subtitle,
  badge,
  items,
  icon: Icon,
  position,
}: FeatureModuleProps) {
  const positionClasses = {
    top: `
      absolute
      left-1/2
      top-[-230px]
      -translate-x-1/2
    `,
    left: `
      absolute
      left-0
      top-1/2
      -translate-y-1/2
    `,
    right: `
      absolute
      right-0
      top-1/2
      -translate-y-1/2
    `,
  };

  const initialAnimation = {
    opacity: 0,
    scale: 0.9,
    x: position === 'left' ? -80 : position === 'right' ? 80 : 0,
    y: position === 'top' ? -80 : 0,
  };

  return (
    <motion.div
      initial={initialAnimation}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        'group z-20 h-85 w-[340px]',
        positionClasses[position]
      )}
    >
      {/* Animated Gradient Border */}
      <div
        className="
          absolute
          inset-0
          rounded-[32px]
          bg-gradient-to-br
          from-cyan-400/30
          via-white/10
          to-violet-500/30
          p-px
        "
      >
        {/* Glass Panel */}
        <div
          className="
            relative
            flex
            h-full
            flex-col
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-3xl
          "
        >
          {/* Ambient Glow */}
          <div
            className="
              absolute
              left-1/2
              top-0
              h-56
              w-56
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-400/20
              blur-[90px]
              transition-all
              duration-700
              group-hover:scale-125
            "
          />

          {/* Reflection */}
          <div
            className="
              absolute
              inset-x-8
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/70
              to-transparent
            "
          />

          {/* Shimmer */}
          <motion.div
            animate={{
              x: ['-140%', '180%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 5,
              ease: 'linear',
            }}
            className="
              absolute
              inset-y-0
              w-20
              -skew-x-12
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
            "
          />

          {/* Connection Port */}
          {position === 'top' && (
            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-3
                w-3
                -translate-x-1/2
                translate-y-1/2
                rounded-full
                bg-cyan-300
                shadow-[0_0_20px_rgba(34,211,238,.8)]
              "
            />
          )}

          {position === 'left' && (
            <div
              className="
                absolute
                right-0
                top-1/2
                h-3
                w-3
                translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-300
                shadow-[0_0_20px_rgba(34,211,238,.8)]
              "
            />
          )}

          {position === 'right' && (
            <div
              className="
                absolute
                left-0
                top-1/2
                h-3
                w-3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-300
                shadow-[0_0_20px_rgba(34,211,238,.8)]
              "
            />
          )}

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col p-7">
            {/* Icon */}
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.12,
              }}
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
              "
            >
              <Icon className="h-8 w-8 text-cyan-300" />
            </motion.div>

            {/* Badge */}
            <span
              className="
                mt-5
                w-fit
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/10
                px-3
                py-1
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-cyan-300
              "
            >
              {badge}
            </span>

            {/* Title */}
            <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>

            {/* Subtitle */}
            <p className="mt-3 text-sm leading-7 text-white/60">{subtitle}</p>

            {/* Items */}
            <div className="mt-auto space-y-3">
              {items.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    x: 6,
                  }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.35, 1, 0.35],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-cyan-300
                    "
                  />

                  <span className="text-sm text-white/75">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
