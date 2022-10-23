import React, { Component } from 'react';
import Login from './Login'
import Portfolio from './Portfolio';
import '../styles.scss'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

export default App;