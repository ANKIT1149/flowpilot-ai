"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/cn";

import type { InputFieldProps } from "./input.types";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ value, onChange, onFocus, onBlur }, ref) => {
    return (
      <input
        ref={ref}
        type="url"
        inputMode="url"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder=""
        className={cn(
          "relative z-20",
          "h-14 w-full",
          "bg-transparent",
          "border-0 outline-none ring-0",
          "text-xl font-serif tracking-[-0.02em]",
          "text-white",
          "caret-cyan-400",
          "placeholder:text-transparent",
          "selection:bg-indigo-500/30",
          "focus:outline-none focus:ring-0 focus:ring-offset-0",
        )}
      />
    );
  }
);

InputField.displayName = "InputField";