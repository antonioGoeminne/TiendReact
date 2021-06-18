import './CartWidget.css'

export const CartWidget = ({image, stock}) =>{
    return(
        <span><img className='cart-widget' src={image} alt='cartWidget'></img></span>
        
        
    );

}