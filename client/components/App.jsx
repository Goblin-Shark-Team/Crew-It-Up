import React, { Component } from 'react';
import Login from './Login'
import Portfolio from './Portfolio';
//import Searchbar from './Searchbar';
//import '../styles.scss';
//import React from 'react';
import '../styles/portfolio.scss';
import Header from './Header';

import Upload from './upload'
 
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        
        <Upload />

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




