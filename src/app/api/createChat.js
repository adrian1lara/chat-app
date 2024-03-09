

export default async function createChat(currentUserID, clickedUserID) {

    try {
        const res = await fetch("http://localhost:3000/api/v0/chat/new", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                participants: [currentUserID, clickedUserID]
            })
        })

        if(res.ok) {
            const chatData = await res.json();
            console.log("Chat created successfully:", chatData);
            

        } else {
            throw new Error(`Api bad request ${res.status}`)
        }


    } catch (error) {
        console.error(error)
    }
}