import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarDark from './Navbar';
import "./App.css";
import HeroElement from './components/Hero';
import Footer from './Footer';


function App() {
  return (
    <>
      <NavbarDark />
     <HeroElement />
     <Footer />
    </>
  );
}


export default App;
