import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Slider from './components/slider';
import Dashboard from './components/dashboard';
import Footer from './components/footer';

function App() {
  return (
    <div className="app">
    <div className="App wrapper">
      <Navigation />
      <Slider />
      <Dashboard />   
    </div>
    <div className="footer">
      <Footer />
    </div>
    </div>
  );
}

export default App;
