"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUp, Paperclip } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import Typewriter from "typewriter-effect";
import randomAnswers from "@/lib/randomAns";

type Inputs = {
  message: string;
};

const MessageInput = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);

  const { register, handleSubmit, reset, watch } = useForm<Inputs>();

  const generateRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * randomAnswers.length);
    return randomAnswers[randomIndex];
  };

  const handleSendMessage: SubmitHandler<Inputs> = (data) => {
    setMessages((prev) => [...prev, data.message]);
    setAnswers((prev) => [...prev, generateRandomAnswer()]);
    reset();
  };

  const getMessageWidth = (message: string) => {
    const length = message.length;
    if (length < 20) return "w-auto max-w-xs";
    if (length < 50) return "w-auto max-w-md";
    if (length < 100) return "w-auto max-w-lg";
    return "w-full";
  };

  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, answers]);

  return (
    <section className="flex flex-col items-center justify-center p-4 h-full w-full">
      <div className="mb-6 w-full max-w-2xl h-[600px] rounded-lg">
        <ScrollArea className="h-full p-4">
          <div className="flex flex-col gap-4">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex flex-col">
                {/* User message */}
                <div className="flex justify-end">
                  <p
                    className={`p-3 rounded-3xl bg-gray-100 shadow-md ${getMessageWidth(
                      msg
                    )}`}
                  >
                    {msg}
                  </p>
                </div>

                {/* Bot answer */}
                <div className="flex justify-start py-2">
                  <div
                    className={`p-3 rounded-3xl ${getMessageWidth(
                      answers[idx]
                    )}`}
                  >
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .changeDelay(1)
                          .typeString(answers[idx])
                          .pauseFor(2500)
                          .callFunction(() => {
                            const cursor = document.querySelector(
                              ".Typewriter__cursor"
                            ) as HTMLElement | null;
                            if (cursor) {
                              cursor.style.display = "none";
                            }
                          })
                          .start();
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div ref={messageEndRef} />
        </ScrollArea>
      </div>

      {/* Input area */}
      <form
        onSubmit={handleSubmit(handleSendMessage)}
        className="flex items-center w-full max-w-2xl px-4"
      >
        <div className="flex w-full items-center gap-2 bg-gray-100 rounded-full px-3 py-2 shadow-md">
          <Paperclip className="w-5 h-5 text-gray-500 cursor-pointer" />
          <Input
            type="text"
            placeholder="Type a message..."
            className="border-none bg-transparent focus:ring-0 focus:outline-none p-2 rounded-md flex-grow text-sm"
            {...register("message", { required: true })}
          />
          <button
            type="submit"
            className={`flex cursor-pointer rounded-full text-white p-2 items-center justify-center ${
              watch("message") ? "bg-black" : "bg-gray-400"
            }`}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </form>

      <p className="py-2 text-xs text-muted-foreground text-slate-500">
        AI can make mistakes
      </p>
    </section>
  );
};

export default MessageInput;
