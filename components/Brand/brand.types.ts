export type BrandSize = "sm" | "md" | "lg";

export interface BrandProps {
  size?: BrandSize;
  animated?: boolean;
  className?: string;
}