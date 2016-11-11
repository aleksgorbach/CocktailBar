import React, { Component } from 'react';

import Sidebar from './../../containers/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="fullheight">
        <div className="header">
        <img className="logo" src="img/logo.svg" alt="logo"/>
          <h1>Cocktail Bar Game Dashboard</h1>
        </div>
        <div className="columns fullheight">
          <div className="column is-2">
            <Sidebar />
          </div>
          <div className="main column is-10">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
