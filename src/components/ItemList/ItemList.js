import './ItemList.css'
import { Item } from '../Item/Item';

export const ItemList = ({ items }) =>{

    return(
            <div className='item-list'>
                {items.map((item) => {
                    return <Item key={item.id} item={item}></Item>
                }
                )}
            </div>
            )
}
