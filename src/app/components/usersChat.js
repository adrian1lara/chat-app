import { useEffect, useState } from "react";
import UserAvatar from "./avatar";


export default function UserChats() {
    const [data, setData] = useState('')

    useEffect(() => {

        const getUser = async () => {
            const res = await fetch('http://localhost:3000/api/v0/user/all')

            if(res.ok) {
                const resOk = await res.json()
                setData(resOk)
            } else {
                throw new Error(` ${res.status}` )
            }
        }

        getUser()

    }, [])

    return (
        <div>
            {data && (
                <div>
                    {data.map((user) => (
                        <div key={user._id} className="flex items-center">
                            <UserAvatar  img={user.avatar}/>
                            <p>{user.username}</p>
                            
                            </div>
                    ))}
                    </div>
            )}
        </div>
    )

}