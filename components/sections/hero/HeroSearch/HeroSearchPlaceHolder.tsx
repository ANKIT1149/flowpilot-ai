"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  INPUT_PLACEHOLDERS,
  PLACEHOLDER_DURATION,
  PLACEHOLDER_INTERVAL,
} from "./input.constant";

import type { InputPlaceholderProps } from "./input.types";

export function InputPlaceholder({
  value,
}: InputPlaceholderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (value.length > 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % INPUT_PLACEHOLDERS.length);
    }, PLACEHOLDER_INTERVAL);

    return () => clearInterval(interval);
  }, [value]);

  if (value.length > 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -10,
            filter: "blur(6px)",
          }}
          transition={{
            duration: PLACEHOLDER_DURATION,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-xl
            font-serif
            text-gray-400
            font-bold
          "
        >
          {INPUT_PLACEHOLDERS[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}