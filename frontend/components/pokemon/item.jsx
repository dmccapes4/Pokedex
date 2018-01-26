import React from 'react';
import { Link, Route } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';

const Item = ({ item, pokemon }) => {
  return (
    <section className="items">
      <Link to={`/pokemon/${pokemon.id}/items/${item.id}`}>
        <img src={item.image_url} width="45px" height="auto" />
      </Link>
    </section>
  );
};

export default Item;
