import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

// Routes import | home  learn  connect
import Home from './components/home'
import Learn from './components/learn'
import Connect from './components/connect'
import Build from './components/build'
import '../public/styles.css';


const RouteHub = () => (
  <Router>
    <div className="wrapper">

      <ul className="mini-nav">

        <li><a className="glyphicon glyphicon-search" href="#"></a></li>
        <li><a className="min-down" href="#">Downloads</a></li>
        <li><a href="#">Support</a></li>
        <li>
          <a className="si" href="#">Sign In</a>
          <a>/</a>
          <a className="min-reg" href="#">Register</a>
        </li>
        <li><a className="min-con" href="#">Contact Us</a></li>
      </ul>

      <Navbar className="navI">
        <Nav className="main-nav">
          <NavItem className="Logo"></NavItem>
          <NavItem className="mn" href="/">Home</NavItem>
          <NavItem className="mn" href="/learn">Learn</NavItem>
          <NavItem className="mn" href="/build">Build</NavItem>
          <NavItem className="mn" href="/connect">Connect</NavItem>
        </Nav>
      </Navbar>

      <Route exact path="/" />
      <Route path="/learn" component={Learn}/>
      <Route path="/build" component={Build}/>
      <Route path="/connect" component={Connect}/>
      <Route path="/" component={Home}/>

    </div>
  </Router>
)

export default RouteHub



//  -------------\_   Below is Storage area code   _|-------------------
//
// <ul className="Rlinks">
//   <li><Link to="/">Home</Link></li>
//   <li><Link to="/about">About</Link></li>
//   <li><Link to="/contact">Contact</Link></li>
// </ul>
//
// <p className="Ptest">Here for testing purposes</p>
//
// <hr/>

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
