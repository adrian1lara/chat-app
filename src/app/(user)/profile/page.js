'use client'

import getCurrentUser from "@/app/api/userAuth/currentUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export default function Page() {
    const [data, setData] = useState('')
    const [error, setError] = useState(null)
    const router = useRouter();

    useEffect(()=> {
        const token  = localStorage.getItem('accessToken')

        if(!token) {
            router.push("/log-in")
            return
        }

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
    

    return (
        <div>
            <h1>Welcome</h1>
            <p>{data && (data.username)}</p>
        </div>
        
       
    )
}