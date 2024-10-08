"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { ArrowUp, Paperclip, Triangle } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import Typewriter from "typewriter-effect";
import randomAnswers from "@/lib/randomAns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

  // const getMessageWidth = (message: string) => {
  //   const length = message.length;
  //   if (length < 20) return "w-auto max-w-xs";
  //   if (length < 50) return "w-auto max-w-md";
  //   if (length < 100) return "w-auto max-w-lg";
  //   return "w-full";
  // };

  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, answers]);

  return (
    <section className="h-full flex flex-col justify-between">
      <div className="h-[500px] w-full overflow-y-auto flex justify-center">
        <div className="max-w-2xl w-full">
          <div className="flex flex-col gap-4">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex flex-col">
                {/* User message */}
                <div className="flex justify-end items-center gap-2">
                  <p
                    className={`p-3 rounded-md min-w-12 bg-gray-100 shadow-sm text-sm`}
                  >
                    {msg}
                  </p>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>

                {/* Bot answer */}
                <div className="flex justify-start items-center py-2">
                  <div className="rounded-full border mr-2">
                    <Triangle className="h-8 w-8 rotate-180 fill-black p-2" />
                  </div>
                  <div className={``}>
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .changeDelay(1)
                          .typeString(answers[idx])
                          .pauseFor(2500)
                          .callFunction(() => {
                            const cursor = document.querySelector(
                              ".Typewriter__cursor",
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
        </div>
      </div>

      {/* Input area */}
      <div className="w-full flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(handleSendMessage)}
          className="flex items-center w-full max-w-2xl"
        >
          <div className="flex w-full items-center gap-2 bg-gray-50 rounded-full px-4 py-2 shadow-md">
            <Paperclip className="w-5 h-5 text-gray-500 cursor-pointer" />
            <Input
              type="text"
              placeholder="Type a message..."
              className="border-none h-8 bg-none  focus-visible:outline-none focus-visible:ring-0  py-2 px-4 shadow-none rounded-md flex-grow text-sm focuse-visable:border-none"
              {...register("message", { required: true })}
            />
            <button
              type="submit"
              disabled={!watch("message")}
              className={`flex cursor-pointer rounded-full disabled:cursor-not-allowed text-white p-2 items-center justify-center ${
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
      </div>
    </section>
  );
};

export default MessageInput;
