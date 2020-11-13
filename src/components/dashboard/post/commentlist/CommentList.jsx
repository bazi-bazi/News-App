import React from 'react';
import Comments from './comments';

const CommentList = ({ comments }) => {
  return (
    <div>
      { comments && comments.map(comment => {
        return (        
            <Comments comment={comment} />
        )
      })}  
    </div>

  )
}

export default CommentList;