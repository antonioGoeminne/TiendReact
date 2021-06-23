import './Item.css'

export const Item = ({ item }) =>{

    return(
    <div id={item.id} className='item-wrap'>
        <img src={item.pictureURL}></img>
        <h2>{item.name}</h2>
        <h3>{item.author}</h3>
        <p>${item.price}</p>
    </div>
    );
}