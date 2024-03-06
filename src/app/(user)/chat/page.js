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


export default function ChatPage() {
    const [data, setData] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const router = useRouter()

    useEffect(() => {

        const token = localStorage.getItem('accessToken')

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

    if(!data) return <h1>Loading...</h1>
    
    return (
        <div>
            <UserNav data={data}/>

            <div>
                <div>
                    <SearchBar onSearch={handleSearchFromChat}/>
                </div>
                <div>
                    <UserChats usernames={searchResults} />
                </div>
            </div>
        </div>
    )
}