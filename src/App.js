/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TableForm from "./components/Table-reservation";
import About from "../src/components/About";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Orders from "./components/Order";
import Cart from "./components/cart/cart";
import DishList from "./components/Dish-section/Dish-Section";
import MobileNavbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <MobileNavbar />
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tableForm" element={<TableForm />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
