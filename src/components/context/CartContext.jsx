import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
        const[product, setProduct] = useState(4)
        const[quantity, setQuantity] = useState([])
        
       const addItem = (product, quantity) =>{
           if(product !== product){
           setProduct(product)
           }
           setQuantity(quantity)
           
       }             
                                                                                                                                                                                          


        return(
            <CartContext.Provider value={{product, addItem, quantity}}>
                {children}
            </CartContext.Provider>
        )
}
