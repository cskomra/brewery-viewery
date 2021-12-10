import React from 'react';
import './beer.styles.css';
import Box from '@mui/material/Box';


export const Beer = (props) => {
  
  var lactoseDisplay = function(jsonData) {
    let beerString = JSON.stringify(jsonData);
    if(beerString.includes('lactose')){
      return 'block';
    }
    return 'none';
  }

  return(
  <Box component="span" className='beer-container'>
    <p>id: {props.beer.id}</p>
    <h1> {props.beer.name} </h1>
    <p> {props.beer.tagline} </p>
    <p> {props.beer.description} </p>

    <div className='warning' style={{display: lactoseDisplay(props.beer)}}>
      This product contains <strong>lactose</strong>.
    </div>

    <img src={props.beer.image_url} alt='{props.beer.name}'></img>
    <p> ABV: {props.beer.abv} </p>
    <p> IBU: {props.beer.ibu} </p>
  </Box>
)}