import Image from "next/image";
import avatarDefault from '../assets/defaultavatar.png'
export default function UserAvatar({img}) {

    return (
        <Image className="w-10 h-10 rounded-lg" 
        src={img ? img : avatarDefault} 
        alt="profile img" width={100} height={100} objectFit="scale-down"/>
    )

}