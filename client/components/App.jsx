import React, { Component, useState, useEffect  } from 'react';
import '../styles/portfolio.scss';
import Gallery from './Gallery.jsx';
export default function App() {
  const [user, setUser] = useState({});
  console.log(user);
  return (
    <div>
      <Gallery />
    </div>
  )

}


