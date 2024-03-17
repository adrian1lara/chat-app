
import avatarDefault from "../assets/defaultavatar.png"
import Image from "next/image"
export default function ProfileAvatar ({img}) {

    return (
        <Image className="max-w-40 max-h-40 rounded-lg" 
        src={img ? img : avatarDefault} 
        alt="profile image" width={100} height={100}/>
    )
}