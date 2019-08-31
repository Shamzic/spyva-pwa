import React from 'react';
import './css/App.css';
import firebaseConfig from './config.js';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'

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
          <NavBar/>
          <Switch>
            <Route path="/" component={ Dashboard }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
