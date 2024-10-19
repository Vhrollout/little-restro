/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import HeroElement from './components/Home/Home';
import Footer from "./components/Footer/Footer"
import TableForm from './components/Table-reservation';
import About from "../src/components/About";
import NavbarDark from './components/Navbar/Navbar';
import {
  Routes, // instead of "Switch"
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './components/Home/Home';
import Orders from './components/Order';
import Login from './components/Login';
import Cart from './components/cart/cart';
import { useState } from 'react';

const products = [
  {
    category: "Italian",
    products: [
      { id: 1, name: "Margherita", price: 15, img: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg", quantity: 1 },
      { id: 2, name: "Lasagna", price: 21, img: "https://cdn.pixabay.com/photo/2022/11/08/05/34/lasagna-7577748_1280.jpg", quantity: 1 },
      { id: 3, name: "Spaghetti Carbonara", price: 33, img: "https://images.pexels.com/photos/4518836/pexels-photo-4518836.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 4, name: "Mushroom Risotto", price: 14, img: "https://images.pexels.com/photos/21424385/pexels-photo-21424385/free-photo-of-top-view-of-a-mushroom-risotto-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 5, name: "Bruschetta", price: 16, img: "https://cdn.pixabay.com/photo/2020/10/01/22/39/gourmet-5619887_1280.jpg", quantity: 1 },
      { id: 6, name: "Osso Buco", price: 22, img: "https://media.istockphoto.com/id/155143584/photo/hole-bone.jpg?b=1&s=612x612&w=0&k=20&c=WNapcT0STg3bl0Gp85T3-n_T92CMeweyTs6nEDJzN58=", quantity: 1 },
      { id: 7, name: "Tiramisu", price: 35, img: "https://images.pexels.com/photos/26838689/pexels-photo-26838689/free-photo-of-piece-of-cake-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 8, name: "Galato", price: 12, img: "https://images.pexels.com/photos/5060942/pexels-photo-5060942.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 }
    ]
  },
  {
    category: "Chinese",
    products: [
      { id: 1, name: "Noodles", price: 11, img: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 2, name: "Fried Rice", price: 26, img: "https://images.pexels.com/photos/343871/pexels-photo-343871.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 3, name: "Chow mein", price: 35, img: "https://images.pexels.com/photos/3926135/pexels-photo-3926135.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 4, name: "Spring rolls", price: 16, img: "https://images.pexels.com/photos/6646264/pexels-photo-6646264.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 5, name: "Wonton soup", price: 16, img: "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 6, name: "Mapo tofu", price: 23, img: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 7, name: "Kung Pao Chicken", price: 31, img: "https://images.pexels.com/photos/15058977/pexels-photo-15058977/free-photo-of-a-plate-with-a-flatbread-with-meat-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 8, name: "Dumplings (Jiaozi)", price: 15, img: "https://images.pexels.com/photos/13995947/pexels-photo-13995947.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 }
    ]
  },
  {
    category: "Continental",
    products: [
      { id: 1, name: "French Onion Soup", price: 11, img: "https://images.pexels.com/photos/18410573/pexels-photo-18410573/free-photo-of-soup-with-onion-in-pan.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 2, name: "Coq au Vin", price: 21, img: "hhttps://images.pexels.com/photos/9114088/pexels-photo-9114088.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 3, name: "Chicken Alfredo", price: 54, img: "https://images.pexels.com/photos/17760129/pexels-photo-17760129/free-photo-of-fried-chicken-on-a-wire-rack-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 4, name: "Paella", price: 32, img: "https://images.pexels.com/photos/16743486/pexels-photo-16743486/free-photo-of-seafood-paella-with-lobster.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 5, name: "Garlic Mashed Potatoes", price: 22, img: "https://images.pexels.com/photos/20271268/pexels-photo-20271268/free-photo-of-mashed-potatoes-and-meat-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 6, name: "Ratatouille", price: 10, img: "https://media.istockphoto.com/id/1255691142/photo/stewed-vegetables-eggplant-tomatoes-zucchini-with-tomato-sauce-garlic-and-herbs.jpg?b=1&s=612x612&w=0&k=20&c=4lQByCCHdE2Dt5gJqwkCr2nYP3IEuqHZrf9XZxaikA4=", quantity: 1 },
      { id: 7, name: "Garlic Mashed Potatoes", price: 25, img: "https://images.pexels.com/photos/20271268/pexels-photo-20271268/free-photo-of-mashed-potatoes-and-meat-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
      { id: 8, name: "Roasted Vegetables", price: 21, img: "https://images.pexels.com/photos/6462179/pexels-photo-6462179.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 }
    ]
  },
] 



function App() {

  const [cartItems, setCartItems] = useState([]);

    function incrementItemQuantity(item) {
      const updatedItems = cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedItems);
  }
  
  const add = incrementItemQuantity;
  const remove = decrementItemQuantity;

  function decrementItemQuantity(item) {
      
      const updatedItems = cartItems.map(cartItem =>
        cartItem.id === item.id && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCartItems(updatedItems);
  }
  
  function addToCart(item) {
    const itemExists = cartItems.some(i => i.id === item.id);
    let newCartItems;

    if (itemExists) {
        newCartItems = cartItems.map(i => 
            i.id === item.id ? { ...i } : i
        );
    } else {
        newCartItems = [...cartItems, { ...item, quantity: 1 }];
    }
    setCartItems(newCartItems);
  }
  
  function removeFromCart(item) {
    const condition = cartItems.map(i => i.id === item.id) && cartItems.length > 0;
    console.log(condition)
    if (condition) {
      const updatedItems = cartItems.filter(cartItem => cartItem.id !== item.id);
      setCartItems(updatedItems)
    } else {
      setCartItems(item)
    }
    
  }

 

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  
  return (
    <>

     <NavbarDark totalItems={totalItems} />
   <Routes>
        <Route path='/' element={<Home cartItems={cartItems} addToCart={addToCart} products={products} totalPrice={totalPrice}
          totalItems={totalItems}  />} />
      <Route path='/about' element={<About />} />
      <Route path='/tableForm' element={<TableForm />} />
      <Route path='/order' element={<Orders />} />
        <Route path='/cart' element={<Cart
          incrementItemQuantity={incrementItemQuantity}
          decrementItemQuantity={decrementItemQuantity}
          removeFromCart={removeFromCart}
          cartItems={cartItems}
          totalPrice={totalPrice}
          totalItems={totalItems}
        />} />
      </Routes>
    </>
  );
}


export default App;
