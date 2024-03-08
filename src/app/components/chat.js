import Message from "./message";

export default function UserChat () {
    return (
        <div className="px-5 flex flex-col justify-between border-2 h-full">
            <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                <h1>Chat User</h1>
            </div>
            <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                <div className="flex justify-end mb-4">
                    <p>Content of the chat</p>
                </div>
                <div className="flex justify-start mb-4">
                    <p>Content of the chat</p>
                </div>
                
            </div>
            <div>
                <Message />
            </div>
        </div>
    )
}