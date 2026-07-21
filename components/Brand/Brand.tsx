"use client";

import { cn } from "@/lib/cn";
import { BrandIcon } from "./BrandIcon";
import { BrandText } from "./BrandText";
import { BrandProps } from "./brand.types";

export function Brand({
  size = "md",
  animated = true,
  className,
}: BrandProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        className
      )}
    >
      <BrandIcon
        size={size}
        animated={animated}
      />

      <BrandText
        size={size}
      />
    </div>
  );
}