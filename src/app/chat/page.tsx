import React from "react";

import MainContent from "./_components/mainContent";
import SideBar from "./_components/SideBar";

const ChatPage = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <MainContent />
    </div>
  );
};

export default ChatPage;
