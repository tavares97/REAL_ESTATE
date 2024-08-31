import Chat from "./Chat";
import { useState } from "react";
import { userData } from "../lib/dummyData";

const Messages = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col gap-5 overflow-y-scroll">
        <h1 className="font-light text-2xl">Messages</h1>

        <div
          className="flex gap-5 bg-white p-3 rounded-md items-center cursor-pointer"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <img
            src={userData.img}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-bold">{userData.name}</span>

          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      {isChatOpen && (
        <div className="flex-1 bg-white flex flex-col justify-between">
          <Chat setIsChatOpen={setIsChatOpen} />
        </div>
      )}
    </div>
  );
};

export default Messages;
