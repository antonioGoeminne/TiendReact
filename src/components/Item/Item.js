import './Item.css'

export const Item = ({ item }) =>{

    return(
    <div id={item.id} className='item-wrap'>
        <div className='img-wrap'>
        <img src={item.pictureURL}></img>
        </div>  
        <div className='item-info'>
        <h2>{item.name}</h2>
        <h3>{item.author}</h3>
        <p>${item.price}</p>
        </div>
        <div className='show-menu'><div>agregar al carro</div><div>Ver detalle</div></div>
    </div>
    );
}