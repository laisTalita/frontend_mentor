import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import style from "../styles/ItemList.module.css"
import ButtonItems from "./ButtonItems";

function ItemList({item,onDelete,onComplete}){

const {attributes,listeners, setNodeRef, transform, transition} = useSortable({id: item.id});
    return(
        <section 
        ref={setNodeRef} 
        className={`${style.itemContainer} itemContainer`}>
            <div className={style.itemList}>
                <div className={style.itemSec}>
                    <label className={style.itemCheck}>
                        <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => {onComplete(item)}}/>
                    
                        <span 
                        className={`
                        ${style.customCheck} customCheck`}></span>
                    </label>
                    <div className={style.containerText}>
                        <p 
                        className={`${style.itemP} itemP 
                        ${item.completed ? 
                        `${style.completed} completed`: ''}`} {...attributes} {...listeners}
                        >{item.text}</p>
                    </div>
                </div>
                <ButtonItems 
                className={style.removeItem} 
                onClick={() => onDelete(item.id)}>
                    <img src="./images/icon-cross.svg" alt="delete"/>
                </ButtonItems>
            </div>
            <hr/>
        </section>
    )
}export default ItemList