import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./cardProduct.css";

const cardProduct = ({ img, titulo, autor }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="CardP">
      <CardActionArea>
        <CardMedia component="img" image={img} sx={{maxWidth: 250}}/>
        <CardContent>
          <Typography gutterBottom sx={{fontWeight: 'bold'}} component="div">{titulo}</Typography>
          <Typography variant="body2" sx={{fontStyle: 'italic'}}>{autor}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Comprar</Button>
      </CardActions>
    </Card>
  );
}

export default cardProduct;



/*

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardUser = ({ img, name, description, date }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUser;

*/