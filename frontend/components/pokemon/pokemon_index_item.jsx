import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ pokemon }) => {
  return (
    <li className="pokemon">
      <Link to={`/pokemon/${pokemon.id}`}>
        <strong>{pokemon.name}</strong>
        <br />
        <img width="35px" height="35px" src={pokemon.image_url} />
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
