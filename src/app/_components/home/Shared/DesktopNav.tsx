"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "@/lib/links";

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <div className="container mx-auto flex items-center justify-between py-6">
      <Logo />
      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`uppercase font-semibold transition-all hover:border-b ${
              link.path === pathname && "border-b-2"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopNav;
