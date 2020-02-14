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

import Test from './components/Test'
import {connect } from 'react-redux';
import { CssBaseline } from '@material-ui/core';

import * as ACTIONS from './store/actions/actions'

class App extends React.Component {

  constructor(props){
    super(props);
    // const firebaseApp = firebase.initializeApp(firebaseConfig);
    this.state = {
      developers: [],
      test: false,
    }
    console.log(this.props);
  }

  componentDidMount() {
/*     setInterval(() => {
      var time = this.props.time;
      this.props.decr_time(time);
    }, 1000); */
  }

  
  
  formatTime ({min, sec}){
    if( min < 10 ) min = "0" + min;
    if( sec < 10 ) sec = "0" + sec;
    return `${min}:${sec}`;
  } 


  render() {
     var time = this.formatTime(this.props.time);
    console.log(this.props)
    return (
      <BrowserRouter>
      <div className="App">
        { this.state.test ? <Test min={0} sec={5}></Test> :
          <React.Fragment>
            <NavBar/>
            <Switch>
              <Route path="/picktest" component={ DatePicker }/>
              <Route path="/project/:id" component={ ProjectDetails }/>
              <Route exact path="/signin" component={ SignIn }/>
              <Route exact path="/signUp" component={ SignUp }/>
              <Route exact path="/createProject" component={ CreateProject }/>

              <Route exact path="/" component={ Dashboard }/>
              <Route exact path="/test" component={ Test }/>

              <Route render={() => <h2 style={{textAlign: "center"}}>Cette page  n'existe pas, GROS ZGEG!</h2>}/>

            </Switch>
        </React.Fragment> }
{/*         <div>TIME : { time }</div>  */}
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    time: state.reducers.time
  }
}

function mapDispatchToProps(dispatch) {
  return {
    decr_time : function({min, sec}) {
      var action = ACTIONS.decr_time({ min, sec});
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
