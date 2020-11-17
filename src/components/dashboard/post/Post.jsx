import React, { Component } from 'react';
import './post.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import CommentList from './commentlist';
import AddComment from '../addcomment';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PostList from './postlist';




class Post extends Component {

  render() {
    const { auth, comments } = this.props;
  return (
    <div className="post">
      <PostList />
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