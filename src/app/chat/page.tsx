import { Separator } from "@/components/ui/separator";
import { LayoutDashboard } from "lucide-react";

import MessageInput from "../_components/MessageInput";
import ChatNav from "../_components/ChatNav";
import Logo from "../_components/Shared/Logo";

const Chat = () => {
  return (
    <div className="h-screen grid grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <aside className="bg-gray-100 p-4">
        <Logo chat={"chat"} />
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
        <ChatNav />
        {/* <div className="flex flex-col gap-4 "> */}
        {/* Cards Section */}
        <div className="flex-1 items-center justify-center"></div>
        {/* Input section */}
        <MessageInput />
      </main>
    </div>
  );
};

export default Chat;
