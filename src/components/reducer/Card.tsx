import { Dispatch } from "react";
import { Product } from "../../interfaces";
import { CartActions } from "../../reducers/cart-reducer";

interface CardProps {
    product : Product, 
    dispatch: Dispatch<CartActions>
}

function Card({product, dispatch} : CardProps) {
    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${product.image}`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{ product.name }</h3>
                <span className="fw-black text-primary">{ product.stock } in stock</span>
                <p>{ product.description }</p>
                <p className="fw-black text-primary fs-3">${ product.price }</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => dispatch({type: 'add-to-cart', payload: {item: product}})}
                >Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default Card;