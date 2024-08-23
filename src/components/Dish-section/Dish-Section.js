
import "./DishList.css";

export default function DishList({
  cartItems,
  addToCart,
  products,
  calculateTotalItems,
  calculateTotalPrice,
}) {


  return (
    <div className="dish-list">
      { (
        products.map((item) => (
          <div key={item.id} className="dish-card">
            <img src={item.img} alt={item.name} className="dish-image" />
            <h3 className="dish-name">{item.name}</h3>
            <p className="dish-price">${item.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(item)}
            >
              Add to cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}
