import { useState } from "react";
import Button from "../Component/Button"
import styles from  './Contact.module.css'

function Contact(props) {

const [email,setEmail]= useState('')
const [verificaEmail,setVerificaEmail] =useState(null)

    function handleEmail(e) {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let text = email.trim();

    setVerificaEmail(emailRegex.test(text))
    setTimeout(()=>{
        setVerificaEmail(null)
        setEmail('')
    },1700)

};


    return(
        <section id={props.id} className={`${styles.contact} text-center d-flex justify-content-center gap-4`}>
            <div className={`${styles.container_contactP} d-flex gap-4 flex-column`}>
                <div>
                    <p className="text-white mb-2">
                        35,000+ already joined</p>
                    <h2 >Stay up-to-date with what we’re doing</h2>
                </div>
                <form className={`${styles.container_contact} d-flex flex-wrap justify-content-center align-items-start gap-3`}  onSubmit={handleEmail}>
                    <div className={`
                    ${verificaEmail === null? styles.email 
                    : verificaEmail === false?
                     styles.emailRed : styles.emailG} ${styles.email}`}>

                        <div className={`${styles.input} d-flex bg-white px-2 justify-content-between align-items-center`}>
                            <input className="w-75"  type="text"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Enter your email address"/>
                            {verificaEmail === false &&(
                             <img className={styles.image_error} src="./images/icon-error.svg" alt="error"/>
                            )}
                        </div>
                        <p className={`${verificaEmail ===false ? 'd-block' : 'd-none'}`}>Whoops, make sure it's an email</p>
                        
                        <p className={`${verificaEmail ===true ? 'd-block' : 'd-none'}`}> email sent! </p>
                    </div>
                    <Button className={`${styles.but_contact} w-100`} type="submit" text={"Contact Us"}/>
                </form>
            </div>
        </section>

    )
}export default Contact