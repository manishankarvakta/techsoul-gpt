"use client";
import ChatInput from "./ChatInput";
import ChatArea from "./ChatArea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
import { CircleAlert } from "lucide-react";
import React, { useState } from "react";
import { Ollama } from "ollama";

interface MessageProps {
  id: number;
  message: string;
  role: string;
}

const MainContent = () => {
  const ollama = new Ollama({ host: "http://127.0.0.1:11434" });
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // const setResponse = (data: MessageProps) => {
  //   const messageData = [...messages, data];
  //   setMessages(messageData);
  // };

  const handleSendMessage = async (message: string) => {
    setLoading(true);

    // Create message data for the user's message
    const userMessageData = {
      id: messages.length + 1, // Use messages.length to set a unique ID
      message: message,
      role: "user",
    };

    // Update the messages state with the user's message first
    const updatedMessages = [...messages, userMessageData];
    setMessages(updatedMessages);
    console.log("Message sent:", message);

    // Send the message to the local ollama model
    const response = await ollama.chat({
      model: "llama3.2",
      messages: [{ role: "user", content: message }],
    });

    // Check if the response is complete
    if (response.done) {
      const assistantMessageData = {
        id: updatedMessages.length + 1, // Use updatedMessages.length for the assistant's message ID
        message: response.message.content,
        role: "assistant",
      };

      console.log(assistantMessageData);
      // Add the assistant's message to the state
      setMessages((prevMessages) => [...prevMessages, assistantMessageData]);
    }

    setLoading(false);
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
