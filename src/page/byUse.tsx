import Card from "../components/useHook/Card";
import Header from "../components/useHook/Header";
import { useCart } from "../hook/useCart.";

function ByUse() {
    const { data, cart, isEmptyCart, totalCart, addToCart, removeFromCart, decreaseQuantityCart, increaseQuantityCart, clearCart } = useCart();

    return ( 
        <>
            <Header 
                cart={cart} 
                isEmptyCart={isEmptyCart} 
                totalCart={totalCart} 
                removeFromCart={removeFromCart} 
                decreaseQuantityCart={decreaseQuantityCart} 
                increaseQuantityCart={increaseQuantityCart} 
                clearCart={clearCart}
            />

            <main className="container-xl mt-5">
                <h2 className="text-center">Carrito de compras por Hook</h2>
                <div className="row mt-5">
                    {
                    data.map(product => <Card key={product.id} product={product} addToCart={addToCart} />)
                    }
                </div>
            </main>

            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">Shopping Cart - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    );
}

export default ByUse;