import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Slider from './components/slider';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import Signin from './components/profile/Signin';
import Signup from './components/profile/Signup';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="App wrapper">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
       <div className="footer">
         <Footer />
       </div>
      </div>
    </Router>
  );
}

export default App;
