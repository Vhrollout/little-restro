import React from "react";
import './cart.css';

function Cart({ incrementItemQuantity, removeFromCart, Dishes, cartItems, decrementItemQuantity, totalPrice, totalItems }) {
  return (
    <div className="main">
      <div className='cart'>
        <h3 className='head'>Your Cart</h3>
        <h3 className='head'>Total items: {totalItems}</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="cart-list">
                <img src={item.img} alt={item.name} />
                <div className="details">
                  <h5>{item.name} - ${item.price}</h5>
                  <h5>Item cost: ${item.quantity * item.price}</h5>
                  <div className='btn-div'>
                    <button onClick={() => incrementItemQuantity(item)}>+</button>
                    <h3>{item.quantity}</h3>
                    <button onClick={() => decrementItemQuantity(item)}>-</button>
                  </div>
                  <button className='rm' onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <h3 className='head'>Cart Total: ${totalPrice}</h3>
      </div>
      <div>
        <img src="https://static.vecteezy.com/system/resources/previews/024/524/036/original/man-carrying-shopping-bags-free-png.png" alt="cart gif" width="450px" />
      </div>
    </div>
  );
}

export default Cart;
