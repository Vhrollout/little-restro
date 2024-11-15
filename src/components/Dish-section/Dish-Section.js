import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import products from '../products/products';
import './DishList.css';

export default function DishList() {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);
  const searchTerm = useSelector((state) => state.search.searchTerm);

  return (
    <div className="product-list-container">
      {searchTerm && (
        <div className="product-grid">
          {searchResults.length ? (
            searchResults.map((dish) => (
              <div key={dish.id} className="rproduct-card">
              <div className='product-image-container'>
                <img src={dish.img} alt={dish.name} className="product-image" />
              </div>
              <div className='product-info'>
              <h2 className='product-name'>{dish.name}</h2>
                <p className='product-price'>Price: ${dish.price}</p>
                <button
                      className="add-to-cart-button"
                      onClick={() => dispatch(addToCart(dish))}
                    >
                      Add to Cart
                    </button>
              </div>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}

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
                    <button
                      className="add-to-cart-button"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
