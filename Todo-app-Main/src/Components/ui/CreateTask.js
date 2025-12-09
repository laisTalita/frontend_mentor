import { useState } from "react"
import styles from '../styles/CreateTask.module.css'

function CreateTask({onCreate}) {

    const [task, setTask] = useState("")

    const handleCreate = (e)=> {
        if(e.key ==="Enter"){
            const text = task.trim()
            if (!text) return

            const newTask = { 
            text: text , 
            completed : false }
        
            onCreate(newTask)
            setTask("")
        }
    }
    

    return(
        <div className={`${styles.createTask} createTask`}>
            <div className={`${styles.createTaskCircle} createTaskCircle`}></div>

            <input type="text" 
            value={task}
            onChange={(e)=> setTask(e.target.value)} 
            onKeyDown={(handleCreate)}
            placeholder="Create a new todo..."/>
        </div>
    )
}export default CreateTask