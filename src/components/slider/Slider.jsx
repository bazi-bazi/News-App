import React from 'react';
import slider from '../../img/slide.png';
import './slider.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { selectBusiness } from '../../redux/actions/newsAction';
import { selectTech } from '../../redux/actions/newsAction';
import { selectArt } from '../../redux/actions/newsAction';
import { selectArchitect} from '../../redux/actions/newsAction';

const Slider=({ selectBusiness, selectTech, selectArt, selectArchitect })=> {
  return (
    <div className="slider">
      <img className="slider__image" src={slider} alt="slider" />
      <nav>
        <li onClick={ selectBusiness }>
          business         
        </li>
        <li onClick={ selectTech }>
          technologies         
        </li>
        <li onClick={ selectArt }>
          Art     
        </li>
        <li onClick={ selectArchitect }>
          Architect    
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