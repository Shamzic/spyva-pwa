import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - { id } </span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste earum sunt totam nulla consectetur pariatur, excepturi, corrupti, assumenda perspiciatis aperiam fugit. Natus iure illum, quos ad voluptatibus. Neque, veniam, quasi.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Shamzic</div>
          <div>2nd September, 2 am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
