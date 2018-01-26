import React from 'react';

class ItemDetail extends React.Component {

  render() {
    let item = this.props.item[this.props.match.params.itemId];
    return (
      <section>
        <h3>{item.name}</h3>
        <ul>
          <li>Item Price: {item.price}</li>
          <li>Happiness: {item.happiness}</li>
        </ul>
      </section>
    );
  }

}


export default ItemDetail;
