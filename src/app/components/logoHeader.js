import { LuMessagesSquare } from "react-icons/lu"


export default function Logo({fontSize}) {
    return (
        <div className={`${fontSize} flex items-center space-x-2 text-blue-700 font-bold text-center`}> 
            <LuMessagesSquare />

            <h1>
            
            Cha
            <span className="p-2 rounded-lg bg-blue-700 text-white">
                tty
            </span>
        </h1>
        
        </div>

    )
}