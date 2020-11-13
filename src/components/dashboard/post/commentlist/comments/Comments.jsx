import React from 'react';
import moment from "moment";
// import { connect } from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
// import { compose } from 'redux'

const Comments = ({comment}) => {
  return (
    <div>
      <p>posted by {comment.authorName}</p>
      <p>posted date - {comment.createdAt && moment(comment.createdAt.toDate()).calendar()}</p>
      <p>{comment.content}</p>
    </div>

  )
}

export default Comments;