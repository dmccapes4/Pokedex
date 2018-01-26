import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON_ITEMS = 'RECEIVE_ALL_POKEMON_ITEMS';

export const receiveAllPokemonItems = (pokemonItems) => {
  return {
    type: RECEIVE_ALL_POKEMON_ITEMS,
    pokemonItems
  };
};


export const requestAllPokemonItems = (id) => (dispatch) => {
  APIUtil.fetchAllPokemonItems(id)
    .then(pokemonItems => dispatch(receiveAllPokemonItems(pokemonItems)));
};
