import React, { Component } from 'react';
import Login from './Login'
import '../styles.sass'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Login />
      </div>
    )
  }
}

export default App;