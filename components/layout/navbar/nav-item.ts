import { NavItem } from "@/interface/NavbarItem";
import {
  Home,
  LayoutDashboard,
  Sparkles,
  CreditCard,
} from "lucide-react";



export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Features",
    href: "/features",
    icon: Sparkles,
  },
  {
    label: "Pricing",
    href: "/pricing",
    icon: CreditCard,
  },
];