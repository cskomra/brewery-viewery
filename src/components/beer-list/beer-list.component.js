import React from 'react';
import './beer-list.styles.css'

export const BeerList = (props) => {
  return(
    <div className='beer-list'>{props.children}</div>
  )
}