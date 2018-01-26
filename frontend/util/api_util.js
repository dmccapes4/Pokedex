export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon`,
  });
};

export const fetchSinglePokemon = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`,
  });
};

export const fetchAllPokemonItems = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}/items`,
  });
};

export const fetchSinglePokemonItem = (pokemonId, itemId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${pokemonId}/items/${itemId}`
  });
};
