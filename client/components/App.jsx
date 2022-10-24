import React, { Component, useState, useEffect  } from 'react';
import Login from './Login'
import Portfolio from './Portfolio';
// import Signup from './signup.js'
//import Searchbar from './Searchbar';
import '../styles.scss';
import Header from './Header';
import Signup from './Signup'
import SliderBody from './SliderBody.jsx';
import Upload from './upload.js'


function App() {
  const [user, setUser] = useState({});
  console.log(user);
  return (
    <div>
      {/* <Upload /> */}
      {/* <Login /> */}
      {/* <Signup setUser={setUser}/>  */}
      <Portfolio />
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




