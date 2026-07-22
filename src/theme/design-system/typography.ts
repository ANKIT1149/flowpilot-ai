export const typography = {
  display: 'text-5xl font-bold tracking-tight',

  heading: 'text-3xl font-semibold tracking-tight',

  title: 'text-xl font-semibold',

  body: 'text-base',

  caption: 'text-sm text-zinc-400',

  label: 'text-sm font-medium',

  navLink: 'text-md font-medium font-serif tracking-tight',

  search: 'text-lg font-medium font-serif font-semibold',

  shortcut: 'text-xs font-medium',

  badge: 'text-xs font-semibold',

  credits: {
    value: 'text-md font-semibold',
    label:
      'text-xs font-medium uppercase tracking-wide font-serif font-semibold',
  },

  hero: {
    title:
      'text-5xl font-bold tracking-tight leading-[1.05] sm:text-6xl lg:text-7xl',
    description: 'text-lg leading-8 text-zinc-400 sm:text-xl',
  },
} as const;
