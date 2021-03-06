import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import Signin from './components/profile/Signin';
import Signup from './components/profile/Signup';
import ForgotPassword from './components/profile/ForgotPassword';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="app">
        <div className="App wrapper">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgot-password" component={ForgotPassword} />
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
