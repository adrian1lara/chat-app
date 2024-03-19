import getApiUrl from "../utility/getApiUrl";


export default async function createChat(currentUserID, clickedUserID, token) {
    const API_URL = getApiUrl()

    try {
        const res = await fetch(`${API_URL}/api/v0/chat/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                participants: [currentUserID, clickedUserID]
            })
        })

        if(res.ok) {
            const chatData = await res.json();
            console.log("Chat created successfully:", chatData);
            return chatData
            
        } else {
            throw new Error(`Api bad request ${res.status}`)
        }


    } catch (error) {
        console.error(error)
    }
}