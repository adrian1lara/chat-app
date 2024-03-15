

export default async function getCurrentUser(token) {

    try {
        const res = await fetch("https://chatty-api.fly.dev/api/v0/user/auth/me", {
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