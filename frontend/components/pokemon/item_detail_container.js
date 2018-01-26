import { connect } from 'react-redux';
import { requestSinglePokemonItem } from '../../actions/pokemon_actions';
import { selectItem, selectSinglePokemon } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = state => ({
  item: selectItem(state),
  pokemon: selectSinglePokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemonItem: (pokemonId, itemId) =>
    dispatch(requestSinglePokemonItem(pokemonId, itemId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
