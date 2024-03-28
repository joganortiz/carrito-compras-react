import { useMemo, useState } from "react"
import { db } from "../data/db"
import { CartItem } from "../interfaces"

export const useCart = () => {
    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data] = useState(db);
    const [cart, ] = useState(initialCart);

    // State Derivado
    const isEmptyCart = useMemo( () => cart.length === 0, [cart]);
    const totalCart = useMemo( () => cart.reduce( (total, item ) => total + (item.quantity * item.price), 0), [cart] )
    



    return {
        data,
        cart,
        isEmptyCart,
        totalCart
    }
}