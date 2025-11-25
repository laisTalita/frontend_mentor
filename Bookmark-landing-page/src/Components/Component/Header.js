import { useState } from 'react'
import styles from './Header.module.css'
import  Button  from './Button'

function Header() {
    const[isOpen, setIsOpen] =useState(false)
  return (
    <header className={` ${isOpen ? `${styles.change}` :''}`}>
      <nav className="navbar navbar-expand-md mx-auto">
        <div className= {`container d-flex align-items-center ${styles.div_container}`}>

         { !isOpen ? 
            (<img className="navbar-brand mt-md-3"
            src="/images/logo-bookmark.svg" alt="Logo" />):(
                <img className="navbar-brand "
            src="/images/Group.svg" alt="Logo" />
            ) }

          <button 
            className="navbar-toggler border-0 p-0 shadow-none"
            onClick={()=> setIsOpen(!isOpen)}>
            {
                !isOpen ? 
                (<img src="/images/icon-hamburger.svg" alt="Menu"/>):
                (
                   <img src="/images/icon-close.svg" alt="Close Menu"/> 
                )
            }
          </button>

          <div className={`collapse navbar-collapse d-md-flex justify-content-center justify-content-md-end gap-md-4  ${isOpen ? 'show':''}`} id="navegacao">
            <ul className={`navbar-nav text-center gap-md-3 gap-lg-5 align-items-md-center ${styles.lista}`} >
              <li className="nav-item"><a href="#features">Features</a></li>
              <li className="nav-item"><a href="#pricing">Pricing</a></li>
              <li className="nav-item"><a href="#contact">Contact</a></li>
              <li><Button className={`text-white w-100 mt-md-0 ${styles.bot_nav}`} text={"Login"}/></li>
            </ul>
           
          </div>
        </div>
      </nav>
        {isOpen ?(
            <div className={`d-flex justify-content-center position-absolute  w-100 ${styles.icons_nav}`}>
                <img src='/images/icon-facebook.svg' alt='icon-Facebook'/>
                <img src='/images/icon-twitter.svg' alt='icon-twitter'/>
            </div>
        ):('')}
    </header>
  )}

export default Header
