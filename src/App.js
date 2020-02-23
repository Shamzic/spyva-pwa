import React from 'react';
import './css/App.css';
// import firebaseConfig from './config.js';
// import * as firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import DatePicker from './components/agenda/DatePicker'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      developers: []
    }
  }

  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
      <div className="App">
          <React.Fragment>
            <NavBar/>
            <Switch>
              <Route path="/picktest" component={ DatePicker }/>
              <Route path="/project/:id" component={ ProjectDetails }/>
              <Route exact path="/signin" component={ SignIn }/>
              <Route exact path="/signUp" component={ SignUp }/>
              <Route exact path="/createProject" component={ CreateProject }/>

              <Route exact path="/" component={ Dashboard }/>

              <Route render={() => <h2 style={{textAlign: "center"}}>Cette page  n'existe pas, GROS ZGEG!</h2>}/>

            </Switch>
        </React.Fragment> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
