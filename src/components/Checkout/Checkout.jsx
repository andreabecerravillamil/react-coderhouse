import { useContext, useState } from "react"
import { db } from "../../firebase/firebaseConfig"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, writeBatch } from "firebase/firestore"
import Spinner from "../Spinner/Spinner"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import OrderDetailsMsg from "../OrderDetailsMsg/OrderDetailsMsg"
import "./checkout.css"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, totalAmount, clearCart } = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                cliente: {
                    name, phone, email
                },
                items: cart,
                total: totalAmount,
                date: Timestamp.fromDate(new Date())
            }
            
            const batch = writeBatch(db)
            await batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)
            clearCart()
            
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <div>{loading && <Spinner />}</div>
    }

    if(orderId) {
        return <div>{orderId && <OrderDetailsMsg orderId={orderId} />}</div>
    }
  return (
    <div className="orderData">
      <h1>Datos de compra</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  )
}

export default Checkout
