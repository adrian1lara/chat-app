'use client'
import { useEffect, useRef, useState } from "react";
import "../../styles/global.css"
import UserNav from "@/app/components/userNav";
import { validateUser } from "@/app/middleware/validateUser";
import { useRouter } from "next/navigation";
import getCurrentUser from "@/app/api/userAuth/currentUser";
import UserChats from "@/app/components/usersChat";
import SearchBar from "@/app/components/search";
import displayUsers from "@/app/api/displayUsers";
import UserChat from "@/app/components/chat";
import createChat from "@/app/api/createChat";
import getSelectedChat from "@/app/api/getChat";
import getChatMessages from "@/app/api/getMessages";
import { io } from "socket.io-client";
import Footer from "@/app/components/footer";

export default function ChatPage() {
    const [data, setData] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const [auth, setAuth] = useState(null)
    const [chat, setChat] = useState('')
    const [messages, setMessages] = useState([])

    const router = useRouter()
    const socket = useRef(null)


    useEffect(() => {

        const token = localStorage.getItem('accessToken')
        setAuth(token)
        validateUser(router)
        
        const  fetchData = async () => {
            try {
                const res = await getCurrentUser(token)

                setData(res)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()

    
        displayUsers(setSearchResults, token)

        if(!socket.current) {
            try {
                socket.current = io("https://chatty-api.fly.dev");
            } catch (error) {
                console.error("Socket initialization error:", error);
            }
        }

        return () => {
            // Cleanup function to unsubscribe from events on component unmount
            if (socket.current) {
                socket.current.off("new_message");
            }
        };

    }, [selectedUser])


    const handleSearchFromChat = async(searchTerm) => {

        try {
            const res = await fetch(`https://chatty-api.fly.dev/api/v0/user/search/username?searchTerm=${searchTerm}`)

            if(res.ok) {
                const resOk = await res.json()
                setSearchResults(resOk)
            }
            
        } catch (error) {
            console.error(error)
        }
    }


    const handleUserSelect = async(clickedUser) => {
        setSelectedUser(clickedUser)
        socket.current.off("new_message")

        const currentUserID = data._id
        
        // fetch existing chat for the selected user
        try {
            // Fetch existing chat for the selected user
            const existingChat = await getSelectedChat(clickedUser._id, auth);
            setChat(existingChat);
            
            // Fetch messages and subscribe to new messages if a chat exists
            if (existingChat) {
                const messages = await getChatMessages(existingChat, auth);
                setMessages(messages);
    
                // Subscribe to new messages
                socket.current.on("new_message", (newMessage) => {
                    if (newMessage.chat === existingChat) {
                        setMessages((prevMessages) => [...prevMessages, newMessage]);
                    }
                });

            } else {
                setMessages([])
                // If no chat exists, create a new chat
                const createdChat = await createChat(currentUserID, clickedUser._id, auth);
                setChat(createdChat)

                const existingChatYes = await getSelectedChat(clickedUser._id, auth);

                if (existingChatYes) {

                    const messages = await getChatMessages(createdChat, auth);
                    setMessages(messages);
        
                    // Subscribe to new messages
                    socket.current.on("new_message", (newMessage) => {
                        if (newMessage.chat === existingChatYes) {
                            setMessages((prevMessages) => [...prevMessages, newMessage]);
                        }
                    });
                }
            }
        } catch (error) {
            console.error("Error selecting user:", error);
        }
    
       
    }


    if(!data) return <h1>Loading...</h1>
    
    return (
        <div className="h-dvh">
            <UserNav data={data}/>
            <div className="container mx-auto shadow-2xl rounded-lg p-2 flex space-x-2 bg-white" 
            style={{height: "600px"}}
            >
                <div className="space-y-2">
                    <div>
                        <SearchBar onSearch={handleSearchFromChat}/>
                    </div>
                    <div> 
                        <UserChats usernames={searchResults} onUserSelect={handleUserSelect}/>
                    </div>
                </div>
                <div className="w-full">
                    <UserChat userId={selectedUser} messages={messages} token={auth} chatData={chat} sender={data._id}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}