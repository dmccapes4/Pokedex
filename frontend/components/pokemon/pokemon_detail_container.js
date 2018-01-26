import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectSinglePokemon, selectItems } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => {
  console.log(state);
  return {
  pokemon: selectSinglePokemon(state),
  items: selectItems(state)
};};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (pokeId) => dispatch(requestSinglePokemon(pokeId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
