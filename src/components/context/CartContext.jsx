import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
        const[product, setProduct] = useState([])
        const[quantity, setQuantity] = useState([])
           const addItem = (item, quantity) =>{
           
           setProduct([ ...product ,{item} ])           
       }             
                                                                                                                                                                                          


        return(
            <CartContext.Provider value={{product, addItem, quantity}}>
                {children}
            </CartContext.Provider>
        )
}
