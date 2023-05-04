
import React, { useState } from "react";
import MessageWindow from "./MessageWindow";
import TextInputs from "./TextInput";

export type ChatData={
  topic:string,
  body:string,
  from:string
}

const ChatBox = () => {
  const [chatData, setChatData] = useState({ topic: "", body: "", from: "" });

  const handleSubmit = (data:ChatData) => {
    setChatData(data);
  };

  return (
    <>
      <div className=" flex justify-between pl-28 pt-28">
        <div className=" w-full pr-16">
          <MessageWindow
            topic={chatData.topic}
            body={chatData.body}
            from={chatData.from}
          />
        </div>
        <div className="pt-2 pr-28">
          <TextInputs onSubmit={handleSubmit} color="blue" />
        </div>
      </div>
    </>
  );
};

export default ChatBox;
