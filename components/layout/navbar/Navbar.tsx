'use client';

import { NavbarActions } from './NavbarActions';
import { NavbarContainer } from './NavbarContainer';
import { NavbarLinks } from './NavbarLinks';
import { NavbarLogo } from './NavbarLogo';

export function Navbar() {
  return (
      <NavbarContainer>
      <div className="flex items-center">
        <NavbarLogo />
      </div>

      <NavbarLinks />

      <NavbarActions />
    </NavbarContainer>
  );
}
