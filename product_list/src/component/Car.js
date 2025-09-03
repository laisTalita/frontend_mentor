import Button from "./Buttons/Button"
import { Convert } from './utils/FormatPrice'
import './Car.css'

function Car({item,onRemove}) {
      return (
      <> 
        <div className='items-add'> 
            <div className="container_itens">
                <h3 className="item_name">{item.name}</h3>
                <div className='container-flex'>
                    <p className="x_quant">{item.quantity}x</p>
                    <p className="item_price">@{Convert(item.price)}</p>
                    <p className="item_price item_total" >{Convert(item.price * item.quantity)}</p>
                </div>
            </div>
            <Button onClick={()=> onRemove(item)}className={'remove_button'} img={'./assets/images/icon-remove-item.svg'} alt='remove'/>
        </div> 
      </>
    )
}export default Car