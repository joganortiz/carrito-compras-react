import { useEffect, useReducer } from "react";
import Header from "../components/reducer/Header";
import { cartReducer, initialState } from "../reducers/cart-reducer";
import Card from "../components/reducer/Card";

function ByReducer() {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    useEffect(() => {
        localStorage.setItem('cartReducer', JSON.stringify(state.cart))
    }, [state.cart])

    return (
        <>
            <Header cart={state.cart} dispatch={dispatch}/>

            <main className="container-xl mt-5">
                <h2 className="text-center">Carrito de compras por Reducer</h2>

                <div className="row mt-5">
                    {state.data.map((product) => (
                        <Card 
                            key={product.id}
                            product={product}
                            dispatch={dispatch}
                        />
                    ))}
                </div>
            </main>
            
        </>
    );
}

export default ByReducer;