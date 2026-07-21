"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import { spacing, typography, radius } from "@/src/theme/design-system";
import { NavItem } from "@/interface/NavbarItem";
;

interface NavbarLinkProps {
  item: NavItem;
}

export function NavbarLink({ item }: NavbarLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === item.href;

  return (
    <Link href={item.href}>
      <motion.div
        whileHover={{
          y: -1,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className={cn(
          "relative flex items-center transition-colors duration-300",

          spacing.navLink.padding,
          spacing.navLink.gap,

          typography.navLink,

          radius.pill,

          isActive
            ? "text-white"
            : "text-zinc-400 hover:text-white"
        )}
      >
        {isActive && (
          <motion.div
            layoutId="navbar-pill"
            className="
              absolute
              inset-0
              rounded-full
              border
              border-white/10
              bg-white/5
            "
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 28,
            }}
          />
        )}

        <span className="relative z-10">
          {item.label}
        </span>
      </motion.div>
    </Link>
  );
}