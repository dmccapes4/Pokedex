import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.pokemons = this.props.pokemon;
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    // console.log(this.pokemons);
    return (
      <ul>
        {
          this.props.pokemon.map(pokemon =>
            <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />)
        }
      </ul>
    );
  }
}

export default PokemonIndex;
