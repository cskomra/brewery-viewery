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

    <h2 style={{display: lactoseDisplay(props.beer), backgroundColor: '#e3b905'}}>Contains Lactose</h2>

    <img src={props.beer.image_url} alt='{props.beer.name}'></img>
    <p> ABV: {props.beer.abv} </p>
    <p> IBU: {props.beer.ibu} </p>
  </Box>
)}