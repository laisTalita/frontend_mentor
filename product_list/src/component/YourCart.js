import { useMemo, useState } from 'react';
import { Convert } from './utils/FormatPrice'
import Button  from './Buttons/Button';
import Car from './Car'
import './YourCart.css'

function YourCart({car,onRemove,setConfirmed}) {

    const {value, total}= useMemo(()=>{
        return (car||[]).reduce((acc, item) => {
            acc.value += item.quantity || 0 ;
            acc.total += item.price * item.quantity;
            return acc
        },{value:0, total:0});
    },[car])
           
    return(
        <>
         <h3 className='YourCart'>Your Cart ({value})</h3>
            { value >0 ?(
               <section className='sec_itens'>
                    {car.map(item=>(
                        item.quantity > 0 && (
                        <Car key={item.name} item={item} onRemove={onRemove}/>
                    )))}
                    <div className='order_total_div'>
                        <h4> Order Total</h4>
                        <span>{Convert(total)}</span>
                    </div>
                    <aside className='carbon-Neutral'>
                        <img src='./assets/images/icon-carbon-neutral.svg' alt='carbon-neutral-icon'/>
                        <p>This is a <strong>carbon-neutral</strong> delivery</p>
                    </aside>
                    <Button onClick={()=> setConfirmed([...car])} className={'button_confirm'} text={'Confirm Order'}/>
               </section>
            ):(
            <section className="items_cart">
                <img src="./assets/images/illustration-empty-cart.svg" alt='cart-illustration'/>
                <p>Your added items will appear here</p>
             </section>
            )}
        </>
    )
}export default YourCart