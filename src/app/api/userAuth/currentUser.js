import getApiUrl from "@/app/utility/getApiUrl"



export default async function getCurrentUser(token) {   
    const API_URL = getApiUrl()

    try {
        const res = await fetch(`${API_URL}/api/v0/user/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if(!res.ok) {
            throw new Error(`API request failed with status ${res.status}`)
        }

        const data = await res.json()

        return data        
    } catch (error) {
        console.error(error)
    }

}