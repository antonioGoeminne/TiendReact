 import './ItemCount.css'
 import { Fragment, useState } from 'react';
 import { Link } from 'react-router-dom';

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
                <Fragment>
            <div id='itemDetailBuying' className='item-count-wrap'> 
                <div className='item-count-number' stock={stock}>
                    <img id='quitProduct' onClick={() => handleCount('-')} alt='-' src='https://image.flaticon.com/icons/png/512/149/149157.png'></img>
                    <p>{count}</p>
                    <img id='addProduct' onClick={() => handleCount('+')} alt='+' src='https://image.flaticon.com/icons/png/512/748/748113.png'></img>
                </div>
                <button type='submit' className='item-count-button' onClick={onAdd} disabled={!stock} value={count}>Agregar al carrito</button>
                </div>
                <Link to='/cart'>
                 <div type='submit' id='itemDetailBuyed' className='item-buyed'>{`Deseas confirmar la compra de ${count} productos?`}</div>
                 </Link>
                 </Fragment>
        );

 }