import React from "react";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";

export interface NavItems {
  label: string;
  href: string;
  active: boolean;
}

const navItems = [
  {
    label: "Home",
    href: "/",
    active: false,
  },
  {
    label: "todos",
    href: "/todos",
    active: false,
  },
  {
    label: "about",
    href: "/about",
    active: false,
  },
  {
    label: "profile",
    href: "/profile",
    active: false,
  },
];

const Navbar = async () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between  ">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">TodoList App</p>
          </Link>
          <MainNav data={navItems} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
