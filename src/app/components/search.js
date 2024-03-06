import { useState } from "react"

export default function SearchBar ({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value.trim())

        onSearch(searchTerm)
    }



    return (
        <div className="w-md">
             <input className="border-2 border-gray-300 bg-white p-2 rounded-lg focus:outline-none" 
            type="search" placeholder="Search usernames" value={searchTerm} onChange={handleSearchTerm}>
            </input>
        </div>
       
            
    )
}