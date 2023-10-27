import './cartItem.css'

const CartItem = ({titulo, img, precio, quantity}) => {
  return (
    <div className="cartItems">
      <div className='cartItemsImg'>
        <img src={img} alt={titulo} />
      </div>
      <div>
        <h3 className='itemTittle'>{titulo}</h3>
        <div>
          <p>Precio x unidad: ${precio}</p>
          <p>Cantidad: {quantity}</p>
          <p>Total: ${(quantity * precio)}</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem