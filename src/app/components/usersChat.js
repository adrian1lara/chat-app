import { useEffect, useState } from "react";
import UserAvatar from "./avatar";


export default function UserDisplay({usernames, onUserSelect }) {

    
   
    return (
        <div className="overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded">
            {usernames && (
                <div className="w-md  space-y-5">
                    {usernames.map((user) => (
                        <div key={user._id} className="flex items-center cursor-pointer hover:bg-gray-200 border-2 border-slate p-2 max-w-sm rounded-2xl"
                        onClick={()=> onUserSelect(user._id)}>
                            <UserAvatar  img={user.avatar}/>
                            <p className="text-xl">{user.username}</p>
                            
                            </div>
                    ))}
                    </div>
            )}
        </div>
    )

}