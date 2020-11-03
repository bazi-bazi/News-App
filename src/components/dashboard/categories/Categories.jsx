import React from 'react';
import './categories.css';


const Categories=()=> {
  return (
    <div className="categories">
      <h2 className="categories__title">categories</h2>
      <hr className="categories__line"></hr>
      <div className="categories__list">
        <nav>
          <li className="categories__item ative"><i class="fas fa-circle"></i><span className="active">Communication</span></li>
          <li className="categories__item ative"><i className="far fa-circle"></i><span>Communication</span></li>
          <li className="categories__item ative"><i className="far fa-circle"></i><span >Communication</span></li>
          <li className="categories__item ative"><i className="far fa-circle"></i><span >Communication</span></li>
          <li className="categories__item ative"><i className="far fa-circle"></i><span >Communication</span></li>
        </nav>
      </div>
      <div className="categories__posts">
      <h2 className="categories__title">New Posts</h2>
      <hr className="categories__line"></hr>
      </div>
    </div>
  )
}

export default Categories;