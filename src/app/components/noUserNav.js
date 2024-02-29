

export default function NoUserNav() {
    return (
        <div>
            <nav className="w-full flex justify-between m-1">
                <h1 
                className="font-bold text-2xl tracking-wide"
                >IChat</h1>
                <div className="flex">
                    <a
                    className="middle none center mr-3 rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    href="/log-in"
                    >
                        Log-in
                    </a>
                    <a 
                    className="middle none center mr-3 rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    href="/sign-up"
                    >
                        Sign-up
                    </a>
                </div>
            </nav>
        </div>
    )
}