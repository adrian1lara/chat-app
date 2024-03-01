

export default function LogOutBtn () {
    
    const clearStorage = () => {
        localStorage.clear()
    }

    return (
        <button className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem"
        onClick={() => clearStorage}>
            Log out           
        </button>
    )
}
