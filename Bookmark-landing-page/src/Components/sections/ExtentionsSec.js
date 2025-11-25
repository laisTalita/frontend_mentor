import Button from "../Component/Button"
import styles from './ExtentionsSec.module.css'
function ExtentionsSec(props) {
    return(
        <section id={props.id} className={`${styles.sec_ext} text-center `}>
        <div className="d-flex flex-column gap-1">
            <h2>Download the extension</h2>
            <p>
                We’ve got more browsers in the pipeline. Please do let us know if you’ve
                got a favourite you’d like us to prioritize.
            </p>
        </div>

        <div className={`${styles.container_cards} d-flex flex-wrap  mt-lg-0 py-1 py-lg-0 gap-5  justify-content-center align-items-center`}>
            <div className={`${styles.card} ${styles.div_1} py-4  pt-5 d-flex flex-column justify-content-center align-items-center `}>
                <img className="mb-2 pb-1" src="./images/logo-chrome.svg" alt="chrome"/>
                <div className="mb-3">
                    <h3>Add to Chrome</h3>
                    <p className="m-0">Minimum version 62</p>
                </div>
                <img className="w-100 position-center" src="./images/bg-dots.svg" alt="dots-backgound"/>
                <Button  className={`${styles.card_but} btn-primary`} text={"Add & Install Extension"}/>
            </div>

            <div className={`${styles.card} ${styles.div_2}  py-4 pt-5 d-flex flex-column justify-content-center align-items-center`}>
                 <img className="mb-2 pb-1"  src="./images/logo-firefox.svg" alt="firefox"/>
                <div className="mb-3">
                    <h3>Add to Firefox</h3>
                    <p className="m-0">Minimum version 55</p>
                </div>
                <img className="w-100 position-center" src="./images/bg-dots.svg" alt="dots"/>
                <Button className={`${styles.card_but}  btn-primary`} text={"Add & Install Extension"}/>
            </div>

            <div className={`${styles.card} ${styles.div_3} py-4 pt-5 d-flex flex-column justify-content-center align-items-center`}>
            <img className="mb-2 pb-1"  src="./images/logo-opera.svg" alt="opera"/>
            <div className="mb-3">
                <h3>Add to Opera</h3>
                <p className="m-0">Minimum version 46</p>
            </div>
            <img className="w-100 position-center" src="./images/bg-dots.svg" alt="background dots"/>
            <Button className={`${styles.card_but} btn-primary`} text={"Add & Install Extension"}/>
            </div>
        </div>
        </section>
    )
    
} export default ExtentionsSec