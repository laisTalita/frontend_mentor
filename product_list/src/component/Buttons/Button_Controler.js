import Button from "./Button"
import './Button_Controler.css'
import {useState } from "react"


function Button_Controler({quantity, increment,decrement}) {
    return(
        
        <div className="Controler_Buttons">
            <Button className={'bots'} onClick={decrement} img={'./assets/images/icon-decrement-quantity.svg'}/>
            <p>{quantity}</p>
            <Button className={'bots'} onClick={increment} img={'./assets/images/icon-increment-quantity.svg'}/>
        </div>
        
    )
}export default Button_Controler