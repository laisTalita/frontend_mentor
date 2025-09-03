import { useEffect, useState } from "react"

import Button_Controler from "./Buttons/Button_Controler"
import Button from "./Buttons/Button"
import {Convert} from "./utils/FormatPrice"

import './Card.css'

function Card({img,name,category,price,func,car}){
    const[image, setImage]= useState()    
    const[button_click,setButton_click] =useState(false)
    const product = {name,category,price,image}

    useEffect(()=>{
        function rezise(){
            if (window.innerWidth >= 1024) {
                setImage(img.desktop)
            }
            else if (window.innerWidth >= 768) {
            setImage(img.tablet);
            }
            else setImage(img.mobile);
        }
        rezise()
        window.addEventListener('resize',rezise)
        return ()=>{
            window.removeEventListener('resize',rezise)
        }
    },[img])  
    const realQuantity = car.find(item => 
        item.name === name)?.quantity || 0
        
    function click() {         
        setButton_click(true)
        func(product, 1)
    }
    const teste =(x)=>{
        if (realQuantity >= 1) {
            func(product,x)
        }
        else{
            setButton_click(false)
        }
    }

    return(
        <article className="itens">
            <section className={button_click && realQuantity>0? 'itens_border': 'itens_normal'}>
                <img src={image} alt={name}/>
                {
                    button_click && realQuantity >0?(
                       <Button_Controler 
                        increment={()=>teste(1)} 
                        decrement={()=>teste(-1)}
                        quantity={realQuantity}
                       />
                    )
                    :(
                        <Button className={'botao_itens'}onClick={click} img={'./assets/images/icon-add-to-cart.svg'} text={'Add to Cart'}/>
                    )
                }     
            </section>
            <section className="sec_text">
                <p className="category">{category}</p>
                <h2 className="name">{name}</h2>
                <span className="price">{Convert(price)}</span>
            </section>
        </article>
    )
}
export default Card