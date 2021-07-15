import { CartContext } from "../context/CartContext"
import { Fragment, useContext } from "react"
import './Cart.css'
export const Cart = () => {

        const { cart, quantity } = useContext(CartContext)
        
                
        

        return (
                <Fragment>
                        {cart.map((product) => {
                                const precioSubTotal = product.item.price * product.quantity
return(
                <div className='cart-wrap'>
                                
                                <div className='book-wrap'>
                                <img src={product.item.pictureURL} className='book-picture'></img>
                                <div className='book-info'>
                                <h2 className='book-title'></h2>
                                <h3 className='book-author'></h3>
                                </div>
                        </div>
               
                        <div className='subTotal-price-wrap'>
                                <div className='price-wrap'>
                                <h3>Precio</h3>
                                <h3>${product.item.price}</h3>
                                </div>
                                <div className='price-wrap'>
                                <h3>Cantidad</h3>
                                <h3>{product.quantity}</h3>
                                </div>
                                <div className='price-wrap'>
                                <h3>subtotal</h3>
                                <h3>${precioSubTotal}</h3>
                                </div>

                        </div>
                </div>
                        )

         })
        }
                </Fragment>
        )
}
