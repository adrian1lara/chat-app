

export default function UserNav() {

    return (
        <div className="max-w-screen m-4 ">
            <nav className="flex justify-between">
                <h1>ChatApp</h1>

                <div>
                    <ul className="flex space-x-3">
                        <li >
                            <a href="/home"
                            className="px-3 py-2 rounded-lg hover:bg-slate-100 ">Home</a>
                        </li>
                        <li> 
                            <a href="/chat"
                            className="px-3 py-2 rounded-lg hover:bg-slate-100 ">Chat</a>
                            </li>
                        <li>
                            <a href="/profile"
                            className="px-3 py-2 rounded-lg hover:bg-slate-100 ">Profile</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}