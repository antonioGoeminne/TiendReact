import { useContext, useEffect , useState} from "react"
import { CartContext } from "../context/CartContext"
import { dataBase } from '../../Firebase/firebase'

export const OrderContainer = () => {

    const {getOrder, cart} = useContext(CartContext)    
    const[orderId, setOrderId] = useState([])
    const[user, setUser] = useState({
        name: '',
        surname: '',
        email: ''
    })

    const onInput = ({ target }) =>{
        const nextUser = {...user, [target.name]: target.value}

        setUser(nextUser)   

    }

 const confirmOrder = (e) =>{     
            e.preventDefault()
            const db = dataBase
            const orders = db.collection('orders')
            
            const newOrder = getOrder(cart, user)
            console.log(user, cart);
            orders.add(newOrder).then(({id}) =>{
                setOrderId(id)
            }).catch(err => {
                console.log(err);
            })
}
 
        
    return(
        <div className='form-wrap'>
        <form className='buy-form'>
            <label>nombre</label>
            <input className='form-name' name ='name' onChange={onInput} value={user.name}/>
            <label>apellido</label>

            <input className='form-surname' name ='surname' onChange={onInput} value={user.surname} />
            <label>email</label>

            <input className='form-email'  name ='email' onChange={onInput} value={user.email}/>
            <button type='submit' className='form-btn__confirm' onClick={confirmOrder}>Confirmar Pedido</button>
            </form>
            </div>
    )
}
