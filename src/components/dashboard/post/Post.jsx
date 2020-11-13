import React, { Component } from 'react';
import './post.css';
import image from '../../../img/post.png';
import {  Button, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import CommentList from './commentlist';
import AddComment from '../addcomment';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'


class Post extends Component {

  render() {
    const { auth, comments } = this.props;
  return (
    <div className="post">
      <img className="post__image" src={image} alt="post" />
      <h2 className="post__title">7 Secrets For Leadership Success</h2>
      <p className="post__date">2 days ago / by Masum Rana  /  3 min read</p>
      <p className="post__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
      
      <div className="post__comment">
      <hr className="line"></hr>   
        <p className="post__comment__text">{ auth.uid ? 'Leaved Comment' : 'Register to leave comment' }</p>
      </div>
      { auth.uid ? <div className="post__form">
        <CommentList comments={comments} />
        <AddComment />
      </div> : <Link to="/login">Log in</Link>}
      
    </div>
  )
}
}

const mapStateToProps =(state)=> {
  return {
    comments: state.firestore.ordered.comments || state.comment.comments,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'comments', orderBy: ["createdAt", "desc"] }
  ])
)(Post)