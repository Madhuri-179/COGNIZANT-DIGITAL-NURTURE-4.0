import React from 'react';
import './OnlineShopping.css';

class Cart extends React.Component {
  render() {
    const { itemname, price } = this.props;

    return (
      <div className="cart-row">
        <div className="item">{itemname}</div>
        <div className="divider-vertical" />
        <div className="price">₹{price}</div>
      </div>
    );
  }
}

export default Cart;
