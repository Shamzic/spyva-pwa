import React from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import '../../css/TimeSlot.css';




class TimeSlot extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hour: props.hour,
      availability: props.availability,
      date: props.date,
      registeredUsers: props.registeredUsers,
    };
  }

  handleClick = () => {
    console.log("checked "+this);
  }


    render() {
    return (
      <Card className="time-slot-card">
        <CardContent>
          <div className="row">
            <div className="col s6">{this.state.hour}</div>
            <div className="switch">
              <label>
                <input type="checkbox" onChange={(e) => this.handleClick(e)}/>
                <span className="lever"></span>
                <span>{this.state.availability}</span>
              </label>
            </div>
            <div className="col s4 registered-list-title">
              Users registered :
            </div>
            <div className="col s8 registered-list-btn">
              <span className="btn btn-floating">HP</span>
              <span className="btn btn-floating">YP</span>
              <span className="btn btn-floating">PF</span>
              <span className="btn btn-floating">VR</span>
              <span className="btn btn-floating">HS</span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default TimeSlot;
