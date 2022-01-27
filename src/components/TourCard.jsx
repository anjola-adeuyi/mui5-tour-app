import React from 'react';
import { Box, createTheme, Grid, Paper, Rating, ThemeProvider, Typography } from '@mui/material'
import { AccessTime } from '@mui/icons-material'

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ]
    }
  }
})

const TourCard = ({ tour }) => {
  const [value, setValue] = React.useState(tour && tour.rating);

  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
      <Paper elevation={0} variant='outlined'>
        <img src={tour.image} alt={tour.name} className='img' />
        <Box paddingX={1}>
          <Typography component='h4' varient='h3'>
            {tour.name}
          </Typography>
          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <AccessTime sx={{ width: '12.5px' }}/>
            <Typography variant='body2' component='p' marginLeft={0.5}>
              {tour.duration} hours
            </Typography>
          </Box>
          <Box 
            sx={{
              marginTop: 3,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Rating
              name="simple-controlled"
              value={value}
              precision={0.25}
              size='small'
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography component="legend" marginLeft={0.5}>{value}</Typography>
            <Typography component="p" variant='body3' marginLeft={1.5}>({tour.numberOfReviews} reviews)</Typography>
          </Box>
          <Box>
          <Typography component="h3" variant='h6' marginTop={0}> From C ${tour.price} </Typography>
          </Box>
        </Box>
      </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
