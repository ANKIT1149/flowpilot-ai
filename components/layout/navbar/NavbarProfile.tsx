/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/cn";
import { radius, spacing } from "@/src/theme/design-system";

interface NavbarProfileProps {
  image?: string;
}

export function NavbarProfile({
  image = "https://i.pravatar.cc/150?img=3",
}: NavbarProfileProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        y: -1,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={cn(
        "flex items-center gap-2",
        "rounded-full",
        "border border-white/10",
        "bg-white/5",
        "pl-1 pr-2",
        "transition-all duration-300",
        "hover:bg-white/10",
        "hover:border-white/20"
      )}
    >
      <div className="relative">
        <img
          src={image}
          alt="Profile"
          className={cn(
            spacing.profile.height,
            spacing.profile.width,
            radius.pill,
            "object-cover"
          )}
        />

        <span
          className="
            absolute
            bottom-0
            right-0
            h-3
            w-3
            rounded-full
            border-2
            border-[#09090B]
            bg-emerald-500
          "
        />
      </div>

      <ChevronDown
        size={16}
        className="text-zinc-400"
      />
    </motion.button>
  );
}