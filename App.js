import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CompanySignup from "./components/company-signup.component";
import StudentSignup from "./components/student-signup.component";
import Login from "./components/login.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://bbc.com" target="_blank">
              <img src={logo} width="30" height="30" alt="Campus Recruitment System" />
            </a>
            <Link to="/" className="navbar-brand">Campus Recruitment System</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/studentsignup" className="nav-link">Student Signup</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/companysignup" className="nav-link">Company Signup</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/studentsignup" exact component={StudentSignup} />
          <Route path="/companysignup" exact component={CompanySignup} />
          <Route path="/login" exact component={Login} />

        </div>
      </Router>
    );
  }
}

export default App;
