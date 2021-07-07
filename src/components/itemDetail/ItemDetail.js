import './itemDetail.css'
import { useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({item}) => {
const {author, id, name, pictureURL, price} = item
const[cantidad, setCantidad] = useState(1)

const onAdd = (e) => {
    // almacenar el valor de itemCount en un estado interno de itemDetail para desaparecer itemCount
    setCantidad(e.target.value)
    document.getElementById("itemDetailBuying").style.opacity="0"
    document.getElementById("itemDetailBuyed").style.opacity="1"
}

    return(
        <div className='item-detail-wrap' id={id}>
        <img src={pictureURL} alt='picture'></img>
        <div className='item-title-details'>
        <h1>{name}</h1>
        <h1>{author}</h1>
        <h2>${price}</h2>
       </div>
       <ItemCount stock={20} onAdd={onAdd}/>
        </div>  
    )
}
