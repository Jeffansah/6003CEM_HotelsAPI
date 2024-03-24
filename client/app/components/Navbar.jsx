"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const navlinks = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: "MY ACCOUNT",
      url: "/account",
    },
  ];

  return (
    <div className="px-14 py-10 max-md:px-7 max-md:py-6  border-b border-b-gray-200/30 relative z-3">
      <div className="grid grid-cols-3 items-center max-md:hidden">
        <div className="flex items-center gap-6">
          {navlinks.map((link) => (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    linkname={link.name}
                    className="bg-transparent p-0 text-white"
                  >
                    {link.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={`p-24 ${link.name === "HOME" ? "hidden" : ""}`}
                  >
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ))}
        </div>
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="flex justify-end gap-6 items-center text-white ">
          <p className="font-light">Tel: +44 346 273 602</p>
          <button className="border border-white bg-transparent px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300">
            Login
          </button>
          <button className="border border-white bg-white text-black px-6 py-3 hover:bg-transparent hover:text-white transition-colors duration-200">
            Register
          </button>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Navbar;
