
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CakeCard =({cake}) => {
    return (
        <div>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={cake?.imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cake?.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Price:  {cake?.price} Taka
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/cake-detail/${cake?._id}`}>  <Button className='btn text-pink-400' >View Details</Button></Link>
        
      </CardActions>
    </Card>
        </div>
    );
};

CakeCard.propTypes = {
    cake:PropTypes.object,

};

export default CakeCard;