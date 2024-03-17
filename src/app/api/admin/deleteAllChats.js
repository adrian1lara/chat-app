
export default async function deleteAllChats(token) {
    try {
        const res = await fetch('https://chatty-api.fly.dev/api/v0/chat/delete/all' , {
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