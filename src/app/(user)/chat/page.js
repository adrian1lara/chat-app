'use client'
import { useEffect, useState } from "react";
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


export default function ChatPage() {
    const [data, setData] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const [auth, setAuth] = useState(null)
    const [chat, setChat] = useState([])
    const [messages, setMessages] = useState([])

    const router = useRouter()

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

    
        displayUsers(setSearchResults)

    }, [])


    const handleSearchFromChat = async(searchTerm) => {

        try {
            const res = await fetch(`http://localhost:3000/api/v0/user/search/username?searchTerm=${searchTerm}`)

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

        const currentUserID = data._id
        
        //console.log(auth)
        // fetch existing chat for the selected user
        try {
            const existingChat = await getSelectedChat(clickedUser, auth)
            //console.log(existingChat) //if I display this, give me the json chat
            //console.log(existingChat) // if I display this, give me undifined
            setChat(existingChat)

            if(existingChat) {
                try {
                    const currentChat = existingChat[0]
                    const chatId = currentChat._id
                    const res = await getChatMessages(chatId, auth)

                    setMessages(res)
                } catch (error) {
                    console.error(error)
                }
            }
        } catch (error) {
            console.error(error)
        }

        

        // if chat dont exists 
        if(!chat?.length) {
            try {
                await createChat(currentUserID, clickedUser)
    
            } catch (error) {
                console.error(error)
            }
        }
       
    }


    if(!data) return <h1>Loading...</h1>
    
    return (
        <div>
            <UserNav data={data}/>
            <div className="container max-h-4/5 mx-auto shadow-lg rounded-lg p-2 flex space-x-2">
                
                <div className="space-y-2">
                    <div>
                        <SearchBar onSearch={handleSearchFromChat}/>
                    </div>
                    <div>
                        <UserChats usernames={searchResults} onUserSelect={handleUserSelect}/>
                    </div>
                </div>
                <div className="w-full">
                    <UserChat userId={selectedUser} messages={messages}/>
                </div>
            </div>
            
        </div>
    )
}