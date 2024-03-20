'use client'

import "./styles/global.css"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import tokenValid from "./middleware/tokenValidation";
import { jwtDecode } from "jwt-decode";


export default function Home() {
  const router = useRouter()
  

  useEffect(()=> {
    const token = localStorage.getItem('accessToken')
    if(!token) {
      redirectToLogin()
      return
    }

    try {
      const decodedToken = jwtDecode(token);
      const valid = tokenValid(decodedToken);

      if (!valid) {
        redirectToLogin();
      } else {
        router.push("/chat");
      }
    } catch (error) {
      console.error('Error processing token:', error);
      redirectToLogin();
    }

  }, [router])
  
  const redirectToLogin = () => {
    router.push("/log-in");
  };

  return (
    <div className="w-screen border-2 border-black">

    </div>
  );
}
