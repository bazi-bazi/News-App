import React, { Component } from 'react';
import './categories.css';
import { connect } from 'react-redux';
import { signOut } from '../../../redux/actions/authActions';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ChatList from './chatlist/ChatList';
import AddComment from '../addcomment';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class Categories extends Component {

  
  render() { 
    
  const {profile, logedIn, comments, auth, commentsOn}  = this.props;

  return (
    <div className="categories"> 
      <div className="categories__posts">
      <h2 className="categories__title">Profile</h2>
      <hr className="categories__line"></hr>
       <div className="categories__title">{profile}</div>
       {logedIn ? <Button> <a onClick={this.props.signOut}>Log Out</a></Button> : <Link to="/login"><Button>Login</Button> </Link> }
       
      </div>
      <h2 className="categories__title">Personal Massages</h2>
      <hr className="categories__line"></hr>
      <ChatList comments={comments} author={auth} />
      <p className="message__text">{ auth.uid ? 'Leave message' : 'Login to leave a message' }</p>
      { auth.uid ? <AddComment /> : <Link to="/login">Log in</Link>}       
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return{
    profile: state.firebase.profile.name,
    logedIn: state.auth.logedIn,
    comments: state.firestore.ordered.comments || state.comment.comments,
    auth: state.firebase.auth,
    commentsOn: state.firestore.ordered.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'comments', orderBy: ["createdAt", "desc"] }
  ])
)(Categories)

// export default connect(mapStateToProps, mapDispatchToProps)(Categories);