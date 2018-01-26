import React from 'react';

class ItemDetail extends React.Component {

  componentDidMount() {
    // this.props.requestSinglePokemonItem(this.props.match.params.pokemonId, this.props.match.params.itemId);
  }

  componentWillReceiveProps(props) {
    // if(props.match.params.pokemonId !== this.props.match.params.pokemonId) {
    //   this.props.requestSinglePokemon(props.match.params.pokemonId);
    // }
  }


  render() {
    let item = this.props.item[this.props.match.params.itemId];
    return (
      <section>
        <h3>{item.name}</h3>
        <ul>
          <li>Item Price: {item.price}</li>
          <li>Happiness: {item.happiness}</li>
        </ul>
      </section>
    );
  }

}


export default ItemDetail;
