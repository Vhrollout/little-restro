import { CartProvider, useCart } from "react-use-cart";

function Page() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      quantity: 1,
      image: "../../Assets/back2.jpg"
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 5,
      image: "../../Assets/yelow.jpg"
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1,
      image: "../../Assets/yelow.jpg"
    },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem(p)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            {item.quantity} x {item.name} &mdash;
            
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Page />
      <Cart />
    </CartProvider>
  );
}