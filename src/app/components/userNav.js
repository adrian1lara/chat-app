import Dropdown from "./dropdown";


export default function UserNav({data}) {

    return (
        <div className="max-w-screen p-4">
            <nav className="flex justify-between items-center">
                <h1 className="font-bold text-2xl antialiased tracking-widest uppercase">
                    <a href="/chat">Chatty</a>
                    </h1>
                    <div className="border-2 rounded-lg
                    hover:bg-slate-200 p-2">
                        <a href="/chat" className="w-full">Chat</a>
                    </div>

                <Dropdown data={data} />
            </nav>
        </div>
    )

}