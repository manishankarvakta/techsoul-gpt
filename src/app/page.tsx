import { Input } from "@/components/ui/input";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Separator } from "@/components/ui/separator";
import {
  ArrowUp,
  CircleAlert,
  LayoutDashboard,
  Paperclip,
  Triangle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen grid grid-cols-[250px_1fr]">
      {/* Sidebar */}
      <aside className="bg-gray-100 p-4">
        <div className="text-gray-600 00 flex gap-2 items-center mt-2">
          <div className=" bg-white p-1 rounded-full flex justify-center items-center">
            <Triangle className="h-4 w-4 rotate-180 fill-black" />
          </div>
          techsoul ai
        </div>
        <div className="text-gray-600 00 flex gap-2 items-center py-2">
          <LayoutDashboard className="h-4 w-4" /> Explore Gpt
        </div>
        <Separator className="my-4" />
        <h2 className="text-md font-semibold mb-6 text-slate-600">
          Previous 7 Days
        </h2>
        <ul className="space-y-3 text-sm">
          <li className="text-gray-600 hover:text-black cursor-pointer">
            Supershop POS Software Plan
          </li>
          <li className="text-gray-600 hover:text-black cursor-pointer">
            Puppeteer Code Correction
          </li>
          <li className="text-gray-600 hover:text-black cursor-pointer">
            Dynamic Route Structure Next.js
          </li>
          <li className="text-gray-600 hover:text-black cursor-pointer">
            TechSoul ERP POS Brochure
          </li>
          <li className="text-gray-600 hover:text-black cursor-pointer">
            Employee Tracking AI Project
          </li>
        </ul>

        <Separator className="my-4" />

        <h2 className="text-md font-semibold mb-6 text-slate-600">
          Previous 30 Days
        </h2>
        <ul className="space-y-3 text-sm">
          <li className="text-gray-600 hover:text-black cursor-pointer">
            Next.js Assistance Request
          </li>
          <li className="text-gray-600 hover:text-black cursor-pointer">
            Generate Calendar Events
          </li>
          <li className="text-gray-600 hover:text-black cursor-pointer">
            Dynamics BC Project Scope
          </li>
          <li className="text-gray-600 hover:text-black cursor-pointer">
            Add Dummy Entries
          </li>
          <li className="text-gray-600 hover:text-black cursor-pointer">
            Project Development Planning
          </li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="bg-white px-10 pt-4 flex flex-col h-screen">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-slate-400">techsoul o1</h1>
          <div className="text-gray-500 flex items-center gap-2 text-muted-foreground text-xs">
            <CircleAlert className="w-4 h-4" />
            Memory Full
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        {/* <div className="flex flex-col gap-4 "> */}
        {/* Cards Section */}
        <div className="flex-1 items-center justify-center"></div>
        {/* Input section */}
        <div className="flex items-center flex-col justify-center">
          <div className="flex w-[550px] items-center gap-2 bg-gray-100 px-2 py-1 rounded-full">
            <Paperclip className="w-6 h-6 ms-2" />
            <Input
              type="text"
              placeholder="Ask a question"
              className="border-none bg-transparent focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus:ring-0 focus:outline-none p-2 rounded-md"
            />
            <div className="flex bg-black cursor-pointer rounded-full text-white p-2 items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </div>
          </div>
          <p className="py-2 text-xs text-muted-foreground text-slate-500">
            Ai can make mistake
          </p>
        </div>
      </main>
    </div>
  );
}
