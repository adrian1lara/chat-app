
export default async function getSelectedChat(clickedUserID, token) {
    try {
        const res = await fetch(`https://chatty-api.fly.dev/api/v0/chat/user?userId=${clickedUserID}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if(res.ok) {
            const data = await res.json()
            return data
        } else {
            throw new Error(`Bad request ${res.status}`)
        }
    } catch (error) {
        console.error(error)
    }
}