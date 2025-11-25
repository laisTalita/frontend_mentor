import styles from '../sections/Features.module.css'

function Button({text, className, onClick}) {
    return(
    <button onClick={onClick} className={className}> <span className={styles.text}>{text}</span>
    </button>
    )
}export default Button