
import Message from "./message";
import sendMessage from "../api/sendMessage";
import { useEffect, useRef, useState } from "react";

export default function UserChat ({ messages, userId, token, chatData , sender}) {

    const messageContainerRef = useRef(null);
    const [currentChatId, setCurrentChatId] = useState(null);
  
    useEffect(() => {
      // Scroll to the bottom only when messages change or chat changes
      if (messageContainerRef.current && (messages.length > 0 || currentChatId !== chatData[0]?._id)) {
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        setCurrentChatId(chatData[0]?._id); // Update current chat ID
      }
    }, [messages, chatData]);

    const handleSendMessage = async(message)=> {
        const chat = chatData[0]
        const chatId = chat._id

        console.log(chatId)
        console.log(message)
        await sendMessage(chatId, token, message)
    }
    
    if(!messages) { return "loading..."}
    return (
        <div className="px-5 flex flex-col justify-between border-2 h-full ">
      {/* ... chat header */}
      <div className="border-b-2 p-4">
        <h2>chat with <span className="text-blue-700">{userId}</span></h2>
      </div>
      <div className="flex flex-col h-full text-white space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      ref={messageContainerRef}>
        {messages.length > 0 &&
          messages.map((message, index) => (
            
           <div key={index} className={`text-2xl flex ${message.sender == sender ? 'justify-end text-end' : 'justify-start'}`}>
            <div>
                <p className={`rounded-2xl max-w-xs p-1.5 ${message.sender == sender ? 'bg-blue-900 text-white align-end' : 'bg-blue-200 text-blue-900'}`}>
                    {message.content}
                
                    </p>
                    <p className="text-slate-400 text-xs ">{message.timestamp}</p>
            </div>
            
            </div>
          ))}
      </div>
      <div>
        <Message sendMessage={handleSendMessage} />
      </div>
    </div>
  );
}