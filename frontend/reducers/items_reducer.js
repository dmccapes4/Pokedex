import { RECEIVE_SINGLE_POKEMON, RECEIVE_SINGLE_POKEMON_ITEM }
  from '../actions/pokemon_actions';


const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.pokemon.items;
    case RECEIVE_SINGLE_POKEMON_ITEM:
      return action.item;
    default:
      return state;
  }
};

export default itemsReducer;
