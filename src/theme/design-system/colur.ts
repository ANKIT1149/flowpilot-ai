export const colors = {
  background: {
    primary: "#09090B",
    secondary: "#111113",
    tertiary: "#18181B",
  },

  surface: {
    glass: "rgba(255,255,255,0.04)",
    elevated: "rgba(255,255,255,0.06)",
    hover: "rgba(255,255,255,0.08)",
    active: "rgba(255,255,255,0.10)",
  },

  border: {
    subtle: "rgba(255,255,255,0.06)",
    default: "rgba(255,255,255,0.08)",
    strong: "rgba(255,255,255,0.14)",
  },

  text: {
    primary: "#FFFFFF",
    secondary: "#A1A1AA",
    muted: "#71717A",
    disabled: "#52525B",
  },

  accent: {
    indigo: "#6366F1",
    violet: "#8B5CF6",
    cyan: "#06B6D4",
  },

  status: {
    success: "#10B981",
    warning: "#F59E0B",
    danger: "#EF4444",
  },
} as const;