import React, { useEffect, useState } from "react";
import type { ChatData } from "./ChatBox";

const MessageWindow = ({ topic, body, from }: ChatData) => {
  const [messages, setMessages] = useState<ChatData[]>([
    { topic: "", body: "", from: "" },
  ]);
  const mybox = "pl-56 pr-16 pb-5";
  const otherBox = "pr-96 pb-5";
  const myboxColor =
    "pl-5 flex justify-start ml-28 mt-3 bg-gray-200 rounded text-white";
  const otherboxColor =
    "pl-5 flex justify-start ml-16 mt-3 bg-blue-100 rounded text-white";
 

  useEffect(() => {
    const chatData: ChatData = {
      topic,
      body,
      from,
    };
    setMessages((prev:ChatData[]) => [...prev, chatData]);
  }, [topic, body, from]);

  return (
    <div className="m-2 w-full">
      <div className="border-2 rounded-md">
        <div className="border p-3 pl-8 bg-gray-200">IRN Number</div>
        <div className="border p-2 h-96 overflow-y-scroll">
          <div>
            {messages.map((message, index) => (
              <div className={from === "me" ? mybox : otherBox}>
                <div
                  className={`${from === "me" ? myboxColor : otherboxColor}`}
                >
                  <div key={index} className="">
                    <div className="text-gray-500">{message.topic}</div>{" "}
                    <div className="text-black">{message.body}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageWindow;
