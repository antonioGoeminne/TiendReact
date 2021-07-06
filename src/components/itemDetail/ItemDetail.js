import './itemDetail.css'
import { useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({item}) => {
const {author, id, name, pictureURL, price} = item
const[state, setState] = useState('Deseas confirmar')
    console.log(state);
    return(
        <div className='item-detail-wrap' id={id}>
        <img src={pictureURL} alt='picture'></img>
        <div className='item-title-details'>
        <h1>{name}</h1>
        <h1>{author}</h1>
        <h2>${price}</h2>
        <p>{state}</p>
       </div>
       <ItemCount stock={20} onAdd={handleAdd}/>
        </div>  
    )
}
