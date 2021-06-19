 import './ItemCount.css'

 export const ItemCount = ({add, initial, quit, stock}) =>{
        return(

            <div className='item-count-wrap'>
                <div className='item-count-number' stock={stock}>
                    <img id='quitProduct' onClick={quit} alt='-' src='https://image.flaticon.com/icons/png/512/149/149157.png'></img>
                    <p>{initial}</p>
                    <img id='addProduct' onClick={add} alt='+' src='https://image.flaticon.com/icons/png/512/748/748113.png'></img>
                </div>
                <div className='item-count-button'><p>Agregar al carrito</p></div>
                 
            </div>
           
        );

 }