import React, { useState, useEffect } from 'react';
import "../../post.css";
import noImage from '../../../../../img/noimage.jpg';
import { Button } from 'react-bootstrap';


const ArtContent=({image, title, date, description, readmore})=> {

  const withImage = image;
  return (
    <div>
    <div className="post__content">
    <img className="post__image" src={image == null ? noImage : withImage} alt="post" />
    <h2 className="post__title">{title}</h2>
    <p className="post__date">{date}</p>
      <p className="post__text"> {description} </p>
      
    </div>
    <div className="post__readmore">
    <Button variant="primary"><a className="post__readmore-text" href={readmore} target="_blank">Read More</a></Button>
    </div>
    </div>
  )
}

export default ArtContent;