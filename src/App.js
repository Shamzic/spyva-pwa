import React from 'react';
import './css/App.css';
import SignIn from './components/SignIn.js';
import firebaseConfig from './config.js';
import * as firebase from 'firebase/app';
import 'firebase/auth';


class App extends React.Component {

  constructor(props){
    super(props);
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    this.state = {
      developers: []
    }
  }

  render() {
    return (
      <div className="App">
        <SignIn/>
      </div>
    );
  }
}

export default App;
