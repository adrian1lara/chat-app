
export default async function displayUsers(setData, token) {
    try {
        const res = await fetch("https://chatty-api.fly.dev/api/v0/user/all", {
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