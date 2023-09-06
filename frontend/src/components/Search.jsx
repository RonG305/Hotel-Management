import { useState } from "react"


const Search = ({onSearch}) => {

    const [searchTerm, setSearchTerm] = useState("")


    const handleSearch = () => {
        onSearch(searchTerm)
    }

    const styles = {
        inputStyle: " rounded-md outline-none border-gray-300",
        buttonStyles: " bg-purple-500 rounded ml-3 px-2 py-2 text-white font-bold"
    }
    return (
        <div>
            <input
                className={styles.inputStyle}
                type="search"
                placeholder="search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch} className={styles.buttonStyles}>search</button>
        </div>
    )
}

export default Search