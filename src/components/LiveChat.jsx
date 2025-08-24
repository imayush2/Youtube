import {  useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Redux/chatSlice";
import getRandomName from "../helpers/nameGeneragtor";
import getRandomMessage from "../helpers/messageGenerator";

const LiveChat = () => {

    const[liveMessage,setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessage({ name: getRandomName(), message: getRandomMessage() }));
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
       
    <div className="w-120 h-[500px] flex flex-col  bg-white shadow border rounded overflow-y-hidden  overflow-y-scroll flex-col-reverse">
       

      {/* {ChatMessages.map((c,i)=>{return <ChatMessages key={i} name={c.name} message={c.message} />})} */}
      {messages.map((c, i) => {
        return <ChatMessages key={i} name={c.name} message={c.message} />;
      })}

      </div>

            <form className="w-120 h-10 border border-t-0 rounded-b flex items-center" onSubmit={(e)=>{e.preventDefault();
            dispatch(addMessage({name:"You",message:liveMessage}));
            setLiveMessage("");
            }}>
        <input
          className="w-100 box-border p-2 border-1"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="bg-green-500 text-white px-4 py-1 m-2 rounded">
          Send  
        </button>
      </form>

    
    </div>
  );
};

export default LiveChat;
