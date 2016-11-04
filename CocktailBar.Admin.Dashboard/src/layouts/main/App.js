import React, { Component } from 'react';
import logo from './../../logo.svg';

import Navigation from './../../components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Navigation />
        </div>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
