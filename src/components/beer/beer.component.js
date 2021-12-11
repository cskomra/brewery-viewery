import React from 'react';
import './beer.styles.css';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material';


export const Beer = (props) => {

  const beerString = JSON.stringify(props.beer);  
  const dryHopSuccessAlert = beerString.includes('dry hop') ? <Alert severity='success'><strong>Dry Hopped</strong>.</Alert> : null;
  const lactoseWarningAlert = beerString.includes('lactose') ? <Alert severity='warning'><strong>Contains Lactose</strong>.</Alert> : null;
  
  return(
    <Box component="span" className='beer-container'>
      <h1> {props.beer.name} </h1>

      {lactoseWarningAlert}
      {dryHopSuccessAlert}

      <p> {props.beer.tagline} </p>
      <p> {props.beer.description} </p>

      <img src={props.beer.image_url} alt='{props.beer.name}'></img>
      <p> ABV: {props.beer.abv} </p>
      <p> IBU: {props.beer.ibu} </p>
    </Box>
  )
}

