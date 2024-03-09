
import Message from "./message";

export default function UserChat ({ messages, userId }) {
    
    //if(!messages) { return "loading..."}
    return (
        <div className="px-5 flex flex-col justify-between border-2 h-full">
            <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                <h1>chat with <span className="text-blue-700">{userId}</span></h1>
            </div>
            <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            { messages && messages.map((message) => (
            <div key={message._id} className={`flex justify-${message.sender === userId ? 'end' : 'start'} mb-4`} >
                <p>{message.content}</p> {/* Render message content */}
            </div>
            ))}
            </div>
            <div>
                <Message />
            </div>
        </div>
    )
}