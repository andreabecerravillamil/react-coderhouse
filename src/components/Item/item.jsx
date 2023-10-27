import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./item.css";
import { Link } from "react-router-dom";
import ItemDetailsContainer from '../ItemDetailsContainer/ItemDetailsContainer';

const item = ({ itemId, titulo, autor, img, precio, stock }) => {

    return (
      <Card sx={{ maxWidth: 345 }} className="CardP">
        <CardActionArea>
        <Link to={`/detail/${itemId}`} element={<ItemDetailsContainer />} className='textLink'>
          <CardMedia component="img" image={img} sx={{maxWidth: 250}}/>
          <CardContent>
            <Typography gutterBottom sx={{fontWeight: 'bold'}} component="div">{titulo}</Typography>
            <Typography variant="body2" sx={{fontStyle: 'italic'}}>{autor}</Typography>
            <Typography variant="body2">${precio}</Typography>
          </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    );
  }
  
  export default item;