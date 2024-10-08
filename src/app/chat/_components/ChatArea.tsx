"use client";
import { Button } from "@/components/ui/button";
import { Bot, CopyIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MessageProps {
  id: number;
  message: string;
  role: string;
}

const ChatArea = ({
  messages,
  loading,
}: {
  messages: MessageProps[];
  loading: boolean;
}) => {
  const copyToClipboard = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);
  return (
    <div className="flex justify-center h-screen overflow-y-auto py-6">
      <div className="md:w-[60%] w-full flex flex-col space-y-6">
        {messages.map((msg) => (
          <div
            key={msg?.id}
            className={`flex ${
              msg?.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 text-slate-600 rounded-lg ${
                msg?.role === "user" ? "bg-gray-100 max-w-[70%]" : " w-full"
              } relative`}
            >
              {msg?.role === "assistant" && (
                <div className="absolute left-[-30px] border p-1 bg-black rounded-full">
                  <Bot className="h-5 w-5 text-white" /> {/* Bot icon */}
                </div>
              )}
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    const codeString = String(children).replace(/\n$/, "");

                    return !inline && match ? (
                      <div style={{ position: "relative", width: "100%" }}>
                        <Button
                          className="flex gap-2 text-sm"
                          onClick={() => copyToClipboard(codeString)}
                          size="sm"
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "10px",
                            zIndex: 1,
                          }}
                        >
                          <CopyIcon className="h-4 w-4" /> Copy
                        </Button>
                        <SyntaxHighlighter
                          style={solarizedlight}
                          language={match[1]}
                          PreTag="div"
                          wrapLongLines={true}
                          customStyle={{
                            width: "100%",
                            borderRadius: "8px",
                            padding: "10px",
                          }} // Set width to 100%
                          {...props}
                        >
                          {codeString}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {msg?.message}
              </ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && (
          <div className={`flex "justify-start"`}>
            <div
              className={`p-3 text-slate-600 rounded-lg md:max-w-[70%] w-full relative`}
            >
              {/* {msg.role === "assistant" && ( */}
              <div className="absolute left-[-30px] border p-1 bg-black rounded-full">
                <Bot className="h-5 w-5 text-white" /> {/* Bot icon */}
              </div>
              {/* )} */}
              {/* {msg.message} */}
              Thinking ...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
        <div className="pb-4" />
      </div>
    </div>
  );
};

export default ChatArea;
