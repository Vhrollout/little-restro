import "./index.css";
import App from "../scroll_animation/cart";

export default function Orders() {
    return(
        <div className="order">
            <App />
            <div className="list">
            <h2>Order Summary</h2>
           <li>Lemon Cake<span>$5</span></li>
           <li>Strawberry pie<span>$3</span></li>
           <li>Cold Coffee<span>$7</span></li>
           <hr />
           <li>Total<span>$15</span></li>
            </div>
        </div>
    )
}