import React, { Component, useState, useEffect  } from 'react';
import Login from './Login'
import Portfolio from './Portfolio';
import '../styles.scss'
import Upload from './upload'


function App() {
  const [user, setUser] = useState({});

  return (
    <div>
      <Login setUser={setUser}/>
    </div>
  )

}

export default App;