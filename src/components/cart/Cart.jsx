import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import './Cart.css'
export const Cart = () => {

        const { product, quantity } = useContext(CartContext)
        const { id, pictureURL, name, title, author, price, categoryId } = product

        const TotalPriceProduct = price * quantity

        return (
                <div className='cart-wrap'>
                        <div className='book-wrap'>
                                <img src={pictureURL} className='book-picture'></img>
                                <div className='book-info'>
                                <h2 className='book-title'>{name}</h2>
                                <h3 className='book-author'>{author}</h3>
                                </div>
                        </div>
                        <div className='subTotal-price-wrap'>
                                <div className='price-wrap'>
                                <h3>precio</h3>
                                <h3>${price}</h3>
                                </div>
                                <div className='price-wrap'>
                                <h3>cantidad</h3>
                                <h3>{quantity}</h3>
                                </div>
                                <div className='price-wrap'>
                                <h3>subtotal</h3>
                                <h3>{TotalPriceProduct}$</h3>
                                </div>

                        </div>
                </div>

        )
}
