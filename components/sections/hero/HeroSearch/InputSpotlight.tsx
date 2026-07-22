"use client";

import { MotionValue, motion, useSpring } from "framer-motion";

interface InputSpotlightProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function InputSpotlight({
  mouseX,
  mouseY,
}: InputSpotlightProps) {
  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 28,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 28,
  });

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
        pointer-events-none
        absolute
        z-0

        h-72
        w-72

        -translate-x-1/2
        -translate-y-1/2

        rounded-full

        bg-cyan-400/10

        blur-[90px]
      "
    />
  );
}