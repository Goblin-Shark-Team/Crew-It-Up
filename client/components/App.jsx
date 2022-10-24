import React, { Component, useState, useEffect  } from 'react';
import '../styles/portfolio.scss';
import Gallery from './Gallery.jsx';
import Login from './Login';
import Signup from './Signup';
import Portfolio from './Portfolio';

import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState({});
  console.log(user);
  return (

    <Router>
      <Routes>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup"element={<Signup />} ></Route>
        <Route path="/portfolio/:id"element={<Portfolio />} ></Route>
        <Route exact path="/" element={<Gallery />} ></Route>
      </Routes>
    </Router>
  )
}


