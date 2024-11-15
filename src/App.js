/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TableForm from "./components/Table-reservation";
import About from "../src/components/About";
import NavbarDark from "./components/Navbar/Navbar";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Orders from "./components/Order";
import Cart from "./components/cart/cart";
import DishList from "./components/Dish-section/Dish-Section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tableForm" element={<TableForm />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
