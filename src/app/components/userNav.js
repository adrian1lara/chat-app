import { AiOutlineMessage } from "react-icons/ai"
import { LuMessagesSquare } from "react-icons/lu"
import Dropdown from "./dropdown";


export default function UserNav({data}) {

    return (
        <div className="max-w-screen p-4 border-b-2">
            <nav className="flex justify-between items-center">
                <h1 className="font-bold flex items-center text-2xl antialiased tracking-widest uppercase space-x-2">
                <LuMessagesSquare/>
                    <a href="/chat">
                        Chatty
                    </a>
                </h1>
               
                <Dropdown data={data} />
            </nav>
        </div>
    )

}