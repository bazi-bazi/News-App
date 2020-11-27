import React, { Component } from 'react';
import './post.css';
import { connect } from 'react-redux';
import PostList from './postlist';
import TechList from './techlist';
import ArtList from './artlist';
import ArchiList from './archilist';



class Post extends Component {

  render() {
    const { businessOn, techOn, artOn, archiOn, loadingBar } = this.props;
  return (  
    <div className="post">
      {businessOn ? <PostList /> : null}
      {techOn ? <TechList /> : null}
      {artOn ? <ArtList /> : null}
      {archiOn ? <ArchiList /> : null}
    </div>
  )
}
}

const mapStateToProps =(state)=> {
  return {
    comments: state.firestore.ordered.comments || state.comment.comments,
    auth: state.firebase.auth,
    businessOn: state.news.businessOn,
    techOn: state.news.techOn,
    artOn: state.news.artOn,
    archiOn: state.news.archiOn,
    loadingBar: state.loadingBar
  }
}


export default connect(mapStateToProps)(Post);