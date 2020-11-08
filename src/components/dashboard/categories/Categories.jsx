import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './categories.css';
import { connect } from 'react-redux';
import { signOut } from '../../../redux/actions/authActions';
import { Button } from 'react-bootstrap';


class Categories extends Component {

  
  render() { 
    
    const {profile}  = this.props;
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
       <div className="categories__title">{this.props.profile}</div>
      <Button><a onClick={this.props.signOut}>Sign Out</a></Button> 
      </div>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return{
    profile: state.firebase.profile.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);