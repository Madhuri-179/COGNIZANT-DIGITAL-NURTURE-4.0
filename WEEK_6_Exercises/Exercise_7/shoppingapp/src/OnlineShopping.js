import React from 'react';
import Cart from './Cart';
import './OnlineShopping.css';

class OnlineShopping extends React.Component {
  render() {
    const items = [
      { itemname: 'Laptop', price: 70000 },
      { itemname: 'Mobile', price: 25000 },
      { itemname: 'Headphones', price: 3000 },
      { itemname: 'Keyboard', price: 1500 },
      { itemname: 'Monitor', price: 12000 }
    ];

    return (
      <div className="shopping-container">
        <h2>🛒 Shopping Cart</h2>
        <div className="green-box">
          <div className="cart-row header-row">
            <div className="item">ITEMS</div>
            <div className="divider-vertical" />
            <div className="price">PRICE</div>
          </div>
          {items.map((item, index) => (
            <Cart key={index} itemname={item.itemname} price={item.price} />
          ))}
        </div>
      </div>
    );
  }
}

export default OnlineShopping;
