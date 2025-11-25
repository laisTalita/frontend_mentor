import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={`${styles.footerSec} text-center p-2`}>
            
            <nav className='d-flex flex-column flex-md-row align-items-center mx-auto gap-3 justify-content-md-between'>
                 
                <ul className='p-0 d-flex flex-column flex-md-row gap-md-4 mb-md-0'>
                    <img className="navbar-brand" src="/images/Group.svg" alt="Logo" />
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className={`${styles.container_icon_footer} d-flex justify-content-between w-25`}>
                    <img src="/images/icon-facebook.svg" alt="Facebook" />
                    <img src="images/icon-twitter.svg" alt="Twitter" />
                </div>
            </nav>

            <hr />

            <p className="attribution w-75 mb-0 mx-auto">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/laisTalita" target="_blank">Lais Talita</a>.
            </p>

        </footer>
    )
}

export default Footer
