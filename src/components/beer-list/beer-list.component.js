import React from 'react';
import {Beer} from '../beer/beer.component';
import './beer-list.styles.css';

export const BeerList = (props) => (
  <div className='beer-list'>
      {props.beers.map( beer => (
        <Beer key={beer.id} beer={beer}/>
      ))} 
    </div>
)