import { useEffect, useState } from "react";
import UserAvatar from "./avatar";


export default function UserDisplay({usernames}) {
   
    return (
        <div className="overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded ">
            {usernames && (
                <div className="w-md space-y-5">
                    {usernames.map((user) => (
                        <div key={user._id} className="flex items-center border-2 border-slate p-2 max-w-sm rounded-2xl">
                            <UserAvatar  img={user.avatar}/>
                            <p className="text-xl">{user.username}</p>
                            
                            </div>
                    ))}
                    </div>
            )}
        </div>
    )

}