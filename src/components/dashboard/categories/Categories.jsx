import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './categories.css';
import { connect } from 'react-redux';
import { signOut } from '../../../redux/actions/authActions';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


class Categories extends Component {

  
  render() { 
    
  const {profile, logedIn}  = this.props;
  return (
    <div className="categories">
      <h2 className="categories__title">categories</h2>
      <hr className="categories__line"></hr>
      <div className="categories__list">
        <nav>
          <li className="categories__item ative"><i class="fas fa-circle"></i><span className="active">Communication</span></li>
          <li className="categories__item ative"><i className="far fa-circle"></i><span>Communication</span></li>
          <li className="categories__item ative"><i className="far fa-circle"></i><span >Communication</span></li>
          <li className="categories__item ative"><i className="far fa-circle"></i><span >Communication</span></li>
          <li className="categories__item ative"><i className="far fa-circle"></i><span >Communication</span></li>
        </nav>
      </div>
      <div className="categories__posts">
      <h2 className="categories__title">Profile</h2>
      <hr className="categories__line"></hr>
       <div className="categories__title">{profile}</div>
       {logedIn ? <Button> <a onClick={this.props.signOut}>Log Out</a></Button> : <Link to="/login"><Button>Login</Button> </Link> }
       
      </div>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return{
    profile: state.firebase.profile.name,
    logedIn: state.auth.logedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);