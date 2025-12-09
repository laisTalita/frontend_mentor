import { useEffect, useState } from "react";
import CreateTask from "./Components/ui/CreateTask";
import { Create, ListAll, DeleteTask ,CompleteTask,DeleteAll} from "./Components/api/Funcs";
import TaskList from "./Components/ui/TaskList";
import SectionTask from "./Components/ui/SectionTask";
import ChangeTheme from "./Components/ui/ChangeTheme";
import ClearCompleted from "./Components/ui/ClearCompleted";
import Incompletas from "./Components/ui/Incompletas";
import Footer from "./Components/ui/Footer";

function App() {
  const [tasks, setTasks] = useState([])
  const [alltasks, setAllTasks] = useState([])
  const incompletas = tasks.filter(t => !t.completed).length

  const [theme,setTheme] = useState(()=>{
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved):true;
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
  if (filter === "all") setTasks(alltasks)

  else if (filter === "active") {
    setTasks(alltasks.filter(t => !t.completed))
  } 
  else if (filter === "completeds") {
    setTasks(alltasks.filter(t => t.completed))
  }
  }, [alltasks, filter])

  useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(theme));
    if (theme) {
      document.body.classList.add("dark")
    }else{
      document.body.classList.remove("dark")
    }
  },[theme])

  async function loadTask() {
    const data = await ListAll()
    setTasks(data)
    setAllTasks(data)
  }
  async function handleTasks(task) {
    await Create(task)
    loadTask()
  }
  async function handleDelete(task) {
    await DeleteTask(task)
    setTasks(prev=>{
        const update = prev.filter(t=> t.id !== task)
        return update 
      })
    setAllTasks(prev => prev.filter(t => t.id !== task))
  } 
  async function complete(task) {
    let value = !task.completed
    await CompleteTask(task.id,value)
      setTasks(prevTasks =>
      {
       const update = prevTasks.map(t =>
          t.id === task.id ? { ...t, completed:value} : t
        )
        setAllTasks(update)
        return update 
      })
  }
  async function DeleteCompleted() {
    await  DeleteAll()
      
    const update = tasks.filter(t => !t.completed) 
    setTasks(update)
    setAllTasks(update)
    
    loadTask()
  }
  useEffect(()=>{
    loadTask()
  },[])

  return (
    <div className="App">
      <header>
        <ChangeTheme theme={theme} setTheme={setTheme}/>
      </header>
      <main>
        <CreateTask onCreate={handleTasks}/>
        <section className="bgWhite">
          <div className="div_container">
            <TaskList tasks={tasks} onDelete={handleDelete} onComplete={complete} setTasks={setTasks} setAllTasks={setAllTasks}/>
          </div>
          <div className="itemsLeft">
              <Incompletas text={incompletas}/>
               <section className="visible">
                  <SectionTask allTasks={alltasks} setTasks={setTasks} filter={filter} setFilter={setFilter}/>
              </section>
              <ClearCompleted onDeleteAll={DeleteCompleted}/>
          </div>
        </section>

        <section className="invisible">
          <SectionTask filter={filter} setFilter={setFilter}/>
       </section>
         <p className="text_reorder">
          Drag and drop to reorder list 
        </p>
      </main>
      <Footer/>
  </div>
  );
}

export default App;
