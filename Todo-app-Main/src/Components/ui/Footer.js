import style from '../styles/Footer.module.css'
function Footer() {
    return(
        <footer className={`${style.footer} footer`}>
            <p>
             Challenge by 
             <a href="https://www.frontendmentor.io/home" target="_blank"> Frontend Mentor </a>. Coded by 
             <a href="https://portifolio-two-tawny-40.vercel.app/" target="_blank"> Lais Talita </a>.
            </p>
        </footer>
    )
}export default Footer