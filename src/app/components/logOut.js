import { IoLogInOutline } from "react-icons/io5"

export default function LogOutBtn () {
    
    const clearStorage = () => {
        localStorage.clear()
        location.reload()
    }

    return (
        <button className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white active:bg-blue-100 cursor-pointer" role="menuitem"
        onClick={clearStorage}>
            Log out
            <IoLogInOutline size={20}/>      
        </button>
    )
}
