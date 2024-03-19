'use client'

import '../../styles/global.css'
import getCurrentUser from "@/app/api/userAuth/currentUser";
import UserNav from "@/app/components/userNav";
import { validateUser } from "@/app/middleware/validateUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProfileAvatar from '@/app/components/profileAvatar';
import DeleteButton from '@/app/components/deleteAccButton';
import Modal from '@/app/components/modal';
import { avatars } from '@/app/assets/avatars';
import updateAvatar from '@/app/api/updateAvatar';
import Footer from '@/app/components/footer';



export default function Page() {
    const [data, setData] = useState('')
    const [error, setError] = useState(null)
    const [auth, setAuth] = useState('')
    const router = useRouter();

    useEffect(()=> {

        const token = localStorage.getItem('accessToken')
        setAuth(token)

        validateUser(router)
        
        const fetchdata = async () => {
            try {
                const res = await getCurrentUser(token)
                setData(res)
            } catch (error) {
                setError(error)
            }
        }

        fetchdata()
  

    }, [])

    const handleSelectAvatar = async (avatar) => {
        await updateAvatar(auth, avatar)
    }
   
    
    if(!data) return <h1>Loading...</h1>

    if(error) return <h1>Opps an error occurred</h1>

    return (
        <div className='w-screen h-screen'>
            <header>
                <UserNav data={data}/>
            </header>
            <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
                    <div className=' flex flex-col items-center justify-center'>   
                    <div className='flex'>
                        <ProfileAvatar img={data.avatar}/> 
                        <Modal avatar={avatars} handleUpdateAvatar={handleSelectAvatar}/>
                    </div>
                        
                            <h3 className='text-2xl font-bold text-slate-500'>{data.username}</h3>
                        <div>
                        <DeleteButton data={data}/>
                    </div>
                </div>
               
            </div>

            <Footer />
        </div>
        
       
    )
}