import React, { Component } from 'react';
import './post.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PostList from './postlist';




class Post extends Component {

  render() {
  return (
    <div className="post">
      <PostList />     
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


export default connect(mapStateToProps)(Post);