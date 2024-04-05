import { db } from "../data/db";
import { CartItem, Product } from "../interfaces";

export type CartActions = 
    { type: 'add-to-cart', payload: {item: Product} } |
    { type: 'remove-from-cart', payload: {id : Product['id']} } |
    { type: 'decrease-quantity-cart',  payload: {id : Product['id']} } |
    { type: 'increase-quantity-cart',  payload: {id : Product['id']} } |
    { type: 'clear-cart' }

export type CartState = {
    data: Product[]
    cart: CartItem[]
}

const initialCart = () : CartItem[] => {
    const localStorageCart = localStorage.getItem('cartReducer')
    return localStorageCart ? JSON.parse(localStorageCart) : []
}

export const initialState : CartState = {
    data: db,
    cart: initialCart()
}

const MIN_ITEMS = 1
const MAX_ITEMS = 5

export const cartReducer = (state: CartState = initialState, action: CartActions ) => {

    switch (action.type) {
        case 'add-to-cart':
            const existPoduct = state.cart.find(product => product.id == action.payload.item.id);
            let updatedCart : CartItem[] = [];
            
            if (existPoduct) { // item exists in the cart
                updatedCart = state.cart.map(item => {
                    if(item.id === action.payload.item.id) {
                        if(item.quantity < MAX_ITEMS) {
                            return { ...item, quantity: item.quantity + 1 }
                        } else {
                            return item
                        }
                    } else {
                        return item
                    }
               })
            } else {
                const newItem : CartItem = {...action.payload.item, quantity : 1}
                updatedCart = [...state.cart, newItem]
            }
    
            return {
                ...state,
                cart: updatedCart
            }
        break;

        case 'remove-from-cart':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        break;

        case 'clear-cart':
            return {
                ...state,
                cart: []
            }
        break;

        case 'decrease-quantity-cart':
            return {
                ...state,
                cart: state.cart.map( item => {
                    if(item.id === action.payload.id && item.quantity > MIN_ITEMS) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item
                })
            }
        break;

        case 'increase-quantity-cart':

            return {
                ...state,
                cart: state.cart.map( item => {
                    if(item.id === action.payload.id && item.quantity < MAX_ITEMS) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                })
            }
        break;

        default:
            return {
                ...state
            }
        break;
    }
}