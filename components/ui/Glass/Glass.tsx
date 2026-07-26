"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import { GlassProps } from "./glass.type";
import { glassVariants } from "./glass.variants";

export const Glass = forwardRef<HTMLDivElement, GlassProps>(
  (
    {
      className,
      variant,
      blur,
      border,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          glassVariants({
            variant,
            blur,
            border,
          }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Glass.displayName = "Glass";