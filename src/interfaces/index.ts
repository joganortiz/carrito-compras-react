export type Product = {
    id: number
    name: string
    image: string
    description: string
    price: number
    stock: number
}


export type CartItem = Product & {
    quantity: number
}