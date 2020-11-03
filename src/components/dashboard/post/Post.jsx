import React from 'react';
import './post.css';
import image from '../../../img/post.png';
import {  Button } from "react-bootstrap";


const Post = () => {
  return (
    <div className="post">
      <img className="post__image" src={image} alt="post" />
      <h2 className="post__title">7 Secrets For Leadership Success</h2>
      <p className="post__date">2 days ago / by Masum Rana  /  3 min read</p>
      <p className="post__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
      
      <div className="post__comment">
      <hr className="line"></hr>
        <p className="post__comment__text">Leaved Comment</p>
      </div>
      <div className="post__form">
        <form >
          <textarea className="post__form-style" id="w3review" name="w3review" rows="4" cols="50" placeholder="Leave Comment">
          </textarea>
          <Button  className="w-50" variant="outline-primary" type="submit" value="Submit">
              Add Comment
            </Button>
        </form>
      </div>
    </div>
  )
}

export default Post;