import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';
export const RECEIVE_SINGLE_POKEMON_ITEM ='RECEIVE_SINGLE_POKEMON_ITEM';

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receiveSinglePokemon = (pokemon) => {
  return {
    type: RECEIVE_SINGLE_POKEMON,
    pokemon
  };
};

export const receiveSinglePokemonItem = (item) => {
  return {
    type: RECEIVE_SINGLE_POKEMON_ITEM,
    item
  };
};

export const requestSinglePokemon = (id) => (dispatch) => (
  APIUtil.fetchSinglePokemon(id)
    .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
);

export const requestSinglePokemonItem = (pokemonId, itemId) => (dispatch) => {
  APIUtil.fetchSinglePokemonItem(pokemonId, itemId)
    .then(item => dispatch(receiveSinglePokemonItem(item)));
};
