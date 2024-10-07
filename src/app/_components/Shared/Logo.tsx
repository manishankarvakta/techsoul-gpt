import { Triangle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = ({ chat }) => {
  console.log(chat);

  return (
    <Link href="/" className="text-gray-600 flex gap-2 items-center">
      <div className="flex justify-center items-center gap-1">
        <Triangle
          className={`${
            chat === "chat"
              ? "h-6 w-6 p-[3px] border rounded-full"
              : "rounded-md h-7 w-7 bg-white"
          } rotate-180 fill-black  p-[5px] `}
        />
        <h1 className={`${chat === "chat" ? "text-md" : "text-xl font-bold"} `}>
          TechSoul <span className="text-primary">AI</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
