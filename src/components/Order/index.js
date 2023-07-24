import "./index.css";

export default function Orders() {
    return(
        <div className="order">
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