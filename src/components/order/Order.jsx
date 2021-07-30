import './Order.css'
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { OrderComplete } from './orderComplete/OrderComplete'
import { dataBase } from '../../Firebase/firebase'

export const Order = () => {

    const { getOrder, cart } = useContext(CartContext)
    const [orderId, setOrderId] = useState([])
    const [clicked, setClicked] = useState(false)
    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: ''
    })

    const onInput = ({ target }) => {
        const nextUser = { ...user, [target.name]: target.value }
        if (nextUser != ' ') {
            setUser(nextUser)
        } else alert(' no se puede asi')

    }

    const confirmOrder = (e) => {
        e.preventDefault()
        const db = dataBase
        const orders = db.collection('orders')
        if (user.name != '' && user.surname != '' && user.email != '') {

            const newOrder = getOrder(cart, user)
            orders.add(newOrder).then(({ id }) => {
                setOrderId(id)
            }).catch(err => {
                console.log(err);
            })
            setClicked(true)
        }

    }


    return (
        <div className='form-wrap'>
            {clicked != true ?

                <form className='buy-form'>
                    <label>nombre</label>
                    <input className='form-name' name='name' onChange={onInput} value={user.name} />
                    <label>apellido</label>

                    <input className='form-surname' name='surname' onChange={onInput} value={user.surname} />
                    <label>email</label>

                    <input className='form-email' type='email' name='email' onChange={onInput} value={user.email} />
                    <button type='submit' className='form-btn__confirm' onClick={confirmOrder}>Confirmar Pedido</button>
                </form>
                :
                <OrderComplete id={orderId} user={user.name}></OrderComplete>
            }
        </div>
    )
}
