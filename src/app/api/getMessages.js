
export default async function getChatMessages (chatId, token) {
    try {
        const res = await fetch(`http://localhost:3000/api/v0/message/${chatId}/messages`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if(res.ok) {
            const data = await res.json()
            return data
        } else {
            throw new Error(`Bad Api request ${res.status}`)
        }
    } catch (error) {
        console.error(error)
    }
}