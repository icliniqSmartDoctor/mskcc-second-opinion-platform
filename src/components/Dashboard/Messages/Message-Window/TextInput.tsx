import React, { useState } from "react";
import type { ChatData } from "./ChatBox";



interface ChatMessage {
 
  onSubmit: (data: ChatData) => void
  color:string
}

const TextInputs = ({color,onSubmit}:ChatMessage) => {
 
  const [topic, setTopic] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hi")
    onSubmit({ topic, body, from: 'me' });
    setBody("");
    setTopic("");
  };

  return (
    <>
      <div className="">
        <div className="border-2 rounded-md w-96 bg-white">
          <div className="border-2 p-3 bg-slate-200">
            <div className="flex">
              <div className="pl-7">Compose New Message{}</div>
              <div className="pl-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.19985 12.14L11.9199 14.86C12.0999 15.04 12.0299 15.35 11.7799 15.43L7.91985 16.65C7.91985 16.65 7.81985 16.67 7.76985 16.67C7.62985 16.67 7.49985 16.62 7.40985 16.52C7.26985 16.38 7.22985 16.18 7.29985 16.01L8.63985 12.27C8.71985 12.03 9.02985 11.97 9.19985 12.14Z"
                    fill="#233544"
                  />
                  <path
                    d="M20.5299 7.4L13.4399 14.49C13.3099 14.62 13.0899 14.62 12.9599 14.49L9.59994 11.13C9.46994 11 9.46994 10.78 9.59994 10.65L16.6899 3.56C17.5499 2.69 18.9499 2.7 19.8099 3.56L20.5199 4.26C21.3899 5.12 21.3999 6.53 20.5299 7.4Z"
                    fill="#233544"
                  />
                  <path
                    d="M19.13 12.71V18.07C19.13 19.44 18.02 20.54 16.66 20.54H5.94998C4.57998 20.54 3.47998 19.43 3.47998 18.07V7.35C3.47998 5.98 4.58998 4.88 5.94998 4.88H11.31"
                    stroke="#233544"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>{" "}
            </div>{" "}
          </div>
          <div className=" w-full">
            <form action="" data-testid="chat-form" onSubmit={handleSubmit} className=" p-4 ">
              <div className="pb-7">
                <label htmlFor="topic" className="">Topic</label>
                <br />
                <input
                  type="text"
                  id="topic"
                  name='topic'
                  className="placeholder-gray-400 rounded-md focus:border-gray-100 border-gray-300 bg-slate-100 w-full"
                  onChange={(e) => setTopic(e.target.value)}
                  value={topic}
                  placeholder="write text here.. "
                  required
                />
              </div>
              <div className="">
                <label htmlFor="body">Body</label>
                <br />
                <div className=" border-gray-200 rounded-md leading-3 ">
                  <textarea
                    name="body"
                    id="body"
                    placeholder="write text here..."
                    className=" placeholder-gray-400 rounded-bl-none focus:border-gray-100 rounded-br-none rounded border-gray-200 bg-slate-100 w-full h-36"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    required
                  ></textarea>

                  <div className="flex justify-end pb-5 pr-2 pt-2 rounded-tl-none rounded-tr-none rounded-md border-gray-200 border bg-slate-100">
                    <button className={`bg-${color}-600 hover:bg-blue-700 text-white font-bold py-2 px-8 border border-blue-700 rounded-md`}>
                      <div className="flex">
                        {" "}
                        <div className="  pr-2">
                          <svg
                            width="13"
                            height="14"
                            viewBox="0 0 13 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.21506 1.04241C7.14855 0.909702 7.04643 0.798118 6.92012 0.720139C6.79381 0.64216 6.6483 0.600861 6.49986 0.600861C6.35142 0.600861 6.20591 0.64216 6.0796 0.720139C5.95329 0.798118 5.85117 0.909702 5.78466 1.04241L0.184659 12.2424C0.115174 12.3813 0.0876069 12.5374 0.10532 12.6916C0.123033 12.8459 0.185261 12.9917 0.284412 13.1112C0.383564 13.2307 0.515353 13.3188 0.663702 13.3647C0.812052 13.4105 0.970549 13.4123 1.11986 13.3696L5.11986 12.2264C5.28704 12.1786 5.43409 12.0776 5.53874 11.9387C5.6434 11.7999 5.69996 11.6307 5.69986 11.4568V7.80001C5.69986 7.58783 5.78414 7.38435 5.93417 7.23432C6.0842 7.08429 6.28769 7.00001 6.49986 7.00001C6.71203 7.00001 6.91551 7.08429 7.06554 7.23432C7.21557 7.38435 7.29986 7.58783 7.29986 7.80001V11.4568C7.29976 11.6307 7.35632 11.7999 7.46098 11.9387C7.56563 12.0776 7.71268 12.1786 7.87986 12.2264L11.8799 13.3688C12.0291 13.4115 12.1876 13.4099 12.336 13.3642C12.4843 13.3184 12.6162 13.2304 12.7154 13.111C12.8146 12.9916 12.8769 12.8459 12.8948 12.6916C12.9126 12.5374 12.8852 12.3813 12.8159 12.2424L7.21586 1.04241H7.21506Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div>send messages</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};




export default TextInputs;
