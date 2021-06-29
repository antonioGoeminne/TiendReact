import './itemDetail.css'

export const ItemDetail = ({item}) => {
    return(
        <div className='item-detail-wrap' id={item.id}>
        <img src={item.pictureURL}></img>
        <div className='item-title-details'>
        <h1>{item.name}</h1>
        <h1>{item.author}</h1>
        <h2>${item.price}</h2>

       </div>
        </div>
    )
}
