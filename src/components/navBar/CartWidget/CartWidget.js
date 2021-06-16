import './CartWidget.css'

export const CartWidget = ({image, stock, onClick, children}) =>{
    return(
        <span className='cart-widget'><img src={image} alt='cartWidget'></img>
        <h2>hola mundo</h2>
        </span>
        
    );

}