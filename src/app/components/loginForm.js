'use client'

import { useState } from "react"
import "../styles/global.css"
import { useRouter } from "next/navigation"
import getCurrentUser from "../api/userAuth/currentUser"
import getApiUrl from "../utility/getApiUrl"

 export default function LogInForm () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const router = useRouter()

    const handleLogIn = async(e) => {
        const API_URL = getApiUrl()

        e.preventDefault()

       try {

            const res = await fetch(`${API_URL}/api/v0/user/auth/login`,  {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            if(res.ok) {
                const response = await res.text()
                localStorage.setItem('accessToken', response)
                
                const user = await getCurrentUser(response)

                if(user.role === 'admin') {
                    router.push('/dashboard')
                }

                if(user.role === 'user') {
                    router.push('/chat')
                }

            } else {
                const dataError = await res.text()
                setError(dataError)
            }

       } catch (error) {
            console.error(error)
       }
    }

    const handleGuest = async() => {
        const API_URL = getApiUrl()

        try {

            try {
     
                 const res = await fetch(`${API_URL}/api/v0/user/auth/login`,  {
                     method: 'POST',
                     headers: {
                         'Content-Type': 'application/json',
                     },
                     body: JSON.stringify({
                         email: "guest@guest.com",
                         password: "guest123456"
                     })
                 })
     
                 if(res.ok) {
                     const response = await res.text()
                     localStorage.setItem('accessToken', response)
                     
                     const user = await getCurrentUser(response)

                     if(user.role === 'user') {
                         router.push('/chat')
                     }
     
                 } else {
                     const dataError = await res.text()
                     setError(dataError)
                 }
     
            } catch (error) {
                 console.error(error)
            }
        } catch (error) {
            
        }
    }

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleLogIn} className="space-y-6">
                <input type="email" name="email" placeholder="example@domain.com"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 required></input>
                <input type="password" name="password" placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required></input>
                {error && (<p className="text-red-500 text-center text-sm">{error}</p>)}
                <div className="flex flex-col items-center">
                <button type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ease-in duration-300  hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >log in
                </button>
                <p>or</p>
                <button
                type="button"
                className="rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ease-in duration-300  hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleGuest}>
                    continue as guest
                </button>
                </div>
               

                <p className="mt-10 text-center text-sm text-gray-500">
                   Don't have an account yet?
                    <a href="/sign-up" className="font-semibold leading-6 ease-in duration-200 text-blue-500 hover:text-blue-600"> Sign Up here</a>
                </p>
            </form>


        </div>
    )
 }