import cardStyle from './Card.module.css'
import { Link } from 'react-router-dom'
function Card({children,to}){
    return(
        <Link to={to} className={cardStyle.card}>
            {children}
        </Link>
    )
}export default Card