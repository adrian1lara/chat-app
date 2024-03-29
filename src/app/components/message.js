import { useEffect, useState } from "react"

export default function Message ({sendMessage}) {

    const [message, setMessage] = useState('')

    const handleSendMessage = (e) => { 
        if ((e.keyCode === 13 && !e.shiftKey) || e.type === "click") {
            e.preventDefault();
            sendMessage(message);
            setMessage("");
        }

    }


    return (
        <div className="flex items-center py-2 px-3  rounded-lg ">
            
        <textarea type="text" placeholder="Write a message..." 
        value={message}
        onChange={(e)=> setMessage(e.target.value)} 
        onKeyDown={handleSendMessage} 
        className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500">
        </textarea>
            <button 
            type="button"
            onClick={handleSendMessage} 
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 ">
            <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            </button>
            </div>
        
    )
}