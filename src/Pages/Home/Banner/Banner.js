import React from 'react';
import Grid from '@mui/material/Grid';
import banner from '../../../images/banner.jpg';
import { Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';



const bannercontainer = {
    display: 'flex',
    alignItems: 'center',
    height: 400,

}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...bannercontainer, textAlign: 'left' }} xs={12} sm={12} md={6}>
                    <Box>
                        <Typography variant="h3" sx={{ color: 'white' }}>
                            Wear your sunglass <br />
                            be confident
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 18, fontWeight: 300, color: 'white' }}>
                            Sunglass are like eyeshadow.They make everything look younger and preety.
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 15, fontWeight: 300, color: 'white' }}>
                            -- Karl Logerfeld --
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={bannercontainer} >
                    <img style={{
                        width: '500px', border: '1px solid white',
                        borderRadius: '10% 20%'
                    }} src={banner} alt="" />
                </Grid>

            </Grid>
        </Container >
    );
};

export default Banner;