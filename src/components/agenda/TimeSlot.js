import React from 'react'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import '../../css/TimeSlot.css';

class TimeSlot extends React.Component {
  render() {
    return (
      <Card className="time-slot-card">
        <CardContent>
          <div className="row">
            <div class="col s6">18:00-19:00</div>
            <div class="switch">
              <label>
                <input type="checkbox"/>
                <span class="lever"></span>
                <span>Available</span>
              </label>
            </div>
            <div class="col s4 registered-list-title">Users registered :</div>
            <div class="col s8 registered-list-btn">
              <btn className="btn btn-floating">HP</btn>
              <btn className="btn btn-floating">YP</btn>
              <btn className="btn btn-floating">PF</btn>
              <btn className="btn btn-floating">VR</btn>
              <btn className="btn btn-floating">HS</btn>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default TimeSlot;
