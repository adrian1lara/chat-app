'use client'
import { useEffect, useState } from "react";
import "../../styles/global.css"
import UserNav from "@/app/components/userNav";
import { validateUser } from "@/app/middleware/validateUser";
import { useRouter } from "next/navigation";
import getCurrentUser from "@/app/api/userAuth/currentUser";
import UserChats from "@/app/components/usersChat";


export default function ChatPage() {
    const [data, setData] = useState('')

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

    }, [])

    if(!data) return <h1>Loading...</h1>
    
    return (
        <div>
            <UserNav data={data}/>

            <div>
                <div>
                    <UserChats />
                </div>
            </div>
        </div>
    )
}