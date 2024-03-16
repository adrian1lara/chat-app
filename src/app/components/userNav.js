import { AiOutlineMessage } from "react-icons/ai"
import { LuMessagesSquare } from "react-icons/lu"
import Dropdown from "./dropdown";
import Logo from "./logoHeader";


export default function UserNav({data}) {

    return (
        <div className="max-w-screen p-4 border-b-2">
            <nav className="flex justify-between items-center">
                    <a href="/chat">
                       <Logo fontSize={"text-2xl"}/>
                    </a>
                <Dropdown data={data} />
            </nav>
        </div>
    )

}