import React from 'react';
import Categories from './categories/Categories';
import Sidebar from './sidebar/Sidebar';
import './dashboard.css';
import Footer from '../footer/Footer';
import Slider from '../slider';

const Dashboard=()=> {
  return (
    <div>
    <Slider /> 
    <div className="main">
      <div className="dashboard">
        <h2>Dashboard</h2>
      </div>
      <div className="left">
      <Categories />
      </div>
      <div className="right">
      <Sidebar />
      </div>  
      <div className="footer">
      <Footer /> 
      </div>
    </div>
    </div>
  )
}

export default Dashboard;