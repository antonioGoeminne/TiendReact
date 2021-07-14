import './itemDetail.css'
import { useState, useContext } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export const ItemDetail = ({item}) => {
const {author, id, name, pictureURL, price} = item
const[cantidad, setCantidad] = useState(1)
const[clicked, setClicked] = useState(false)

const{addItem} = useContext(CartContext)


const onAdd = (cantidad) => {
    // almacenar el valor de itemCount en un estado interno de itemDetail para desaparecer itemCount
    setCantidad(cantidad)
    setClicked(true)

}

    return(
        <div className='item-detail-wrap' id={id}>
        <img src={pictureURL} alt='picture'></img>
        <div className='item-title-details'>
        <h1>{name}</h1> 
        <h1>{author}</h1>
        <h2>${price}</h2>
       </div>
            {clicked == false ? <ItemCount stock={20}  onAdd={onAdd}/> : <Link to='/cart'><div className='item-buyed' onClick={() => addItem(item, cantidad)}>deseas confirmar la compra?</div></Link>}
        </div>  
    )   
}
