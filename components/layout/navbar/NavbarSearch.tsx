"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/cn";
import { radius, spacing, typography } from "@/src/theme/design-system";

export function NavbarSearch() {
  return (
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={cn(
        "flex items-center border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10",

        spacing.search.height,
        spacing.search.padding,
        spacing.search.gap,

        radius.pill
      )}
    >
      <Search
        size={16}
        className="text-zinc-400"
      />

      <span
        className={cn(
          typography.search,
          "text-zinc-400"
        )}
      >
        Search
      </span>

      <kbd
        className={cn(
          "rounded-md border border-white/10 bg-black/20",

          spacing.badge.padding,

          typography.shortcut,

          "text-zinc-500"
        )}
      >
        ⌘K
      </kbd>
    </motion.button>
  );
}