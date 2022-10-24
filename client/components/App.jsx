import React, { Component, useState, useEffect  } from 'react';
import Login from './Login'
import Portfolio from './Portfolio';
import '../styles/portfolio.scss';
<<<<<<< HEAD
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

=======
import Header from './Header';

import Signup from './Signup'
import Upload from './upload';
import Navbar from './Navbar';


function App() {
  const [user, setUser] = useState({});
  console.log(user);
  return (
    <div>
      <Header setUser={setUser}/>
    </div>
  )

}
>>>>>>> dev

