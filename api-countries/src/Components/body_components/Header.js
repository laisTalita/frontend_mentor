import { IoMoonOutline,IoSunny } from "react-icons/io5";
import styles from './Header.module.css'

function Header({modeDark, setModeDark}) {
    return (
        <header className={styles.header}>
            <div className={styles.div}>
                <h1 >Where in the world?</h1>
                <button className={styles.button} onClick={()=> setModeDark(!modeDark)}>
                   {!modeDark?
                    ( <>
                        <IoMoonOutline/>
                        <span>Dark Mode</span>
                        </>
                    ):(
                        <>
                        <IoSunny/>
                         <span>Light Mode</span>
                        </>
                    )}
                </button>
            </div>
        </header>
    )
}export default Header