'use client'

import "./styles/global.css"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getCurrentUser from "./api/userAuth/currentUser";
import { data } from "autoprefixer";
import tokenValid from "./middleware/tokenValidation";

export default function Home() {
  const router = useRouter()
  

  useEffect(()=> {
    const token = localStorage.getItem('accessToken')
    const decodetoken = tokenValid(token)

    if(!token || decodetoken) {
      router.push("/log-in")
    } else {
      router.push("/chat")
    }

  }, [])
  

  return (
    <div className="w-screen border-2 border-black">

    </div>
  );
}
