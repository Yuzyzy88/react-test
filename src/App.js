import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import ContactMe from './pages/ContactMe';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/Put Your Password!!!/">
        <div className="App">

          <div className="App__Form">
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/sign-in" component={SignInForm}></Route>
            <Route exact path="/sign-up" component={SignUpForm}></Route>
            <Route exact path="/Contactme" component={ContactMe}></Route>
          </div>

          <div className="App__Aside">
            <ul className="MenuAtas">
              <li><NavLink to="/">Homepage</NavLink></li>
              <li><NavLink to="/Contactme">Contact Me</NavLink></li>
              <li><NavLink to="/sign-in">Sign In</NavLink></li>
              <li><NavLink to="/sign-up">Sign up</NavLink></li>
            </ul>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
