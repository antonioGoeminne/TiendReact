import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
        const[cart, setCart] = useState([])
        const[total, setTotal] = useState(0)
        const[productQuantity, setProductQuantity] = useState(0)

    
        const isInCart = id =>{
            return cart.some((obj) => obj.item.id === id)
        }

           const addItem = (item, quantity) =>{

            if(cart.length > 0){
                if(isInCart(item.id)){
                    let pos = cart.findIndex(obj => obj.item.id === item.id)
                    let newCart = cart
                    newCart[pos].quantity += quantity
                    setCart(newCart)

                }else{
                    setCart([...cart, {item, quantity}])
                }
            }else setCart([{item, quantity}])    
       }             

       const removeItem = (itemId) =>{
            setCart(cart.filter((product) => product.item.id !== itemId))
       }

       const getOrder = (items, user) => {
           console.log(user);
         items = cart.map(({ item }) => ({
                id:item.id,
                title: item.title,
                price: item.price,
        }))
        user =
            {
                name:user.name,
                surname:user.surname,
                email:user.email
        }
        return{
                user,
                items,
                total
        }
}
        const restartCart = () =>{
            cart.splice(0,cart.length)
            console.log(cart);
        }

        return(
            <CartContext.Provider value={{cart, addItem, setTotal, total, setProductQuantity, productQuantity, removeItem, getOrder, restartCart}}>
                {children}
            </CartContext.Provider>
        )
}
