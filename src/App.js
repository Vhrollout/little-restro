import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarDark from './components/Navbar/Navbar';
import "./App.css";
import HeroElement from './components/Hero/Hero';
import Footer from "./components/Footer/Footer"
import DishList from './components/Dish-section/Dish-Section';


function App() {
  return (
    <>
     <NavbarDark />
     <HeroElement />
     <DishList />
     <Footer />
    </>
  );
}


export default App;
