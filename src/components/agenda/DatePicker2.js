import React from 'react';
import '../../css/DatePicker.css';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose} from 'redux'
import TimeSlot from './TimeSlot.js'
import CreateShift from '../shifts/CreateShift'

const DatePicker2 = function(props) {

  const { shifts } = props;
  console.log(shifts)

    return (
      <div className="date-picker">
        <div className="row">
          <div className="time-slot-column">
          {shifts && shifts.map(shift => {
            return (
                <TimeSlot className="time-slot-component" shift={shift}></TimeSlot>
              )
          })}
          <CreateShift></CreateShift>
          </div>
        </div>
      </div>
    );
  }

const mapStateToProps = (state) => {
  console.log(state.firestore.ordered.shifts);
  return {
    shifts: state.firestore.ordered.shifts,
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'shifts', orderBy: ['date_start', 'asc']},
  ])
)(DatePicker2);
