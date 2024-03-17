'use client'

import deleteAllMessages from '@/app/api/admin/deleteAllMessages'
import '../../styles/global.css'
import getCurrentUser from "@/app/api/userAuth/currentUser"
import UserNav from "@/app/components/userNav"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import deleteAllChats from '@/app/api/admin/deleteAllChats'

export default function AdminPage() {
    const router = useRouter()
    const [admin, setAdmin ] = useState('')
    const [auth, setAuth ] = useState('')

    useEffect(() => {

        const token = localStorage.getItem('accessToken')

        setAuth(token)

        const fetchUser = async () => {
            const data = await getCurrentUser(token) 

            setAdmin(data)

            if(data?.role !== 'admin') {
                router.push('/')
            }
        }

        fetchUser()


    },[])

    const handleDeleteAllMessages = async() => {
        await deleteAllMessages(auth)
    }

    const handleDeleteAllChats = async() => {
        await deleteAllChats(auth)
    }

    return (
        <div className='h-dvh'>
            <UserNav data={admin} />
            <h1 className='text-4xl capitalize text-center'>admin page</h1>
            <div className='border-2 h-full flex justify-center items-center'>
                <div className='border-2 rounded-lg p-2 w-fit text-center'>
                    <h3>Delete All messages</h3>
                    <button 
                    className='bg-red-600 text-white p-2 rounded-xl '
                    onClick={handleDeleteAllMessages}>Delete All</button>
                </div>

                <div className='border-2 rounded-lg p-2 w-fit text-center'>
                    <h3>Delete All Chats</h3>
                    <button 
                    className='bg-red-600 text-white p-2 rounded-xl '
                    onClick={handleDeleteAllChats}>Delete All</button>
                </div>
            </div>


        </div>
    )
}