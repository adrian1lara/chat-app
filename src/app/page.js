'use client'

import "./styles/global.css"
import Image from "next/image";
import NoUserNav from "./components/noUserNav";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  

  useEffect(()=> {
    const token = localStorage.getItem('accessToken')
    if(token) {
      router.push('/chat')
    } else {
      router.push("/log-in")
    }

  })
  

  return (
    <div className="w-screen border-2 border-black">

    </div>
  );
}
