import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
        const[product, setProduct] = useState(4)

        return(
            <CartContext.Provider value={product}>
                {children}
            </CartContext.Provider>
        )
}
