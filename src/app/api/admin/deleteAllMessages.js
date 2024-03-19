import getApiUrl from "@/app/utility/getApiUrl"

export default async function deleteAllMessages(token) {

    const API_URL = getApiUrl()
    try {
        const res = await fetch(`${API_URL}/api/v0/message/delete/all`, {
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