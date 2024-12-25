import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem, removeFromCart } from "../Actions/cart-actions";
import "./cart.css";
import { Link } from "react-router-dom";
import MobileNavbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cart() {
 
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
 

  return (
    <div>
      <MobileNavbar />
      {cartItems.length === 0 ? (
        <div className="cart-container">
          <h2>Your cart is empty</h2>
          <div className="shopping-btn">
            <button className="btn1">
              <Link to="/" className="nav-link">Continue Shopping</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-header">
          </div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => dispatch(incrementItem(item))}>+</button>
                  <button onClick={() => dispatch(decrementItem(item))}>-</button>
                  <button onClick={() => dispatch(removeFromCart(item))}><FontAwesomeIcon fa /></button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice}</p>
          </div>
          <div className="shopping-btn">
            <button className="btn1">
              <Link to="/" className="nav-link">Continue Shopping</Link>
            </button>
            <button className="btn2" onClick={() => alert("yet to be functionalised")}>
              Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
