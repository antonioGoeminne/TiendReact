import deleteButton from "../../assets/icons/deleteButton.svg"
import { CartContext } from "../context/CartContext"
import { Fragment, useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Cart.css'
export const Cart = () => {

        const { cart, setTotal, total , setProductQuantity, removeItem} = useContext(CartContext)

        useEffect(() => {
                const nextTotal = cart.map(({item, quantity}) => item.price * quantity).reduce((totalPrice, currentPrice) => totalPrice + currentPrice,0)
                const nextQuantity = cart.map(({quantity})=> quantity).reduce((quantity) => quantity +1, 0)
                setProductQuantity(nextQuantity)
                setTotal(nextTotal)
        }, [cart])
    
       
 
        return (
                <Fragment>
                        {cart.map((product) => {
                                const subTotalPricePerProduct = product.item.price * product.quantity
                                return (
                                        <div className='cart-wrap'>

                                                <div className='book-wrap'>
                                                        <img src={product.item.pictureURL} className='book-picture'></img>
                                                        <div className='book-info'>
                                                                <h2 className='book-title'></h2>
                                                                <h3 className='book-author'></h3>
                                                        </div>
                                                </div>

                                                <div className='subTotal-price-wrap'>
                                                        <img className='remove-item' src={deleteButton} onClick={(() => removeItem(product.item.id))}></img>
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
                                                                <h3>${subTotalPricePerProduct}</h3>
                                                        </div>
                                                </div>

                                        </div>

                                )
                        })
                        }
                                                { cart.length > 0 ? <div className='total-price'><p className='total-price-text'>Precio Total:${total}</p><Link to='./order'><button className='total-price-btn-confirm'>Confirmar Compra</button></Link></div>: <div className='total-price__empty-cart'>Aun no tienes productos en el carrito</div>}

                </Fragment>
        )
}
