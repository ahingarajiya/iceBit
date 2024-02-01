import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({obj}) {
  // console.log(obj)
  return (
    <Card sx={{ maxWidth: 345 ,  p: 1,
      m: 1,   borderRadius: 1,}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={obj.picture.large}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {obj.name.first}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {obj.name.last}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}