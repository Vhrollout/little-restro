
import "./DishList.css";

export default function DishList({
  addToCart,
  products,
}) {


  return (
    <div className="product-list-container">
      {products.map((category, index) => (
        <div key={index} className="category-container">
          <h2 className="category-title">{category.category}</h2>
          <div className="product-grid">
            {category.products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img src={product.img} alt={product.name} className="product-image" />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">Price: ${product.price}</p>
                  <button className="add-to-cart-button" onClick={()=>addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
