"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"
import { NavItems } from "./navbar";

interface MainNavProps {
  data: NavItems[];
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `${route.href}`,
    label: route.label,
    active: pathname === `${route.href}`,
  }));

  return (
    <nav
      className="mx-6 flex items-center space-x-4 lg:space-x-6"
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black font-bold' : 'text-neutral-500'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
  )
};

export default MainNav;