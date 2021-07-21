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
            const newCart = cart.filter((product) => product.id !== itemId)
            console.log(itemId);
            setCart(newCart)
            console.log(cart);
       }

       const getOrder = (items) => {
         items = cart.map(({ item }) => ({
                id:item.id,
                title: item.title,
                price: item.price,
        }))
        return{
                buyer:{
                        name:'antonio',
                        phone:'11233423',
                        email:'migue@asd.com'
                }, 
                items,
                total,
        }
}


        return(
            <CartContext.Provider value={{cart, addItem, setTotal, total, setProductQuantity, productQuantity, removeItem, getOrder}}>
                {children}
            </CartContext.Provider>
        )
}
