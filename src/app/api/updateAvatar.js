import getApiUrl from "../utility/getApiUrl"

export default async function updateAvatar(token, avatar) {

    const API_URL = getApiUrl()

    try {
        const res = await fetch(`${API_URL}/api/v0/user/update/avatar`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                avatar: avatar
            })
        })

        if(res.ok) {
            console.log('Successfully update')
        } else {
            throw new Error(`Bad API request ${res.status}`)
        }
    } catch (error) {
        console.error(error)
    }
}