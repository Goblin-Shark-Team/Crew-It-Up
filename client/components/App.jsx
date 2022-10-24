import React, { Component, useState, useEffect  } from 'react';
import Login from './Login'
import Portfolio from './Portfolio';
//import Searchbar from './Searchbar';
//import '../styles.scss';
//import React from 'react';
import '../styles/portfolio.scss';
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
export default App;

// const App = () => {
//   return <div>
//     <Header />
//   </div>;
// };

// export default App;




