import React, { Component } from 'react';
import Login from './Login'
import Portfolio from './Portfolio';
//import Searchbar from './Searchbar';
//import '../styles.scss';
//import React from 'react';
import '../styles/portfolio.scss';
import Header from './Header';
import Navbar from './Navbar';
import Upload from './upload'
import gallery from './gallery'
import Searchbar from './Searchbar';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Searchbar/>
        <Navbar />
        {/* <Gallery /> */}
       

      </div>
    )
  }
}
export default App;

// const App = () => {
//   return <div>
//     <Header />
//   </div>;
// };

// export default App;




