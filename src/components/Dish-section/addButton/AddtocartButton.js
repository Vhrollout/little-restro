import React, { useState } from 'react';
import './btn.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom';


function AddButton({ product, addToCart, handleShowAlert }) {
  const [isAdded, setIsAdded] = useState(false);

  const productInCart = JSON.parse(localStorage.getItem('cartItems')) || [];

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(!isAdded);
    handleShowAlert();
    // No need to reset the isAdded state since we want the button to stay disabled
  };

 

  return (
    <div className="button-container">
      <button
        className="add-to-cart-button"
        onClick={handleAddToCart}
        disabled={productInCart.some((item) => item.id === product.id)}
      >
        {productInCart.some((item) => item.id === product.id) ?  <Link to="/cart" className="text-black text-decoration-none font-semibold bg-red-400 py-2 px-4 rounded">
                      Go to Cart
                      </Link>
                     : 'Add to Cart'}
      </button>
    </div>
  );
}

export default AddButton;
