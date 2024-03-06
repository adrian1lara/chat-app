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
    }

  })
  

  return (
    <div className="w-screen border-2 border-black">
      <header>
          <NoUserNav />
      </header>
      <main>
      <h1>Hello World</h1>
      </main>
    </div>
  );
}
