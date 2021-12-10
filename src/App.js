import React, { Component} from 'react';
import { BeerList } from './components/beer-list/beer-list.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      beers: []
    }
  }

  componentDidMount(){
    fetch('https://api.punkapi.com/v2/beers?per_page=80')
    .then( response => response.json())
    .then( beers => this.setState({beers: beers}))
  }

  render(){
    return(
      <div className="App">
        <BeerList>
          {this.state.beers.map( beer => (
            <h1 key={beer.id}>{beer.name}</h1>
          ))} 
        </BeerList>
      </div>
    )
  }
}

export default App;
