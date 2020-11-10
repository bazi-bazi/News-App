import React from 'react';
import Categories from './categories/Categories';
import './dashboard.css';
import Slider from '../slider';
import Post from './post/Post';

const Dashboard=()=> {
  return (
    <div>
    <Slider /> 
    <div className="main">
      <div className="dashboard">
        <Post />
      </div>
      <div className="left">
      <Categories />
      </div>
    </div>
    </div>
  )
}

export default Dashboard;