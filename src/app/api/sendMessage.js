import getApiUrl from "../utility/getApiUrl"


export default async function sendMessage (chatId, token, message) {
    const API_URL = getApiUrl()
    try {
        const res = await fetch(`${API_URL}/api/v0/message/${chatId}/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }, 
            body: JSON.stringify({
                text: message
            })

        })

        if(res.ok) {
            console.log("Successfully sended")
        } else {
            throw new Error(`Bad API request ${res.status}`)
        }
        
    } catch (error) {
        console.error(error)
    }
}