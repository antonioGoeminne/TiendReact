import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
        const[product, setProduct] = useState(4)
        const[quantity, setQuantity] = useState([{}])
        
       const addProduct = (product, quantity) =>{
           setProduct(product)
           setQuantity(quantity)
           console.log(product);
           console.log(quantity);
       }                                                                                                                                                                                                              


        return(
            <CartContext.Provider value={{product, addProduct, quantity}}>
                {children}
            </CartContext.Provider>
        )
}
