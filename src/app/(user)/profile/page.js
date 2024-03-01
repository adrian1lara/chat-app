'use client'
import '../../styles/global.css'
import getCurrentUser from "@/app/api/userAuth/currentUser";
import UserNav from "@/app/components/userNav";
import { validateUser } from "@/app/middleware/validateUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



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

        console.log(data)

    }, [])
    

    if(error) return <h1>Opps an error occurred</h1>

    return (
        <div>
            <header>
                <UserNav data={data}/>
            </header>
            <h1>Welcome</h1>
            <p>{data && (data.username)}</p>
        </div>
        
       
    )
}