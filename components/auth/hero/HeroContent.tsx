"use client";

import { motion } from "framer-motion";
import HeroTypography from "./HeroTypography";
import { useMouseDepth } from "../MouseDepthProviders";

export default function HeroContent() {
  const mouse = useMouseDepth();

  return (
    <motion.section
      animate={{
        x: mouse.x * 20,
        y: mouse.y * 20,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
      className="flex flex-col justify-center"
    >
      <HeroTypography />
    </motion.section>
  );
}