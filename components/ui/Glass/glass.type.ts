import { VariantProps } from "class-variance-authority";
import { glassVariants } from "./glass.variants";

export interface GlassProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassVariants> {}