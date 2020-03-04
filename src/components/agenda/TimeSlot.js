import React from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../../css/TimeSlot.css';
import { updateShift } from '../../store/actions/shiftActions'




const TimeSlot = function(props) {

    var { shift, users } = props;
    // date_start = new Date(date_start.seconds*1000);
    console.log(shift);
    // date_end = new Date(date_end.seconds*1000);
    //console.log(date_end);

/*     this.state = {
      hour: props.hour,
      availability: props.availability,
      date: props.date,
      registeredUsers: props.registeredUsers,
    }; */

/*   function handleClick () {
    console.log("checked "+this);
  } */

  function formatLow(date) {
    if(date < 10)
      return `0${date}`
    return date;
  }

  function getShiftTimeSlot() {
    var date_start = new Date(shift.date_start.seconds*1000);
    var date_end = new Date(shift.date_end.seconds*1000);
    
    var hours_start = formatLow(date_start.getHours());
    var minutes_start = formatLow(date_start.getMinutes());    
    var hours_end = formatLow(date_end.getHours());
    var minutes_end = formatLow(date_end.getMinutes());
    return  ` ${hours_start}:${minutes_start} - ${hours_end}:${minutes_end} `;
  }

  function isAvailable() {
    if(shift.users.length < shift.availability_max)
      return "AVAILABLE";
    else 
      return "FULL";
  }

    return (
      <Card className="time-slot-card">
        <CardContent>
          <div className="row">
            <div className="col s6"> { getShiftTimeSlot() } </div>
            <div className="switch">
              <label>
                <input type="checkbox" /> {/*onChange={(e) => this.handleClick(e)} */}
                <span className="lever"></span>
                <span>{isAvailable()}</span>
              </label>
            </div>
            <div className="col s3 registered-list-title">
              Registered :
            </div>
            <div className="col s9 registered-list-btn">
            { shift.users && shift.users.map(function(userShift) {
              console.log(userShift.id)
              console.log(users)
              var res = null;
              users && users.map(function(fbUser) {
                console.log(fbUser.id)
                if(userShift.id === fbUser.id) {
                  console.log(`founded ${fbUser.id}`)
                  return res = <span className="btn btn-floating" key={fbUser.id}>{ fbUser.initials }</span>;
                } else 
                return null;
              })
              return res;
            })}
            </div>
          </div>
        </CardContent>
      </Card>
    )
}

const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.users,
    shifts: state.firestore.ordered.shifts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateShift: () => dispatch(updateShift())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'shifts', orderBy: ['date_start', 'desc']},
    { collection: 'users'},
  ])
)(TimeSlot)