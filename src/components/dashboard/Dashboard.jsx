import React from 'react';
import Categories from './categories/Categories';
import Sidebar from './sidebar/Sidebar';
import './dashboard.css';


const Dashboard=()=> {
  return (
    <div >
      <div className="dashboard">
        <h2>Dashboard</h2>
      </div>
      <Categories />
      <Sidebar />  
    </div>
  )
}

export default Dashboard;