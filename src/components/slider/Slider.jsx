import React from 'react';
import './slider.css';
import { connect } from 'react-redux';


const Slider=({ selectBusiness, selectTech, selectArt, selectArchitect })=> {
  return (
    <div className="slider">
      <nav className="slider__items">
        <li className="slider__item business" onClick={ selectBusiness }>
          <span className="slider__text">business </span>        
        </li>
        <li className="slider__item technologies" onClick={ selectTech }>
        <span className="slider__text"> technologies</span>        
        </li>
        <li className="slider__item entertainmant" onClick={ selectArt }>
        <span className="slider__text"> entertainment </span>  
        </li>
        <li className="slider__item science" onClick={ selectArchitect }>
        <span className="slider__text"> science</span> 
        </li>
      </nav>
    </div>
  )
}


 const mapDispatchToProps = (dispatch)=> {
   return {
    selectBusiness: () => dispatch({type: 'SELECT_BUSINESS'}),
    selectTech: () => dispatch({type: 'SELECT_TECH'}),
    selectArt: () => dispatch({type: 'SELECT_ART'}),
    selectArchitect: () => dispatch({type: 'SELECT_ARCHITECT'})
   }
 }


export default connect(null, mapDispatchToProps)(Slider);