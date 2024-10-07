"use client";

import { useState } from "react";
import Sidebar from "../_components/messaging/Sidebar";
import MessageInput from "../_components/MessageInput";
import ChatNav from "../_components/ChatNav";

const Chat: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 px-4 py-2 ${
          isCollapsed ? "ml-14" : "ml-64"
        }`}
        style={{ minWidth: 0 }}
      >
        <ChatNav />
        <MessageInput />
      </div>
    </div>
  );
};

export default Chat;
