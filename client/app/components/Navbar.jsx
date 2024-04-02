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
import { getCookie } from "cookies-next";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { CartIcon } from "./CartIcon";

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

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getSessionData = () => {
      const user = JSON.parse(localStorage.getItem("userData"));
      const token = getCookie("access_token");
      setUser(user);
      setToken(token);
    };

    getSessionData();
  }, []);

  return (
    <div className="px-14 py-6 max-md:px-7 max-md:py-6  border-b border-b-gray-200/30 relative z-3">
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
                    <Link href={link.url}>{link.name}</Link>
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
        <div className="flex justify-end gap-10 items-center text-white ">
          <CartIcon />
          <p className="font-light">Tel: +44 346 273 602</p>
          {token !== null ? (
            user !== null && (
              <Badge className="py-3 px-6 bg-transparent border border-white text-white text-base hover:bg-white hover:text-black cursor-default">
                Hi, {user.firstname}!
              </Badge>
            )
          ) : (
            <>
              <Link href={"/auth?s=login"}>
                <button className="border border-white bg-transparent px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300">
                  Login
                </button>
              </Link>
              <Link href={"/auth?s=register"}>
                <button className="border border-white bg-white text-black px-6 py-3 hover:bg-transparent hover:text-white transition-colors duration-200">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Navbar;
