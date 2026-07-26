export const hero = {
  section: {
    container: "max-w-7xl",
  },

  search: {
    container:
      "relative flex h-20 items-center overflow-hidden rounded-[28px]",

    inputWrapper:
      "flex flex-1 items-center gap-4 px-6",

    input:
      "h-full w-full bg-transparent text-lg font-medium text-white placeholder:text-zinc-500 outline-none",

    button:
      "h-14 rounded-2xl px-7",

    suggestions:
      "mt-6 flex flex-wrap items-center justify-center gap-3",
  },
} as const;