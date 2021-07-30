import './Item.css'
import { Link } from 'react-router-dom';


export const Item = ({ item }) => {
    const { id, name, author, price, pictureURL } = item

    return (
        <Link to={`/item/${id}`}>
            <div id={id} className='item-wrap'>
                <div className='img-wrap'>
                    <img src={pictureURL}></img>
                </div>
                <div className='item-info'>
                    <h2>{name}</h2>
                    <h3>{author}</h3>
                    <p>${price}</p>
                </div>
                <div className='show-menu'><div>Ver detalle</div></div>
            </div>
        </Link>
    );
}