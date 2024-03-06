import { useState } from "react"

export default function SearchBar ({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value.trim())

        onSearch(searchTerm)
    }



    return (

        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" 
        type="search" placeholder="Search usernames" value={searchTerm} onChange={handleSearchTerm}>
        </input>
            
    )
}