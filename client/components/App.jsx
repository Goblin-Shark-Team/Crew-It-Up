import React, { Component } from 'react';
import Login from './Login'
import Portfolio from './Portfolio';
import '../styles.scss'
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