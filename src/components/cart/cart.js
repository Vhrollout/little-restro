// Cart.js
import React from 'react';
import { useCart } from '../Cart-Context/cart-context';
import './cart.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
  const {
    cartItems,
     removeFromCart,
     incrementCartItem,
     decrementCartItem,
    totalItems,
    cartTotal
  } = useCart();


  return (
    <div>
      {!cartItems ? (
        <div className="cart-container">
          <h2>Your cart is empty</h2>
          <div className="shopping-btn">
            <button className="btn1">
              <Link to="/" className="nav-link">
                Continue Shopping
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-header"></div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: </p>
                </div>
                <div className="cart-item-actions">
                 {item.quantity <= 1 ? 
                  <button
                    title="Remove item"
                    onClick={() => removeFromCart(item)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button> :
                 <button
                    title="Remove one"
                    onClick={() => decrementCartItem(item.id)}
                  >
                    -
                  </button>}
                  <span>{item.quantity}</span>
                  <button
                    title="Add one"
                    onClick={() => incrementCartItem(item.id)}
                   
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${cartTotal}</p>
          </div>
          <div className="shopping-btn">
            <button className="btn1">
              <Link to="/" className="nav-link ">
                Continue Shopping
              </Link>
            </button>
            <button
              className="btn2"
              onClick={() => alert("yet to be functionalised")}
            >
              Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
