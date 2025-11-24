function Button({onClick,img =null,text =null,className=null}){
    return(
        <button className={className} onClick={onClick}>
           {img && <img src={img} alt={text}/>}
            {text}
        </button>
    )
}export default Button