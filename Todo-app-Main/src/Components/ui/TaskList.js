import { closestCorners, DndContext } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import ItemList from "./ItemList";

function TaskList({tasks,onDelete,onComplete,setTasks,setAllTasks}) {    

function handleDragEnd(event) {
    const {active, over} = event; 
    if (!over) return;

    if (active.id !== over.id) { 
        const oldIndex = tasks.findIndex(t => t.id === active.id);
        const newIndex = tasks.findIndex(t => t.id === over.id);
        const arr =(arrayMove(tasks, oldIndex, newIndex))
        setTasks(arr);
        setAllTasks(arr)
    }
}
    return(
        <section>
            <DndContext 
            collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
                <SortableContext 
                items={tasks.map(t=>t.id)} 
                strategy={verticalListSortingStrategy}>
                    {tasks.map(t=>(
                       <ItemList key={t.id} item={t} onDelete={onDelete} onComplete={onComplete}/>
                    ))}
                </SortableContext>
            </DndContext>           
        </section>
    )
}export default TaskList