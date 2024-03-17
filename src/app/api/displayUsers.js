import getConfig from "next/config"
import getApiUrl from "../utility/getApiUrl"

export default async function displayUsers(setData, token) {
    const API_URL = getApiUrl()

    try {
        const res = await fetch(`${API_URL}/api/v0/user/all`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if(res.ok) {
            const resOK = await res.json()
            setData(resOK)
        }
    } catch (error) {
        console.error(error)
    }
}