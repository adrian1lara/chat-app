

export const validateUser = (router) => {
    const token = localStorage.getItem('accessToken')

    if(!token) {
        router.push("/")
    }

}