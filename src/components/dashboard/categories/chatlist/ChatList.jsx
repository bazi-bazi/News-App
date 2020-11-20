import React from 'react';
import Chat from './chat';
import './chatlist.css';

const ChatList = ({comments, author}) => {
  return (
    <div className="chatlist">
      { comments && comments.map(comment => {
        return (  
      <Chat comment={comment} key={comment.id} auth={author}/>
      )
      })} 
    </div>

  )
}

export default ChatList;