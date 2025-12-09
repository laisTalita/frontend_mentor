import styles from '../styles/ChangeTheme.module.css' 
import ButtonItems from './ButtonItems'

function ChangeTheme({theme,setTheme}) {
    return(
        <nav className={styles.navTheme}>
            <h1 className={styles.logoTheme}>todo</h1>

            <div className={styles.containerTheme}>
                <ButtonItems onClick={()=> setTheme(!theme)}>
                   <img 
                   src={theme ? "./images/icon-sun.svg" : "./images/icon-moon.svg"} 
                   alt={theme ? "ligth theme" : "dark theme"}/>
                </ButtonItems>
            </div>
        </nav>
    )
}export default ChangeTheme