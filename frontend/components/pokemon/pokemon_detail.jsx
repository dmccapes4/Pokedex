import React from 'react';
import _ from 'lodash';
import Item from './item';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(props) {
    if(props.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(props.match.params.pokemonId);
    }
  }

  render() {
    // debugger;
    let pokemon = this.props.pokemon[this.props.match.params.pokemonId];
    if (!pokemon) return "loading";
    this.items = this.props.items;
    return (

      <section className="detail">
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image_url} width="200px" height="200px" />
        <ul>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          {(pokemon.moves) ? (<li>Moves: {pokemon.moves.toString()}</li>) : ""}
      </ul>
      <ul>
        {this.items.map(item => <Item key={item.id} item={item} pokemon={pokemon} />)}
      </ul>


      </section>
    );
  }
}

export default PokemonDetail;
