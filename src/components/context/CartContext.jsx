import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
        const[cart, setCart] = useState([])

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



        return(
            <CartContext.Provider value={{cart, addItem}}>
                {children}
            </CartContext.Provider>
        )
}
