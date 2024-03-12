import { AiOutlineMessage } from "react-icons/ai"
import { LuMessagesSquare } from "react-icons/lu"
import Dropdown from "./dropdown";


export default function UserNav({data}) {

    return (
        <div className="max-w-screen p-4">
            <nav className="flex justify-between items-center">
                <h1 className="font-bold flex items-center text-2xl antialiased tracking-widest uppercase space-x-2">
                <LuMessagesSquare/>
                    <a href="/chat">
                        Chatty
                    </a>
                    
                </h1>
                <ul>
                    <li >
                        <a href="/chat" className="p-2 text-lg  rounded-lg 
                        transition duration-300 ease-in-out
                        hover:bg-slate-200">Chat</a>
                    </li>
                </ul>
               
                <Dropdown data={data} />
            </nav>
        </div>
    )

}