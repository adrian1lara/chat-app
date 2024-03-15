

export default async function createChat(currentUserID, clickedUserID, token) {

    try {
        const res = await fetch("https://chatty-api.fly.dev/api/v0/chat/new", {
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