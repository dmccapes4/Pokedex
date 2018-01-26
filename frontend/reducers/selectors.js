import _ from 'lodash';

export const selectAllPokemon = (state) => {
  return _.values(state.entities.pokemon);
};

export const selectSinglePokemon = (state) => {
  return state.entities.pokemon;
};

export const selectItems = (state) => {
  return _.values(state.entities.items);
};

export const selectItem = (state) => {
   return state.entities.items;
};
