import { cva } from "class-variance-authority";

export const glassVariants = cva(
  [
    "relative",
    "overflow-hidden",
    "border",
    "transition-all",
    "duration-300",
    "backdrop-blur-xl",
    "supports-[backdrop-filter]:bg-white/5",
  ],
  {
    variants: {
      variant: {
        navbar: [
          "rounded-3xl",
          "border-white/10",
          "bg-white/[0.04]",
          "shadow-[0_8px_40px_rgba(0,0,0,0.45)]",
        ],

        card: [
          "rounded-3xl",
          "border-white/10",
          "bg-white/[0.04]",
          "shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
        ],

        dropdown: [
          "rounded-2xl",
          "border-white/10",
          "bg-zinc-900/80",
          "shadow-2xl",
        ],

        modal: [
          "rounded-[28px]",
          "border-white/10",
          "bg-zinc-900/80",
          "shadow-[0_20px_60px_rgba(0,0,0,0.55)]",
        ],
      },

      blur: {
        none: "backdrop-blur-none",
        sm: "backdrop-blur-sm",
        md: "backdrop-blur-md",
        lg: "backdrop-blur-xl",
        xl: "backdrop-blur-2xl",
      },

      border: {
        default: "border-white/10",
        strong: "border-white/20",
        none: "border-transparent",
      },
    },

    defaultVariants: {
      variant: "card",
      blur: "lg",
      border: "default",
    },
  }
);