"use client";


import { NAV_ITEMS } from "./nav-item";
import { NavbarLink } from "./NavbarLink";

export function NavbarLinks() {
  return (
    <nav
      aria-label="Primary Navigation"
      className="hidden flex-1 items-center justify-center md:flex"
    >
      <div className="flex items-center gap-2">
        {NAV_ITEMS.map((item) => (
          <NavbarLink
            key={item.href}
            item={item}
          />
        ))}
      </div>
    </nav>
  );
}