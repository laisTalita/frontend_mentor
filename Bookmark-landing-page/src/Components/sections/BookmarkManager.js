import Button from "../Component/Button"
import styles from './BookmarkManager.module.css'

function BookmarkManager() {
    return(
        <section className={`d-flex flex-column gap-5 gap-md-4 gap-lg-0 ${styles.bookmark} mx-auto`}>
            <div className={`${styles.container_img}`}>
                <img  src="/images/illustration-hero.svg" alt="Bookmarks illustration"/>
                <img className={`${styles.image_ab}`} src="./images/Rectangle_1.svg" alt="background"/>
            </div>
           <div className={`${styles.div_cont} mt-2 d-flex flex-column justify-content-center text-center  text-lg-start mx-auto gap-2`}>
               <h1>A Simple Bookmark Manager</h1>
                <p>
                A clean and simple interface to organize your favourite websites. Open a new
                browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className={`${styles.containerButton} d-flex justify-content-center gap-3 justify-content-lg-start mt-2`}>
                    <Button className={"btn btn-primary"} text={"Get it on Chrome"}/>
                    <Button className={styles.btn_gray} text={"Get it on Firefox"} />
                </div>
           </div>
       </section>
    )
}export default BookmarkManager