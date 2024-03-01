'use client'
import UserAvatar from '@/app/components/avatar';
import '../../styles/global.css'
import getCurrentUser from "@/app/api/userAuth/currentUser";
import UserNav from "@/app/components/userNav";
import { validateUser } from "@/app/middleware/validateUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import deleteUserAccount from '@/app/api/userAuth/deleteAccount';



export default function Page() {
    const [data, setData] = useState('')
    const [error, setError] = useState(null)
    const router = useRouter();

    useEffect(()=> {

        const token = localStorage.getItem('accessToken')

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

    const handleDeleteUserAccount = async () => {
        const token  = localStorage.getItem('accessToken')
        await deleteUserAccount(token, data._id)
        localStorage.clear()
    }
    
    if(!data) return <h1>Loading...</h1>

    if(error) return <h1>Opps an error occurred</h1>

    return (
        <div className='w-screen h-screen border-2 border-black'>
            <header>
                <UserNav data={data}/>
            </header>
            <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 border-2'>
                <div className=' flex flex-col items-center justify-center'>   
                    <UserAvatar img={data.avatar}/> 
                    <h3>{data.username}</h3>

                    <div>
                    <button className='bg-red-600  p-4 rounded-2xl cursor-pointer text-white'
                    onClick={handleDeleteUserAccount}> 
                        Delete my account
                    </button>
                </div>
                </div>
                
            </div>

            
        </div>
        
       
    )
}