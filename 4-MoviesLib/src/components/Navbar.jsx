import styles from "./Navbar.module.css"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

const Navbar = () => {
    const navigate = useNavigate()
    const[search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return(
        <nav className={styles.navbar}>
            <h2>
                <Link to="/"><BiCameraMovie/>MoviesLib</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" name="search" id="search"
                    placeholder="Search for a movie"
                    value={search}
                    onChange={(e) => {setSearch(e.target.value)}}
                />
                <button type="submit"><BiSearchAlt2/></button>
            </form>
        </nav>
    )
}

export default Navbar