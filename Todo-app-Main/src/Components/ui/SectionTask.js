import ButtonItems from "./ButtonItems"
import styles from '../styles/SectionTask.module.css'

function SectionTask({filter, setFilter}) {

 const active=(valor)=>{
    return `${styles.textTaks} textTask 
    ${filter === valor ? `${styles.active} active`:''}`
 }

    return(
        <section className={`${styles.sectionTasks} sectionTasks`}>
            <ButtonItems className={active("all")}
            onClick={()=> {setFilter("all")}}>
                <p>all</p>
            </ButtonItems>
            <ButtonItems className={active("active")} 
            onClick={()=> {setFilter("active")}}>
                <p>active</p>
            </ButtonItems>
            <ButtonItems className={active("completeds")} 
            onClick={()=> {setFilter("completeds")}}>
                <p>completed</p>
            </ButtonItems>     
        </section>
    )
}export default SectionTask