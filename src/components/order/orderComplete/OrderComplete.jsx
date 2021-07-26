import { Fragment, useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


import './orderComplete.css'

export const OrderComplete = ({id, user }) => {

const { restartCart} = useContext(CartContext)

return(

    <Fragment>
        <div className='order-wrap'>
            <h2 className='order--title'>Compra realizada con Exito!</h2>
            <p className='order--info'>id de compra: {id} </p>
            <p className='order--info'>usuario: {user} </p>
            <Link exact path to='/'><div className='order--button' onClick={restartCart}>Ver Productos</div></Link>
        </div>
    </Fragment>
)
}