import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import "./item.css";
import ItemCount from '../ItemCount/itemCount';
import { Link } from "react-router-dom";
import ItemDetailsContainer from '../ItemDetailsContainer/ItemDetailsContainer';


const item = ({ id,  titulo, autor, img, precio, stock }) => {

    return (
      <Card sx={{ maxWidth: 345 }} className="CardP">
        <CardActionArea>
        <Link to={`/detail/${id}`} element={<ItemDetailsContainer />} className='textLink'>
          <CardMedia component="img" image={img} sx={{maxWidth: 250}}/>
          <CardContent>
            <Typography gutterBottom sx={{fontWeight: 'bold'}} component="div">{titulo}</Typography>
            <Typography variant="body2" sx={{fontStyle: 'italic'}}>{autor}</Typography>
            <Typography variant="body2">${precio}</Typography>
            <Typography variant="body2">Stock disponible: {stock}</Typography>
          </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <ItemCount initial={1} stock={15} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
        </CardActions>
      </Card>
    );
  }
  
  export default item;