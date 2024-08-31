import { X } from "@phosphor-icons/react";
import { userData } from "../lib/dummyData";

type ChatProps = {
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Chat = ({ setIsChatOpen }: ChatProps) => {
  return (
    <>
      <div className="bg-amber-200 flex justify-between items-center p-5 font-bold">
        <div className="flex items-center gap-2">
          <img
            src={userData.img}
            alt=""
            className="w-7 h-7 rounded-full object-cover"
          />
          <span>{userData.name}</span>
        </div>

        <X
          size={20}
          className="cursor-pointer"
          onClick={() => setIsChatOpen(false)}
        />
      </div>

      <div className="overflow-y-scroll h-full p-5 flex flex-col gap-5 ">
        <div className="w-1/2 ">
          <div className="bg-gray-100 p-2 rounded-md">
            <p> Lorem ipsum dolor sit amet.</p>
          </div>
          <p className="text-xs">12:30</p>
        </div>
        <div className="w-1/2 self-end">
          <div className=" bg-amber-200 p-2 rounded-md">
            <p> Lorem ipsum dolor sit amet.</p>
          </div>
          <p className="text-xs text-right">12:30</p>
        </div>
      </div>

      <div className="border-t border-amber-200 h-12 flex justify-between items-center ">
        <textarea className="flex-3 h-full p-2"></textarea>
        <button className="flex-1 bg-amber-200 h-full">Send</button>
      </div>
    </>
  );
};

export default Chat;
