import "./cart.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalAmount } = useContext(CartContext)

  if(totalQuantity === 0) {
    return (
      <div className="cartEmpty">
        <h1>No hay libros en el carrito</h1>
        <Link to="/"><button className='btnBackEmpty'>Volver</button></Link>
      </div>
    )
  } else {
  return (
    <div className="cartContainer">
      <div>
        {cart.map(p => <CartItem key={p.id} {...p}/>) }
        <h3>Total: ${totalAmount}</h3>
        <hr />
      </div>
      <div>
        <button onClick={() => clearCart()} className="btnClean">Limpiar carrito</button>
        <Link to="/checkout"><button className="btnEnd">Finalizar Compra</button></Link>
      </div>
      <div>
        <Link to="/"><button className='btnBack'>Volver</button></Link>
      </div>
    </div>
  )
  }
}

export default Cart
