import React from 'react';
import './beer-list.styles.css'

export const BeerList = (props) => (
  <div className='beer-list'>
      {props.beers.map( beer => (
        <h1 key={beer.id}>{beer.name}</h1>
      ))} 
    </div>
)