import { useContext, useEffect , useState} from "react"
import { CartContext } from "../context/CartContext"
import { dataBase } from '../../Firebase/firebase'

export const Order = () => {

    const {getOrder, cart} = useContext(CartContext)    
    const[orderId, setOrderId] = useState([])

    useEffect(() =>
        {
            const db = dataBase
            const orders = db.collection('orders')

        const newOrder = getOrder(cart)
         orders.add(newOrder).then(({id}) =>{
            setOrderId(id)
         }).catch(err => {
             console.log(err);
         })
    },[])

    return(
        <h2>hola</h2>
    )
}
