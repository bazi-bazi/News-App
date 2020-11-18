import React from 'react';
import Chat from './chat';
import './chatlist.css';

const ChatList = ({comments}) => {
  return (
    <div className="chatlist">
      { comments && comments.map(comment => {
        return (  
      <Chat comment={comment} />
      )
      })} 
    </div>

  )
}

export default ChatList;