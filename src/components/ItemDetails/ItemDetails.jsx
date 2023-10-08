import './ItemDetails.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'

const ItemDetails = ({id,  titulo, autor, img, sinopsis}) => {
    return (
        <Card sx={{ maxWidth: 1000 }}>
        <CardActionArea className='cardContainer'>
          <CardMedia component="img" image={img} sx={{maxWidth: 250}}/>
          <div className='cardText'>
          <CardContent>
            <Typography gutterBottom sx={{fontWeight: 'bold'}} component="div">{titulo}</Typography>
            <Typography variant="body2" sx={{fontStyle: 'italic'}}>{autor}</Typography>
            <Typography variant="body2" sx={{fontStyle: 'italic'}}>{sinopsis}</Typography>
          </CardContent>
          <CardActions className='btnBack'>
            <p>
                <Link to="/" className='textBack'>Volver a Catálogo</Link>
            </p>
          </CardActions>
          </div>
          
        </CardActionArea>
      </Card>
    )
}

export default ItemDetails