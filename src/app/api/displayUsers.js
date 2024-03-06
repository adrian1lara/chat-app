
export default async function displayUsers(setData) {
    try {
        const res = await fetch("http://localhost:3000/api/v0/user/all")

        if(res.ok) {
            const resOK = await res.json()
            setData(resOK)
        }
    } catch (error) {
        console.error(error)
    }
}