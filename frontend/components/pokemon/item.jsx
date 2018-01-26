import React from 'react';
import { Link, Route } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';

const Item = ({ item, pokemon }) => {
  return (
    <section>
      <Link to={`/pokemon/${pokemon.id}/items/${item.id}`}>
        {item.name}
      </Link>
      <Route path="/pokemon/:pokemonId/items/:itemId"
             component={ItemDetailContainer} />
    </section>
  );
};

export default Item;
