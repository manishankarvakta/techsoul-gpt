"use client";
import ChatInput from "./ChatInput";
import ChatArea from "./ChatArea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
import { CircleAlert } from "lucide-react";
import React, { useState } from "react";

interface MessageProps {
  id: number;
  message: string;
  role: string;
}

const MainContent = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // const setResponse = (data: MessageProps) => {
  //   const messageData = [...messages, data];
  //   setMessages(messageData);
  // };

  const handleSendMessage = async (message: string) => {
    setLoading(true);
  
    const userMessageData = {
      id: messages.length + 1,
      message: message,
      role: "user",
    };
  
    const updatedMessages = [...messages, userMessageData];
    setMessages(updatedMessages);
  
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      const assistantMessageData = {
        id: updatedMessages.length + 1,
        message: data.message,
        role: "assistant",
      };
  
      setMessages((prevMessages) => [...prevMessages, assistantMessageData]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-grow">
      <div className="flex flex-col h-screen px-6 py-4">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-normal text-slate-400">Soul o1</h1>
          <div className="text-gray-500 flex items-center gap-2 text-muted-foreground text-xs">
            <CircleAlert className="w-4 h-4" />
            Memory Full
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        {/* <ScrollArea className="flex-1"> */}
        <ChatArea messages={messages} loading={loading} />
        {/* </ScrollArea> */}
        <div className="flex justify-center">
          <ChatInput sendMessage={handleSendMessage} loading={loading} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
