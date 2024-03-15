
export default async function deleteUserAccount (token, id) {

    try {
        const res = await fetch(`https://chatty-api.fly.dev/api/v0/user/auth/account/delete/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if(!res.ok) {
            throw new Error("Api error")
        } else {
            console.log(await res.text())
        }

    } catch (error) {
        console.error(error)
    }
}