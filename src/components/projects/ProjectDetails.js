import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect} from 'react-router-dom'
import moment from 'moment'
import '../../css/ProjectDetails.css'

import { deleteProject } from '../../store/actions/projectActions'


const ProjectDetails = (props) => {

  const { project, auth, projectID } = props;

  function deleteProject (e) {
      e.preventDefault()
      // console.log(this.state)
      props.deleteProject(project, projectID)
      props.history.push('/');
  }
  if(!auth.uid)
    return <Redirect to='/signin'/>

  if (project) {

    return (
      <div className="project-details container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title"> {project.title}</span>
            <div className="delete-button">
              <a className="btn-floating red" onClick={deleteProject}><i className="material-icons">close</i></a>
            </div>
            <p className="project-content">{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate().toString()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(id);
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    projectID: id,
    auth: state.firebase.auth
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (project, projectID) => dispatch(deleteProject(project, projectID))
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'projects'}]))(ProjectDetails)
