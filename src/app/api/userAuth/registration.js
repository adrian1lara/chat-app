

export default async function userRegistration (username, email, password ) {
    try {
        const res = await fetch("https://chatty-api.fly.dev/api/v0/user/new", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {
                username: username,
                email: email,
                password: password
            })
         })
    
         if(res.ok) {
            // everything is ok
            console.log("Registration successfully")
            return {success: true}
         } else {
             const dataError = res.text()
             return dataError
         }

    } catch (error) {
        console.error(error)
    }
    

}