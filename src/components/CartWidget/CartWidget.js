import cartWidget from '../../assets/icons/cartWidget.svg'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import './cartWidget.css'

export const CartWidget = () => {
    const { productQuantity } = useContext(CartContext)
    return (
        <Link to='/cart'><img className='cart' src={cartWidget} alt='cart'></img><div className='product-quantity'><p>{productQuantity}</p></div></Link>
    )
}