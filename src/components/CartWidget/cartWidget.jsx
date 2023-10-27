import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <div>
      <Link to="/cart">
        <ShoppingCartIcon />
        <sup>{ totalQuantity !== 0 && totalQuantity }</sup>
      </Link>
    </div>
  )
}

export default CartWidget;