import { ItemDetail } from '../itemDetail/ItemDetail'

export const ItemListDetail = ({ items }) =>{

    return(
            <div >
                {items.map((item) => {
                    return <ItemDetail key={item.id} item={item}></ItemDetail>
                }
                )}
            </div>
            )
}