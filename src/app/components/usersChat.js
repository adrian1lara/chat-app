import { useEffect, useState } from "react";
import UserAvatar from "./avatar";


export default function UserDisplay({usernames}) {
   
    return (
        <div>
            {usernames && (
                <div>
                    {usernames.map((user) => (
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