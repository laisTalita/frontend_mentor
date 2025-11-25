import {useState } from "react"
import Button from "../Component/Button"
import styles from './Features.module.css'

const content ={
        bookmark :(
            <div className= {`${styles.container_prin} d-flex flex-wrap align-items-center`}>
              <div className={styles.container_image}>
                <img src="./images/illustration-features-tab-1.svg" alt="features background"/>
              </div>
              <div className={` ${styles.container_texts}  text-center d-flex flex-column gap-3`}>
                <h3>Bookmark in one click</h3>
                <p>
                Organize your bookmarks however you like. Our simple drag-and-drop interface
                gives you complete control over how you manage your favourite sites.
                </p>
                <button className={`${styles.but_container_text} btn-primary d-none d-lg-block`}>More Info</button>
              </div>
            </div>
        ),
        search :(
            <div className= {`${styles.container_prin} d-flex flex-wrap align-items-center`}>
              <div className={styles.container_image}>
                  <img src="./images/illustration-features-tab-2.svg" alt="features background 2"/>
                </div>
              <div className={` ${styles.container_texts}  text-center d-flex flex-column gap-3`}>
                  <h3>Intelligent search</h3>
                  <p>
                  Our powerful search feature will help you find saved sites in no time at all.
                  No need to trawl through all of your bookmarks.
                  </p>
                <button className={`${styles.but_container_text} btn-primary d-none d-lg-block`}>More Info</button>
               </div>
            </div>
        ),
        sharing :(
          <div className= {`${styles.container_prin} d-flex flex-wrap align-items-center `}>
            <div className={styles.container_image}>
                <img src="./images/illustration-features-tab-3.svg" alt="background features-3"/>
            </div>
            <div className={` ${styles.container_texts}  text-center d-flex flex-column gap-3`}>
              <h3>Share your bookmarks</h3>
              <p>
              Easily share your bookmarks and collections with others. Create a shareable
              link that you can send at the click of a button.
              </p>
                <button className={`${styles.but_container_text}  btn-primary d-none d-lg-block`}>More Info</button>
              </div>
          </div>
      )
}
function Features(props) {

  const [choise, setChoise] = useState("bookmark")
  return(
    <section id={props.id} className={`${styles.section_1} mx-auto`}>
      <section className={`${styles.section_2} text-center d-flex flex-column align-items-center gap-1`}>
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.
        </p>     
        <nav className="p-0 mt-3 w-100 d-md-flex justify-content-md-between ">
            <li className={choise === "bookmark" ? styles.select : ""}>
              <Button onClick={()=> setChoise("bookmark")} className={ `${styles.button_Featu}`} text={"Simple Bookmarking"}/>
            </li>
            <li className={choise === "search" ? styles.select : ""}>
              <Button onClick={()=> setChoise("search")} className={ `${styles.button_Featu} `} text={"Speedy Searching"}/>
        
              </li>
            <li className={choise === "sharing" ? styles.select : ""}>
              <Button onClick={()=> setChoise("sharing")} className={ `${styles.button_Featu}`} text={"Easy Sharing"}/>
              </li>
        </nav>
      </section>

        <section className={`${styles.container_itens} tab-content`}>
          {content[choise]}
        </section>
     
    </section>
  )}
export default Features