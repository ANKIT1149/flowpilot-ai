export const motion = {
  duration: {
    instant: 0.15,
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },

  spring: {
    type: "spring",
    stiffness: 260,
    damping: 24,
    mass: 1,
  },

  hover: {
    scale: 1.02,
    tap: 0.98,
  },
} as const;