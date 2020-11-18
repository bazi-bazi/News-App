import React from 'react';
import moment from "moment";
import './chat.css';

const Chat = ({comment}) => {
  return (
    <div>
      <div className="container">
      <p className="chat__author">{comment.authorName}</p>
      <p className="chat__message">{comment.content}</p>
      <span className="time-right">{comment.createdAt && moment(comment.createdAt.toDate()).calendar()}</span>
      </div>
    </div>

  )
}

export default Chat;