
import Message from "./message";
import sendMessage from "../api/sendMessage";


export default function UserChat ({ messages, userId, token, chatData , sender}) {

    
    const handleSendMessage = async(message)=> {
        const chat = chatData[0]
        const chatId = chat._id

        console.log(chatId)
        console.log(message)
        await sendMessage(chatId, token, message)
    }
    
    //if(!messages) { return "loading..."}
    return (
        <div className="px-5 flex flex-col justify-between border-2 h-full">
      {/* ... chat header */}
      <h2>chat with {userId}</h2>
      <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        {messages.length > 0 &&
          messages.map((message, index) => (
           <div key={index} className={`border-2 border-black text-2xl flex ${message.sender == sender ? 'justify-end' : 'justify-start'}`}>
            <p>{message.content}</p>
            </div>
          ))}
      </div>
      <div>
        <Message sendMessage={handleSendMessage} />
      </div>
    </div>
  );
}