import React, { Component, useState, useEffect  } from 'react';
import Login from './Login'
import Portfolio from './Portfolio';
import '../styles/portfolio.scss';
import Gallery from './Gallery.jsx';

function App() {
  const [user, setUser] = useState({});
  console.log(user);
  return (
    <div>
      <Gallery />
    </div>
  )
};

export default App;


