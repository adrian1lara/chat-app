
export default async function deleteAllMessages(token) {
    try {
        const res = await fetch('https://chatty-api.fly.dev/api/v0/message/delete/all', {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
           
        })

        if(res.ok) {
            console.log('Successfully deleted all messages')
        } else {
            throw new Error(`API bad request ${res.status}`)
        }
    } catch (error) {
        console.error(error)
    }
}