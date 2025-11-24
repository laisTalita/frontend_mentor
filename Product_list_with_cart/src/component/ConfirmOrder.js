import Button from './Buttons/Button'
import './ConfirmOrder.css'
import { Convert } from './utils/FormatPrice'

function ConfirmOrder({confirmed,setConfirmed,setCar}) {    

    let valorTotal = confirmed.reduce((acc, item)=>
        acc + (item.quantity * item.price) ,0
    )
    return(
        <div className='div_relative'>
            <section id='confirme_order'>
             <img className='img_confirme' src='./assets/images/icon-order-confirmed.svg' alt='confirm'/>
             <h2>Order Confirmed</h2>
             <p className='confirm_p'>We hope you enjoy your food!</p>
                <div className='order_final'>
                    {
                        confirmed.map(item =>{
                        return (
                            <div className='order_flex princ' key={item.name}>
                                <div className='order_flex two'>
                                    <img className='img_confirm' src={item.image} alt='confirm'/>
                                    <div className='div_princial'>
                                        <p>{item.name}</p>
                                        <div className='flex_row'>
                                            <span>{item.quantity}x</span>
                                            <p>@ {Convert(item.price)}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='final_quant'>{Convert(item.quantity * item.price)}</p>
                            </div>
                            )
                        })
                    }
                    <aside className='order_total_confirmed'>
                       <p>Order Total</p>
                        <span>{Convert(valorTotal)}</span>
                    </aside>
                </div>
                <Button onClick={()=>{ 
                    setConfirmed([]);
                    setCar([]);
                }} text={'Start New Order'} className={'button_confirm'}/>
            </section>
        </div>
    )
}export default ConfirmOrder