import React, { useState } from 'react';
import { useCart } from '../Cart-Context/cart-context';
import products from '../products/products';
import AddButton from './addButton/AddtocartButton';
import './DishList.css';

export default function DishList() {
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000); // Show alert for 1 second
  };

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Our Menu</h1>
      <div className="category-list">
        {products.map((category, index) => (
          <div key={index} className="category-container">
            <h2 className="category-name">{category.name}</h2>
            <div className="product-grid">
              {category.products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">Price: ${product.price}</p>
                    <AddButton
                      product={product}
                      addToCart={addToCart}
                      handleShowAlert={handleShowAlert}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {showAlert && (
        <div className="alert-center">
          Item added to cart!
        </div>
      )}
    </div>
  );
}
