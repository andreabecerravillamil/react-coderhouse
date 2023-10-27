import { createContext, useState } from "react"

export const CartContext = createContext({
  cart: []
})

export const CartProvider =({ children }) => {
  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  const addItem = (item, quantity) => {
    if(!isInCart(item.id)) {
      setCart(prev => [...prev, {...item, quantity}])
      setTotalQuantity(totalQuantity + quantity)
      setTotalAmount(totalAmount + item.precio * quantity)
    } 
  }

  const removeItem = (itemId) => {
    const cartUpdated =cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
  }

  const clearCart = () => {
    setCart([])
    setTotalQuantity(0)
    setTotalAmount(0)

  }

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
  }


  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, isInCart, totalAmount }}>
      { children}
    </CartContext.Provider>
  )
}
