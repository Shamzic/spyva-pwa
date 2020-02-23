import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import DatePicker2 from '../agenda/DatePicker2'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect} from 'react-router-dom'

class Dashboard extends Component {

  render() {
    
    var { projects, shifts, auth, notifications } = this.props;
    console.log(this.props);
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <DatePicker2 shifts={shifts}/>
            <ProjectList projects={projects}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state.firestore.ordered.shifts);
  return {
    projects: state.firestore.ordered.projects,
    shifts: state.firestore.ordered.shifts,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'shifts', orderBy: ['date_start', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']},
  ])
)(Dashboard)
