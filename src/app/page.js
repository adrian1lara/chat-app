'use client'

import "./styles/global.css"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getCurrentUser from "./api/userAuth/currentUser";
import { data } from "autoprefixer";

export default function Home() {
  const router = useRouter()
  

  useEffect(()=> {
    const token = localStorage.getItem('accessToken')

    if(!token) {
      router.push('/log-in')
    }
    
    const fetchData = async () => {
      try {
      
        const data = await getCurrentUser(token)
    
        if(data.role === 'admin') {
          router.push('/dashboard')
        }
    
        if(data.role === 'user') {
          router.push('/chat')
        }

        } catch (error) {
          console.error(error)
        }
    }

    fetchData()
    
   


  }, [])
  

  return (
    <div className="w-screen border-2 border-black">

    </div>
  );
}
