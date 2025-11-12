import styles from './Options.module.css'
import { RiArrowDropDownLine } from "react-icons/ri";

function Options({region,setRegion}) {
  const regions =[
    {name:"Africa", value:"africa"},
    {name:"America", value:"america"},
    {name:"Asia", value:"asia"},
    {name:"Europe", value:"europe"},
    {name:"Oceania", value:"oceania"}
]
  return (
    <section className={styles.wrapper}>
      <select 
       value={region}
       onChange={(e)=> setRegion(e.target.value)}
       className={styles.select}>

        <option value="">
          Filter by Region
        </option>
        {regions.map((item)=>(
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <RiArrowDropDownLine className={styles.icon}/>
    </section>
  )
}
export default Options
