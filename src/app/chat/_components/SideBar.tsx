"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  Bot,
  CircleFadingPlus,
  LayoutDashboard,
  MoreHorizontal,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const chatIndex = [
  {
    id: 1,
    title: "This is a new chat, tell me something new",
    date: "today",
  },
  {
    id: 2,
    title: "Let's discuss the latest updates",
    date: "today",
  },
  {
    id: 3,
    title: "Have you checked the new release?",
    date: "today",
  },
  {
    id: 4,
    title: "Any thoughts on the project?",
    date: "Previous 7 days",
  },
  {
    id: 5,
    title: "Please review the document",
    date: "Previous 7 days",
  },
  {
    id: 6,
    title: "Reminder: team meeting this week",
    date: "Previous 7 days",
  },
  {
    id: 7,
    title: "Follow up on the Previous discussion",
    date: "Previous 7 days",
  },
  {
    id: 8,
    title: "Let's finalize the report",
    date: "Previous 30 days",
  },
  {
    id: 9,
    title: "Any updates on the budget?",
    date: "Previous 30 days",
  },
  {
    id: 10,
    title: "Review Previous month's performance",
    date: "Previous 30 days",
  },
];

interface HistoryProps {
  id: number;
  title: string;
  date: string;
}
const HistoryLoops = ({ data }: { data: HistoryProps[] }) => {
  // Get unique dates
  const uniqueDates = Array.from(new Set(data.map((item) => item.date)));

  return (
    <div>
      {uniqueDates.length > 0 &&
        uniqueDates.map((date: string) => (
          <div key={date} className="pb-4">
            <div className="font-bold mb-2 text-xs text-slate-600 px-4">
              {date}
            </div>
            <div className="px-2 m-0 mb-2 flex flex-col items-start">
              {data
                .filter((item) => item.date === date)
                .map((item: HistoryProps) => (
                  <div
                    key={item.id}
                    className="flex justify-center items-center cursor-pointer text-slate-600 group px-2 py-2 hover:bg-gray-200 rounded-md w-full"
                  >
                    <span
                      className={cn(
                        "text-md font-light  overflow-hidden whitespace-nowrap text-ellipsis w-full",
                      )}
                    >
                      {item.title.slice(0, 26)}
                    </span>
                    {/* <div
                      className={cn(
                        "text-md font-light text-slate-600 truncate overflow-hidden whitespace-nowrap text-ellipsis w-96",
                      )}
                    >
                      {item.title}
                    </div> */}
                    <div>
                      <MoreHorizontal className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={cn(
        "bg-gray-50  transition-all duration-300 py-4 flex flex-col h-screen",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex flex-col  px-4 ">
        <div
          onClick={toggleSidebar}
          className="w-full flex justify-end text-gray-500 cursor-pointer pb-2"
        >
          {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
        </div>
        <ul className={cn("space-y-2 mt-2", isCollapsed && "space-y-2")}>
          <li className="px-2 py-2 hover:bg-gray-200 rounded-md cursor-pointer group">
            <Link
              href="#"
              className="flex items-center justify-between text-slate-600 group-hover:text-slate-700"
            >
              <div className="flex items-center  justify-center gap-2">
                <Bot className="h-4 w-4 transition-all rotate-180" />
                {!isCollapsed && "SoulGpt"}
              </div>
              <CircleFadingPlus className="h-5 w-5 text-gray-500 hidden group-hover:block" />
            </Link>
          </li>
          <li className="px-2 py-2 hover:bg-gray-200 rounded-md cursor-pointer group">
            <Link
              href="#"
              className="flex items-center justify-between text-slate-600 group-hover:text-slate-700"
            >
              <div className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4  transition-all rotate-180" />
                {!isCollapsed && "Explore Gpt"}
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {!isCollapsed && (
        <ScrollArea className="flex-1 max-w-full">
          <div className="py-6">
            <HistoryLoops data={chatIndex} />
          </div>
        </ScrollArea>
      )}
    </aside>
  );
};

export default Sidebar;
