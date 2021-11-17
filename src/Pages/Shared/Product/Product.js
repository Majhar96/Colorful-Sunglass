import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const Product = (props) => {

    const { description, name, img, price } = props.product;

    // const history = useHistory();
    // const card = {
    //     border: '1px solid rgb(142, 150, 156)',
    //     borderRadius: '25px',
    //     boxShadow: '10px 10px 10px rgb(102, 114, 124)',
    // }


    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 1, borderColor: 'grey.500', borderRadius: 8, boxShadow: 3, bgcolor: 'text.secondary', color: 'white' }}>
                <CardMedia
                    component="img"
                    style={{ width: '355px', height: '200px', margin: '0 auto', borderRadius: '30px', marginTop: '5px' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" color="white" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h3" color="green" component="div">
                        {price}
                    </Typography>
                    <Typography variant="body2" color="white">
                        {description}
                    </Typography>
                    <br />
                    <Link to={`/purchase/${name}`}>
                        <Button variant="contained" color="success" >Purchase </Button>
                    </Link>
                </CardContent>
            </Card >
        </Grid >
    );
};

export default Product;