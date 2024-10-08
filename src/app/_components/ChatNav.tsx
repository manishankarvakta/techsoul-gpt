"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import useUser from "@/hooks/useUser";
import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import { MdOutlineAccountCircle } from "react-icons/md";

const ChatNav = () => {
  const user = useUser();

  console.log(user);

  const handleLogOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-2xl font-bold text-slate-500">techsoul o1</h1>
      <div className="text-gray-500 flex items-center gap-2 text-muted-foreground text-xs">
        <CircleAlert className="w-4 h-4" />
        Memory Full
      </div>
      {/* conditional user and authentication */}
      {/* {user && ( */}
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="cursor-pointer h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-60">
          <Button variant="ghost" className="h-9 w-full">
            <span className="flex items-center gap-2 text-start w-full">
              <MdOutlineAccountCircle size={20} />
              Profile
            </span>
          </Button>
          <Button variant="ghost" className="h-9 w-full">
            <span className="flex items-center gap-2 text-start w-full">
              <IoSettingsOutline size={20} />
              Setting
            </span>
          </Button>
          <Separator className="my-4" />
          <Button onClick={handleLogOut} variant="ghost" className="h-9 w-full">
            <span className="flex items-center gap-2 text-start w-full">
              <CiLogout size={20} />
              Logout
            </span>
          </Button>
        </PopoverContent>
      </Popover>
      {/* )} */}
    </div>
  );
};

export default ChatNav;
