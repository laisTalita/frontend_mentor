import  Button from "../Ui/Button"
import { useEffect, useState } from "react"
import styles from '../Styles/ContentStep2.module.css'
import { BiSolidToggleRight, BiSolidToggleLeft } from "react-icons/bi";

function ContentStep2({input,setInput}) {
const [billing, setBilling] = useState("Monthly"); 

useEffect(()=>{
    if (input.plan) {
        setBilling(input.plan)
    }
},[input.plan])

const Monthly = [
      { id:1, name: "Arcade", value: "$9/mo", price:9, img:"./assets/images/icon-arcade.svg",text:"" },
      {id:2, name: "Advanced", value: "$12/mo",price:12,img:"./assets/images/icon-advanced.svg",text:"" },
      {id:3, name: "Pro", value: "$15/mo" ,price:15, img:"./assets/images/icon-pro.svg",text:"" }
    ]
const Yearly = [
      {id:1, name: "Arcade", value: "$90/yr",price:90, img:"./assets/images/icon-arcade.svg",text:"2 months free" },
      {id:2, name: "Advanced", value: "$120/yr",price:120,img:"./assets/images/icon-advanced.svg" ,text:"2 months free"},
      {id:3, name: "Pro", value: "$150/yr",price:150,img:"./assets/images/icon-pro.svg",text:"2 months free"}
]
function handleChange() {
    setBilling(prev => prev === "Monthly" ? "Yearly" : "Monthly")
}

const plans = billing === "Monthly" ? Monthly : Yearly;
 
    return(
        <>
          <div className={"container"}>
              <h1 className={styles.h1_2}>Select your plan</h1>
              <p className={styles.phara}>You have the option of monthly or yearly billing.</p>
          </div>
          <div className={styles.container_width}>
              {
                plans.map(item =>(
                    <div className={`${styles.container_step} ${input.planSelected.value === item.value? styles.selected : ''}`}
                     onClick={()=> setInput(prev => {
                        const planChanged = prev.plan !== billing;
                        return {
                            ...prev,
                            planSelected: item,
                            plan: billing,
                            addons: planChanged ? [] : prev.addons
                        }})}key={item.id}
                        >
                        <img src={item.img}/>
                        <div>
                            <h2>{item.name}</h2>
                            <p>{item.value} </p>
                            <span>{item.text}</span>
                        </div>
                    </div>
                ))
              }
          </div>
          <div className={styles.containerToggle}>
              <p className={billing ==='Monthly' ? styles.text_blue :''}>Monthly</p>
              <Button onClick={handleChange} className={styles.toogleBut}>
                  {billing === 'Monthly'?
                    <BiSolidToggleLeft className={styles.iconBut}/>:<BiSolidToggleRight className={styles.iconBut}/>
                  }
              </Button>
              <p className={billing ==='Yearly' ? styles.text_blue :''}>Yearly</p>
          </div>
        </>
    )
}export default ContentStep2