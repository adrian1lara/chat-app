
export default async function sendMessage (chatId, token, message) {
    try {
        const res = await fetch(`https://chatty-api.fly.dev/api/v0/message/${chatId}/new`, {
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