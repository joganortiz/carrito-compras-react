import Card from "./components/Card"
import Header from "./components/Header"
import { useCart } from "./hook/useCart."

function App() {
  const { data, cart, isEmptyCart, totalCart } = useCart()

  return (
    <>
      <Header cart={cart} isEmptyCart={isEmptyCart} totalCart={totalCart}/>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestros Productos</h2>
          <div className="row mt-5">
            {
              data.map(product => <Card key={product.id} product={product} />)
            }
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">Shopping Cart - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
