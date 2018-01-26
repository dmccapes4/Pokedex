import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON }
  from '../actions/pokemon_actions';
import _ from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_SINGLE_POKEMON:
    let id = action.pokemon.pokemon.id;
      return _.merge({}, state, {[id]: action.pokemon.pokemon});
    default:
      return state;
  }
};

export default pokemonReducer;
