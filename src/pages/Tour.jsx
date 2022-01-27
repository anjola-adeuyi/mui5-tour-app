import { Box, Container, Typography, BottomNavigation, Paper } from '@mui/material'
import React from 'react';
import ImageCollage from '../components/ImageCollage'
import TourAccordion from '../components/TourAccordion'
import BasicModal from '../components/TourModal'

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
    <Typography variant="paragraph" component="p" marginTop={3}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi numquam ad, eos, in quis incidunt eligendi laboriosam, quam fugit adipisci aperiam sed quo! Harum adipisci ipsa velit, ad iste id. Explicabo enim quisquam maiores molestias esse odit et debitis ipsa!
    </Typography>
    </Box>

    <Box marginBottom={10}>
      <Typography variant="h6" component="h4" marginTop={3}>
        Frequently asked questions
      </Typography>
      <TourAccordion />
    </Box>
  
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
      >
        <BasicModal />
      </BottomNavigation>
    </Paper>

  </Container>;
};

export default Tour;
