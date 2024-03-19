import getApiUrl from "@/app/utility/getApiUrl"

export default async function deleteAllChats(token) {
    const API_URL = getApiUrl()
    
    try {
        const res = await fetch(`${API_URL}/api/v0/chat/delete/all` , {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if(res.ok) {
            console.log("Successfully deleted all chats")
        } else {
            throw new Error(`API bad request ${res.status}`)
        }
    } catch (error) {
        console.error(error)
    }
}