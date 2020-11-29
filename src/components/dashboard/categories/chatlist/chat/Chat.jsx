import React from 'react';
import moment from "moment";
import './chat.css';
import { connect } from 'react-redux';
import { removeComments } from '../../../../../redux/actions/commentActions';
import { Button } from 'react-bootstrap';
import { TrashFill } from 'react-bootstrap-icons';

const Chat = ({comment, auth, removeComments}) => {

  const handleRemove = (comment) => {
    removeComments(comment);
  };

  return (
    <div>
      <div className="container">
      <p className="chat__author">Author name: {comment.authorName}</p>
      <p className="chat__message">{comment.content}</p>
      <span className="time-right">{comment.createdAt && moment(comment.createdAt.toDate()).calendar()}</span>
      <div className="chat__trash">
      {auth.uid === comment.authorId ? <Button variant="link" size="sm" onClick={() => handleRemove(comment)}><TrashFill color="white" size={20} /></Button> : null}
      </div>
      </div>
    </div>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeComments: (comment) => dispatch(removeComments(comment))  
  };
};


export default connect(null, mapDispatchToProps)(Chat);