import styles from './Search.module.css'
import { IoSearch } from "react-icons/io5";

function Search({searchTerm, setSearchTerm}) {

    function handleWrite(e) {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }
    return(
        <section className={styles.search}>
            <IoSearch/>
            <input type="text" onChange={handleWrite} value={searchTerm} placeholder="Search for a country...">
            </input>
        </section>
    )
}export default Search