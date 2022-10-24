import React, { Component, useState, useEffect  } from 'react';
import Login from './Login'
import Portfolio from './Portfolio';
import Signup from './signup.js'
//import Searchbar from './Searchbar';
import '../styles.scss';
import Header from './Header';


function App() {
  const [user, setUser] = useState({});

  return (
    <div>
      <Signup />
      {/* <Login setUser={setUser}/> */}
    </div>
  )
}
export default App;

// const App = () => {
//   return <div>
//     <Header />
//   </div>;
// };

// export default App;




