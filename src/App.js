/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeroElement from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import TableForm from "./components/Table-reservation";
import About from "../src/components/About";
import NavbarDark from "./components/Navbar/Navbar";
import {
  Routes, // instead of "Switch"
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Orders from "./components/Order";
import Login from "./components/Login";
import Cart from "./components/cart/cart";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./components/store/store";
import DishList from "./components/Dish-section/Dish-Section";

function App() {
  return (
    <>
      <NavbarDark />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tableForm" element={<TableForm />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
