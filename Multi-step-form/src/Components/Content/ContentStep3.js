import { useEffect } from "react"
import styles from '../Styles/ContentStep3.module.css'
function ContentStep3({inputs,setInput}) {

    const ons = {
        Monthly : [ 
            {id:1,tittle:"Online service", text:"Access to multiplayer games", value:"+$1/mo",price:1},
            {id:2,tittle:"Larger storage", text:"Extra 1TB of cloud save", value:"+$2/mo",price:2},
            {id:3,tittle:"Customizable profile", text:"Custom theme on your profile", value:"+$2/mo" ,price:2}
       ], 
        Yearly:[
            {id:4,tittle:"Online service", text:"Access to multiplayer games", value:"+$10/yr",price:10},
            {id:5,tittle:"Larger storage", text:"Extra 1TB of cloud save", value:"+$20/yr",price:20},
            {id:6,tittle:"Customizable profile", text:"Custom theme on your profile", value:"+$20/yr",price:20}
        ]
    }
    const plan = inputs.plan === "Monthly" ? ons.Monthly : ons.Yearly
    return(
        <>  
        <div section className={"container"}>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
        </div>
           {inputs.planSelected.id?
             plan.map(item =>(
                <label key={item.id} 
                className={`${styles.containerLabel} ${inputs.addons.some(addons => addons.id=== item.id)? 
                styles.activoState : ''}`}>
                    <div className={styles.containerdivlabel}>
                        <input type="checkbox" 
                        onChange={()=>setInput(prev => {
                            const isExist = prev.addons.some(
                            addons => addons.id === item.id);
                           return{...prev,
                            addons: isExist
                            ? prev.addons.filter(addon => addon.id !== item.id)
                            : [...prev.addons, item]}
                        })}
                        checked={inputs.addons.some(addons => addons.id === item.id)} className={styles.checkbox_input}/>
                          <span className={styles.checkmark}></span>
                        <div>
                            <h2>{item.tittle}</h2>
                            <p>{item.text}</p>
                        </div>
                    </div>
                    <span>{item.value}</span>
                </label>
           )):(
              <h2>Choose a plan !!</h2>
           )} 
        </>
    )}export default ContentStep3