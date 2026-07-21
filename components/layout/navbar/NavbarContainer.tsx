"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/cn";
import { Glass } from "@/components/ui/Glass";
import { NAVBAR } from "./navbar.constant";

interface NavbarContainerProps {
  children: React.ReactNode;
}

export function NavbarContainer({
  children,
}: NavbarContainerProps) {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > NAVBAR.SCROLL_THRESHOLD);
  });

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "fixed inset-x-0",
        NAVBAR.TOP_OFFSET,
        NAVBAR.Z_INDEX,
        "flex justify-center px-4"
      )}
    >
      <Glass
        variant="navbar"
        className={cn(
          "w-full",
          NAVBAR.MAX_WIDTH,
          NAVBAR.PADDING_X,
          "transition-all duration-300",

          scrolled
            ? "h-16 shadow-2xl"
            : "h-[72px]"
        )}
      >
        <div className="flex h-full items-center justify-between">
          {children}
        </div>
      </Glass>
    </motion.header>
  );
}