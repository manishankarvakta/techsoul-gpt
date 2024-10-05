"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import useUser from "@/hooks/useUser";

const ChatNav = () => {
  const user = useUser();

  console.log(user);

  const handleLogOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-2xl font-bold text-slate-400">techsoul o1</h1>
      <div className="text-gray-500 flex items-center gap-2 text-muted-foreground text-xs">
        <CircleAlert className="w-4 h-4" />
        Memory Full
      </div>
      {/* conditional user and authentication */}
      {user && (
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Button
            onClick={handleLogOut}
            variant="outline"
            className="h-9 space-x-1"
          >
            <ArrowLeft size={20} />
            <span>Logout</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChatNav;
