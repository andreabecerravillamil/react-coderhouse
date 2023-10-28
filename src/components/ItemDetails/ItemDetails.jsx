import './itemDetails.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/itemCount';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetails = ({id, titulo, autor, img, sinopsis, precio, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const [alreadyInCart, setAlreadyInCart] = useState(false)

    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (cantidad) =>{
      setQuantityAdded(cantidad)

      const item = {
        id, titulo, img, precio 
      }

      addItem(item, cantidad)
    }

    const existInCart = (id) => {
      setAlreadyInCart(isInCart(id))
    }

    useEffect(() => {
      existInCart(id)
    }, [id]);

    return (
        <Card sx={{ maxWidth: 1000 }}>
        <CardContent className='cardContainer'>
          <div className='cardDetail'>
            <CardMedia component="img" image={img} sx={{maxWidth: 250}}/>
            <div className='cardText'>
              <CardContent>
                <Typography gutterBottom variant='h5' sx={{fontWeight: 'bold'}} component="div">{titulo}</Typography>
                <Typography gutterBottom variant="body2" sx={{fontStyle: 'italic'}}>{autor}</Typography>
                <Typography gutterBottom variant="body2" sx={{fontStyle: 'italic'}}>{sinopsis}</Typography>
                <Typography  variant='h6' sx={{fontWeight: 'bold'}} className='price'>Precio</Typography>
                <Typography variant="body1">$ {precio}</Typography>
              </CardContent>
            </div>
          </div>
          <div className='btnActions'>
            <div className='btnCount'>
              {
                quantityAdded > 0 || alreadyInCart ? (
                  <Link to="/cart"><button className='toCart'>Ir al carrito</button></Link>
                ) : (
                  <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )
              }
            </div>
            <div>
              <Link to="/"><button className='btnBack'>Volver</button></Link>
            </div>
          </div>
        </CardContent>
      </Card>
    )
}

export default ItemDetails