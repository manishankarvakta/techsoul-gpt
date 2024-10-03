import { Triangle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="text-gray-600 flex gap-2 items-center">
      <div className="flex justify-center items-center gap-2">
        <Triangle className="h-8 w-8 rotate-180 fill-black bg-white p-[5px] rounded-full" />
        <h1 className="text-xl font-bold">
          TechSoul <span className="text-primary">AI</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
