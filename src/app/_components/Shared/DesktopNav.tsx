"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "@/lib/links";
import MobileNav from "./MobileNav";

const DesktopNav = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathname === "/chat") return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/50 py-6 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between transition-all">
        <Logo chat="" />
        <div className="gap-6 hidden lg:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative uppercase font-semibold transition-all duration-300 
                ${link.path === pathname ? "text-black" : "text-black/70"} 
                hover:text-black group
              `}
            >
              {link.label}

              <span
                className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-black 
                  transition-all duration-300 ease-in-out 
                  ${link.path === pathname ? "scale-x-100" : "scale-x-0"}
                  group-hover:scale-x-100
                `}
              ></span>
            </Link>
          ))}
        </div>
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
