import './itemDetail.css'

export const ItemDetail = ({item}) => {
const {id, name, author, price, pictureURL} = item
    
    return(
        <div className='item-detail-wrap' id={id}>
        <img src={pictureURL}></img>
        <div className='item-title-details'>
        <h1>{name}</h1>
        <h1>{author}</h1>
        <h2>${price}</h2>

       </div>
        </div>  
    )
}
