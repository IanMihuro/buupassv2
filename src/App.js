import React from 'react';
import './App.css';
import {Route, NavLink, HashRouter} from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import AboutUs from './containers/AboutUs/AboutUs';
import ContactUs from './containers/ContactUs/ContactUs';
import Blog from './containers/Blog/Blog';


function App() {
  return (
    <HashRouter>
      <div className="App">    
        <ul className="header">
          <li><NavLink to="/">Logo</NavLink></li>
          <li><NavLink to="/about-us">About Us</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li>KES</li>
          <li>My Account</li>
        </ul>          
        <div className="content">
          <Route exact path="/" component={HomePage} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={ContactUs} />
        </div>      
      </div>
    </HashRouter>
  );
}

export default App;
