 import './ItemCount.css'
 import { useState } from 'react';

 export const ItemCount = ({onAdd , initial=1, stock}) =>{

    const [count, setCount] = useState(initial)

    const handleCount = (operator) =>{
        if(operator === '+'){
            if(stock > count){
                setCount(count + 1)
            }
    }else if(operator === '-'){
        if(count > 1){
            setCount(count -1)
        }
    }
}
 
        return(

            <div className='item-count-wrap'> 
                <div className='item-count-number' stock={stock}>
                    <img id='quitProduct' onClick={() => handleCount('-')} alt='-' src='https://image.flaticon.com/icons/png/512/149/149157.png'></img>
                    <p>{count}</p>
                    <img id='addProduct' onClick={() => handleCount('+')} alt='+' src='https://image.flaticon.com/icons/png/512/748/748113.png'></img>
                </div>
                <div className='item-count-button' onClick={() => onAdd(count)} disabled={!stock}><p>Agregar al carrito</p></div>
                 
            </div>
           
        );

 }