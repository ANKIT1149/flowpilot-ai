"use client";

import Link from "next/link";

import { Brand } from "@/components/Brand";

export function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="CreatorLens AI Home"
      className="group flex shrink-0 items-center"
    >
      <Brand
        size="md"
        animated
        className="
          transition-transform
          duration-300
          group-hover:scale-[1.02]
        "
      />
    </Link>
  );
}