
import Message from "./message";

export default function UserChat ({ messages, userId, token, chatData , sender}) {
    
    //if(!messages) { return "loading..."}
    return (
        <div className="px-5 flex flex-col justify-between border-2 h-full">
            <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                <h1>chat with <span className="text-blue-700">{userId}</span></h1>
            </div>
            <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            { messages && messages.map((message) => (
            <div key={message._id} className={`border-2 border-black text-2xl flex ${message.sender == sender ? 'justify-end' : 'justify-start'}`} >
                <p className="w-fit border-2 border-blue-700">{message.content}</p> {/* Render message content */}
            </div>
            ))}
            </div>
            <div>
                <Message chatData={chatData} token={token} />
            </div>
        </div>
    )
}