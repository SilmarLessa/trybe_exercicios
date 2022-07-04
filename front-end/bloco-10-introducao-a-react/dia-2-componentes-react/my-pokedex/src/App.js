import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import React from 'react';

class App extends React.Component{
  render() {
  return <Pokedex pokemons={pokemons}/>
};
}
export default App;
