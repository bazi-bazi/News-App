import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Slider from './components/slider';
import Footer from './components/footer';
import Dashboard from './components/dashboard';

function App() {
  return (
    <>
    <div className="App wrapper">
      <Navigation />
      <Slider />
      <Dashboard />   
    </div>
    <Footer />
    </>
  );
}

export default App;
