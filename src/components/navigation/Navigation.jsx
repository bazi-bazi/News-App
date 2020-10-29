import React from 'react';
import "./navigation.css";
import logo from "../../img/logo.png";


const Navigation=()=> {
  return (
    <header className="navbar navWrapper">

        <img src={logo} alt="logo" />

      <ul className="navbar__items">
           <li className="navbar__item">Home</li>
           <li className="navbar__item">newsReducer</li>
           <li className="navbar__item">Contact</li>
           <li className="navbar__item">About</li>
      </ul>
      
    </header>
  )
}

export default Navigation;


