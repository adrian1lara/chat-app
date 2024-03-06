'use client'

import "../styles/global.css"
import userRegistration from "../api/userAuth/registration"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function SignUpForm () {

    const [username, setUsername ] = useState("")
    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("") 
    const [error, setError ] = useState(null)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await userRegistration(username, email, password)
        if(res.success) {
            router.push("/log-in")
        }else {
            setError(res)
        }

    }
    
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>  
                <input type="text" name="username" placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        
                </input>
                <input type="email" name="email" placeholder="example@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                <input type="password" name="password" placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                 {error && ( // Conditionally render error message
                    <p className="text-red-500 text-center">{error}</p>
                    )}
                <button type="submit"
                className="flex w-full justify-center rounded-md bg-fuchsia-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    sign up
                </button>


                <p className="mt-10 text-center text-sm text-gray-500">
                   Do you have an account?
                    <a href="/log-in" className="font-semibold leading-6 text-fuchsia-400 hover:text-fuchsia-600"> Log In here</a>
                </p>
            </form>
        </div>
    )
}