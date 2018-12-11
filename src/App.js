import React, { Component } from 'react';
import './App.css';
import { askForPermissioToReceiveNotifications } from './pushnotification';


class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>React Firebase Notifications by ChrisVz</h1>
        <button onClick={askForPermissioToReceiveNotifications} >
      Click here to receive notifications
    </button>
      </div>
    );
  }
}

export default App;
