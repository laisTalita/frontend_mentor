import styles from './Fotter.module.css'
function Fotter(params) {
    return(
        <footer className={styles.rodape}>
            <p>Challenge by 
                <a href="https://www.frontendmentor.io/profile/laisTalita" target="_blank"> Frontend Mentor</a>. Coded by 
                <a href="https://github.com/laisTalita" target="_blank"> Lais Talita</a>
            </p> 
        </footer>
    )
}export default Fotter