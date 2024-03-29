
import Message from "./message";
import sendMessage from "../api/sendMessage";
import { useEffect, useRef, useState } from "react";
import UserAvatar from "./avatar";

export default function UserChat ({ messages, userId, token, chatData , sender}) {

    const messageContainerRef = useRef(null);
    const [currentChatId, setCurrentChatId] = useState(null);
  
   useEffect(() => {
      // Scroll to the bottom only when messages change or chat changes
      if (messageContainerRef.current && (messages?.length > 0 || currentChatId !== chatData)) {
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        setCurrentChatId(chatData); // Update current chat ID
      }
    }, [messages, chatData]);

    const handleSendMessage = async(message)=> {
        const chatId = chatData
        console.log(chatData) 

        await sendMessage(chatId, token, message)
        console.log(message, " chat")
    }
    
    return (

        <div className="px-5 flex flex-col justify-between border-2 h-full">
      <div className="border-b-2 p-4 flex items-center space-x-2">
        <UserAvatar img={userId?.avatar}/>
        <h2 className="text-xl">chat with <span className="text-blue-700 capitalize">{userId?.username}</span></h2>
      </div>
      <div className="flex flex-col h-full text-white space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      ref={messageContainerRef} >
        {chatData == currentChatId &&
          messages?.map((message) => (
            
           <div key={message._id} className={`text-2xl flex ${message.sender == sender ? 'justify-end ' : 'justify-start'}`}>
                <div>
                    {message.sender != sender ? <UserAvatar img={userId?.avatar} /> : null }
                </div>
                <div className={`flex flex-col max-w-40 md:text-md md:text-sm sm:text-xs ${ message.sender === sender ? "items-end" : ""}`}>
                    <p className={`rounded-2xl p-1.5 w-fit ${message.sender == sender ? 'bg-blue-900 text-white w-fit' : 'bg-blue-200 text-blue-900'}`}>
                    {message.content.split(/(.{30})/).map((line, index) => (
                        <span key={index}>{line !== undefined && line !== '' ? line + '\n' : ''}</span>
                    ))}
                    </p>
                    <p className="text-slate-400 text-xs ">{message.timestamp}</p>
                </div>
            </div>
          ))}
      </div>
      <div>
      {chatData && (
         <Message sendMessage={handleSendMessage} />
        )}
      </div>
    </div>
  );
}