import React from 'react';

const PokemonIndexItem = ({ pokemon }) => {
  return (
    <li>
      <strong>{pokemon.name}</strong>
      <br />
      <img width="100px" height="100px" src={pokemon.image_url} />
    </li>
  );
};

export default PokemonIndexItem;
