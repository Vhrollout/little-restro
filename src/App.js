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
import SimpleSlider from './components/carousel2/SimpleSlider';
import Cart from './components/cart/cart';
import { useState } from 'react';

  const products = [
    { id: 1, name: "noodles", price: 10, img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
    { id: 2, name: "mutton tava garam", price: 20, img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
    { id: 3, name: "pronz fry", price: 30, img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
    { id: 4, name: "Salsa", price: 10, img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
    { id: 5, name: "baked slame", price: 20, img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
    { id: 6, name: "seaweed soup", price: 30, img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
    { id: 7, name: "italian brown kool", price: 10, img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
    { id: 8, name: "fried rice", price: 20, img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
    { id: 9, name: "dosa", price: 30, img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 },
    { id: 9, name: "poli", price: 30, img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600", quantity: 1 }
  ];

function App() {

  const [cartItems, setCartItems] = useState([]);

    function incrementItemQuantity(item) {
      const updatedItems = cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
    }

  function decrementItemQuantity(item) {
      
      const updatedItems = cartItems.map(cartItem =>
        cartItem.id === item.id && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
  }
  
  function addToCart(item) {
    const itemExists = cartItems.some(i => i.id === item.id);
    let newCartItems;

    if (itemExists) {
        newCartItems = cartItems.map(i => 
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
    } else {
        newCartItems = [...cartItems, { ...item, quantity: 1 }];
    }

    console.log(newCartItems);
    setCartItems(newCartItems);
}


  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const totalItems = [...cartItems].length;
  console.log(totalItems, totalPrice);
  
    function removeFromCart(item) {
      const updatedItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    }

  return (
    <>

     <NavbarDark totalItems={totalItems} />
   <Routes>
        <Route path='/' element={<Home cartItems={cartItems} addToCart={addToCart} products={products} totalPrice={totalPrice}
          totalItems={totalItems}  />} />
      <Route path='/about' element={<About />} />
      <Route path='/simpleSlider' element={<SimpleSlider />} />
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
