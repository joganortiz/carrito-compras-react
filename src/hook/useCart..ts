import { useEffect, useMemo, useState } from "react"
import { db } from "../data/db"
import { CartItem, Product } from "../interfaces"

export const useCart = () => {
    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }
    
    const MIN_ITEMS = 1
    const MAX_ITEMS = 5

    const [data] = useState(db);
    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(item : Product) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if(itemExists >= 0 ) { // existe en el carrito
            if(cart[itemExists].quantity >= MAX_ITEMS) return
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
        } else {
            const newItem : CartItem = {...item, quantity : 1}
            setCart([...cart, newItem])
        }
    }

    function removeFromCart(id : Product['id']) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    }

    function decreaseQuantityCart(id : Product['id']) {
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function increaseQuantityCart(id : Product['id']) {
        let isUpdate = false;
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity < MAX_ITEMS) {
                isUpdate = true;
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })

        if(!isUpdate) return;

        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    // State Derivado
    const isEmptyCart = useMemo( () => cart.length === 0, [cart]);
    const totalCart = useMemo( () => cart.reduce( (total, item ) => total + (item.quantity * item.price), 0), [cart] )
    
    return {
        data,
        cart,
        isEmptyCart,
        totalCart,
        addToCart,
        removeFromCart,
        decreaseQuantityCart,
        increaseQuantityCart,
        clearCart
    }
}