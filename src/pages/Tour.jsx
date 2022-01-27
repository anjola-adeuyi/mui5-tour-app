import { Box, Container, Typography } from '@mui/material'
import React from 'react';
import ImageCollage from '../components/ImageCollage'

const Tour = () => {
  return <Container sx={{ width: 900 }} >
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore the world in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: 'flex' }}>
      <img src="https://i0.wp.com/classnotes.ng/wp-content/uploads/2020/04/Tourism-geography-classnotesng.jpg?resize=556%2C424&amp;ssl=1" alt="" height={325} />
      <ImageCollage />
    </Box>
    <Box>
    <Typography variant="h6" component="h4" marginTop={3}>
      About this ticket
    </Typography>
    </Box>
  </Container>;
};

export default Tour;
