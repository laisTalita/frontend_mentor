import ButtonItems from "./ButtonItems"

function ClearCompleted({onDeleteAll}){
    return(
        <ButtonItems className="itemsP" onClick={onDeleteAll}>
            <p>Clear Completed</p>
        </ButtonItems>
    )
}export default ClearCompleted