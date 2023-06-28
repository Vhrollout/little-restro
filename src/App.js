import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarDark from './components/Navbar';
import feed from "./Assets/logor.png";
import "./App.css"

function App() {
  return (
    <>
    <div>
      <NavbarDark />
     <img src={feed} alt='this do' />
     </div>
    </>
  );
}


export default App;
