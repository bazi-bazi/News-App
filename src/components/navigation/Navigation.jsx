import React from 'react';
import "./navigation.css";
import logo from "../../img/logo.png";
import {
  Link
} from "react-router-dom";


const Navigation=()=> {
  return (
      <header className="navbar navWrapper">
        <img src={logo} alt="logo" />
        <nav className="navbar__items">
          <li className="navbar__item">
           <Link to="/">Home</Link>
           </li>
           <li className="navbar__item">
           <Link to="/signup">Sign Up</Link>
           </li>
           <li className="navbar__item">
           <Link to="/login">Log In</Link>
           </li>
        </nav>   
      </header>
  
  )
}

export default Navigation;


