import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import './App.css';
import TourAppBar from './components/TourAppBar'
import TourCard from './components/TourCard'
import cities from './data.json'

function App() {
  return (
    <div>
      <TourAppBar title='Mui5 Tour App' />
      
      <Container sx={{marginY: 5}}>
        {cities.map((city) => ( <React.Fragment key={city.id}>
          <Typography
            variant='h4'
            component='h2'
            marginTop={5}
            marginBottom={3}
            key={city.id}
          >
            Top {city.name} Tours
          </Typography>

          <Grid container spacing={5}>
            {city.tours.map((tour) => (
                <TourCard tour={tour} key={tour.id} />
            ))}
            
          </Grid>
        </React.Fragment>
        )
        )}
      </Container>
      
    </div>
  );
}

export default App;
