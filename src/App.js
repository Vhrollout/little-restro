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

function App() {
  return (
    <>
   
     <NavbarDark />
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/simpleSlider' element={<SimpleSlider />} />
      <Route path='/tableForm' element={<TableForm />} />
      <Route path='/order' element={<Orders />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/tableForm' element={<TableForm />} />
    </Routes>
    </>
  );
}


export default App;
