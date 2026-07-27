'use client';

import { cn } from '@/lib/cn';

import { HeroBadge } from './HeroBadge';

import type { HeroProps } from './hero.types';
import { HeroHeadline } from './HeroHeadline';
import { HeroDescription } from './HeroDescription';
import { HeroSearch } from './HeroSearch/HeroSearch';

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        'relative flex min-h-[calc(100vh-72px)] items-center justify-center px-6 pt-0 pb-0',
        className
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <HeroBadge />
        <HeroHeadline />
        <HeroDescription />

        <div className="mt-10 w-full max-w-5xl">
          <HeroSearch />
        </div>

        <div className="mt-20 w-full"></div>
      </div>
    </section>
  );
}
