import { createContext, useContext, useState } from "react";

export const CartContext = createContext(); 
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
        function addToCart(productId){
            const existing = cartItems.find(i => i.id === productId)
            if(existing){
                const currentQuantity = existing.quantity;
                const updatedQuantity = cartItems.map(i => i.id === productId ? {id:productId,quantity:currentQuantity+1} : i )
                setCartItems(updatedQuantity)
            }else{
                setCartItems([...cartItems,{id: productId , quantity: 1}])
            }
        }

        return(
            <CartContext.Provider value={{cartItems,addToCart}}>
                {children}
            </CartContext.Provider>
        )
    } 

    export function useCart(){
        const context = useContext(CartContext)
        return context;
    }