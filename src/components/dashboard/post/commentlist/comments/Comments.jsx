import React from 'react';
// import { connect } from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
// import { compose } from 'redux'

const Comments = ({comment}) => {
  return (
    <div>
      <p>{comment.content}</p>
    </div>

  )
}

export default Comments;