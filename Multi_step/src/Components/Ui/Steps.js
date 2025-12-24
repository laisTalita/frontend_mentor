import styles from '../Styles/Step.module.css'

function Steps({valueStep,setStep}) {
    const steps =[
        {id:1,tittle:"step 1", text:"your info"},
        {id:2,tittle:"step 2", text:"select plan"},
        {id:3,tittle:"step 3", text:"add-ons"},
        {id:4,tittle:"step 4", text:"summary"}
    ]
    return(
        <header className={styles.containerStep}>  
        {
            steps.map(item =>(
                <div className={styles.row_large}>
                <div className={
                `${valueStep === item.id? 
                 styles.active : styles.inativo} 
                 ${styles.step}`}>{item.id}</div>
                    <div className={styles.invis}>
                        <span>{item.tittle}</span>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))
        } 
        </header>
    )}export default Steps