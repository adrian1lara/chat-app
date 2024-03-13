import { IoLogoGithub } from "react-icons/io"

export default function Footer () {
    return (
        <footer className="w-full bottom-0 ">
            <div className="flex block justify-center p-2 items-center 
            text-center  border-t-2 mt-5">
                <p className="text-lg text-black font-semibold p-2 italic">
                    Created by <a 
                    className="bg-blue-700 p-2 rounded-xl text-white ease-in duration-300 hover:bg-blue-100 hover:text-black"
                    target="_blank" href="https://github.com/adrian1lara">adrian1lara</a>
                    </p>
                    <IoLogoGithub size={30} color="black"/>
            </div>
        </footer>
    )
}