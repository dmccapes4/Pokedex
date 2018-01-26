import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemonItems = this.props.pokemon.map(pokemon =>
      <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />);
    // console.log(this.pokemons);
    return (
      <div className="pokedex">
        <ul className="poke-list">
          {pokemonItems}
        </ul>
        <div className="pokedetails">
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        </div>
      </div>
    );
  }
}

export default PokemonIndex;
