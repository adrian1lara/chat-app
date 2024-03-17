import { useEffect, useState } from "react";
import UserAvatar from "./avatar";


export default function UserDisplay({usernames, onUserSelect}) {

    const [selectedUser, setSelectedUser] = useState(null);

  const handleClick = (userId) => {
    setSelectedUser(userId);
  };


    return (
        <div className="overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded">
            {usernames && (
                <div className="w-md  space-y-5" style={{maxHeight:"500px"}}>
                    {usernames.map((user) => (
                        <div key={user._id} className={`flex items-center cursor-pointer  hover:bg-gray-200 border-2 border-slate p-2 max-w-sm rounded-2xl
                        ${selectedUser === user._id ? 'bg-gray-200' : 'bg-none'}`}
                        onClick={()=>{
                            handleClick(user._id)
                            onUserSelect(user)}}>
                            <UserAvatar  img={user.avatar}/>
                            <p className="mx-2 text-xl">{user.username}</p>
                            </div>
                    ))}
                    </div>
            )}
        </div>
    )

}