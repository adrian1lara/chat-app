import deleteUserAccount from "../api/userAuth/deleteAccount"

export default function DeleteButton({data}) {

    const handleDeleteUserAccount = async () => {
        const token  = localStorage.getItem('accessToken')
        await deleteUserAccount(token, data._id)
        localStorage.clear()
    }

    return (
        <button className='bg-red-600  p-4 rounded-2xl cursor-pointer text-white'
                    onClick={handleDeleteUserAccount}> 
                        Delete my account
        </button>
    )

}