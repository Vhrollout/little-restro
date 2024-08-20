import React from "react";
import './cart.css';

function Cart({ incrementItemQuantity, removeFromCart, Dishes, cartItems, decrementItemQuantity, totalPrice, totalItems }) {
  console.log(totalItems);


  return (
    <div className="main">
      <div className='cart'>
        <h3>Your Cart</h3>
        <p>Total items: {totalItems}</p>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="cart-list">
                <div>
                  <img src={item.img} alt={item.name} style={{ maxWidth: "50px" }} />
                </div>
                <div>
                  {item.name} - {item.price}
                  <div>
                    <button onClick={() => incrementItemQuantity(item)}>+</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => decrementItemQuantity(item)}>-</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <h3>{totalPrice}</h3>
      </div>
      <div>
        <img src="https://static.vecteezy.com/system/resources/previews/024/524/036/original/man-carrying-shopping-bags-free-png.png" alt="cart gif" width="450px" />
      </div>
    </div>
  );
}

export default Cart;
