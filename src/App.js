import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarDark from './Navbar';
import "./App.css";
import HeroElement from './Hero';
import Footer from './Footer';
import DishList from './Dish-Section';


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
