

export const validateUser = (router, valid) => {
    const token = localStorage.getItem('accessToken')

    if(!token || valid) {
        router.push("/")
    }

}