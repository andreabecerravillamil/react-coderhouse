import { useState } from "react" 
import orderId from "../Checkout/Checkout"
import OrderDetailsMsg from "../OrderDetailsMsg/OrderDetailsMsg"
import "./checkoutForm.css"

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleConfirm = (event) => {
    event.preventDefault()

    const userData = {
      name, phone, email
    }

    onConfirm(userData)
  }

  return (
    <div>
      <form onSubmit={handleConfirm} className="Form">
        <label className="label">
          <input 
            className="input"
            placeholder="Nombre"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </label>
        <label className="label">
          <input 
            className="input"
            placeholder="Teléfono"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            required
          />
        </label>
        <label className="label">
          <input 
            className="input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </label>
        <div className="orderForm">
          <button type="submit" className="btnCreateOrder">Crear Orden</button>
        </div>
      </form>
      {orderId.length > 0 && <OrderDetailsMsg orderId={orderId} />}
    </div>
  )
}

export default CheckoutForm
