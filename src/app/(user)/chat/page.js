'use client'
import { useEffect } from "react";
import "../../styles/global.css"
import UserNav from "@/app/components/userNav";
import { validateUser } from "@/app/middleware/validateUser";
import { useRouter } from "next/navigation";


export default function ChatPage() {
    const router = useRouter()
    
    useEffect(() => {
        validateUser(router)
    })
    return (
        <div>
            <UserNav />
        </div>
    )
}