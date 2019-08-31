import React from 'react';
import './css/App.css';
import SignIn from './components/SignIn.js';
import DatePicker from './components/DatePicker.js';
import firebaseConfig from './config.js';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter } from 'react-router-dom'


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
      <BrowserRouter>
        <div className="App">
          <h1>Spywa</h1>
          <SignIn/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
