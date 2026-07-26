'use client';

import { cn } from '@/lib/cn';
import { spacing } from '@/src/theme/design-system';
import { NavbarSearch } from './NavbarSearch';
import { NavbarCredits } from './NavbarCredits';
import { NavbarProfile } from './NavbarProfile';

export function NavbarActions() {
  return (
    <div className={cn('flex items-center justify-end', spacing.actions.gap)}>
      <NavbarSearch />
      <NavbarCredits />
      <NavbarProfile />
    </div>
  );
}
