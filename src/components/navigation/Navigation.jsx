import React from 'react';
import "./navigation.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


const Navigation=(props)=> {
  const { auth } = props;


  return (
      <header className="navbar navWrapper">
        <img src={logo} alt="logo" />
        <nav className="navbar__items">
          <li className="navbar__item">
           <Link to="/">Home</Link>
           </li>
           <li className="navbar__item">
            {auth.uid ? <Link to="/signup"></Link> : <Link to="/signup">Sign Up</Link>}         
           </li>
           <li className="navbar__item">
           {auth.uid ? <Link to="/login"></Link> : <Link to="/login">Log In</Link>}  
           
           </li>
        </nav>   
      </header>
  
  )
}

const mapDispatchToProps =(state)=> {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapDispatchToProps)(Navigation);


