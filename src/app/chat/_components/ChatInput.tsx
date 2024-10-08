"use client";
import React, { useState } from "react";
import { ArrowUp, Paperclip } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// type Inputs = {
//   message: string;
// };

interface MessageProps {
  sendMessage?: (message: string) => void;
  loading: boolean;
}

const ChatInput: React.FC<MessageProps> = ({ sendMessage, loading }) => {
  const [message, setMessage] = useState<string>("");

  const handleMessage = () => {
    console.log(message);
    if (sendMessage) {
      // Check if sendMessage is defined
      sendMessage(message);
    }

    setMessage(""); // Clear the input field after sending the message
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleMessage();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center md:w-[60%] w-full">
      <div className="flex w-full items-center gap-2 bg-gray-50 rounded-full px-4 py-2 shadow-md">
        <Paperclip className="w-5 h-5 text-gray-500 cursor-pointer" />
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Message to SoulGpt..."
          className="border-none h-8 bg-none  focus-visible:outline-none focus-visible:ring-0  py-3 px-4 shadow-none rounded-md flex-grow text-md focuse-visable:border-none"
        />
        <Button
          className={`flex cursor-pointer rounded-full disabled:cursor-not-allowed text-white p-2 items-center justify-center h-8 w-8`}
          onClick={handleMessage}
          disabled={message === "" || loading ? true : false}
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>
      <p className="py-2 text-xs text-muted-foreground text-slate-500">
        AI can make mistakes
      </p>
    </div>
  );
};

export default ChatInput;
