import React, { Component, useState, useEffect } from 'react';
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

function App() {
  const [user, setUser] = useState({});
  const [portfolio_id, setPortfolio] = useState('');
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup"element={<Signup />} ></Route>
        <Route path="/portfolio"element={<Portfolio id={portfolio_id}/>} ></Route>
        <Route exact path="/" element={<Gallery setPortfolio={setPortfolio}/>} ></Route>
      </Routes>
    </Router>
  )
}

export default App;
