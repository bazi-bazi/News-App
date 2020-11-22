import React, { useState, useEffect } from 'react';
import "../../post.css";



const PostContent=({image, title, date, description, readmore})=> {


  return (
    <div className="post__content">
    <img className="post__image" src={image} alt="post" />
    <h2 className="post__title">{title}</h2>
    <p className="post__date">{date}</p>
      <p className="post__text"> {description} </p>
      <p><a href={readmore} target="_blank">Read More</a></p>
    </div>
  )
}

export default PostContent;