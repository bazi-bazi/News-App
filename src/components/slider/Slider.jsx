import React from 'react';
import slider from '../../img/slide.png';
import './slider.css';


const Slider=()=> {
  return (
    <div className="slider">
      <img className="slider__image" src={slider} alt="slider" />
    </div>
  )
}

export default Slider;