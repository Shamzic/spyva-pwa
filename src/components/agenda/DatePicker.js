import React from 'react';
import '../../css/DatePicker.css';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose} from 'redux'
import TimeSlot from './TimeSlot.js'

class DatePicker extends React.Component {

  constructor() {
    super();
    var options = {year: "numeric", month: "numeric", day: "numeric"};

    this.state = {
      isCalendarOpen: false,
      selectedDate: null,
      dateString: new Date().toLocaleString("FR", options),
      date: new Date()
    };

    this.leftDay = this.leftDay.bind(this);
    this.rightDay = this.rightDay.bind(this);
  }

  leftDay() {
    var newDate = this.state.date;
    newDate.setDate(this.state.date.getDate() - 1);
    this.setState({date :  newDate});
  }

  rightDay() {
    var newDate = this.state.date;
    newDate.setDate(this.state.date.getDate() + 1);
    this.setState({date :  newDate});
  }




  render() {
    var day = new Date();
    var options = { day: "numeric"};
    var nextDay_p1 = new Date(day);
    var nextDay_p2 = new Date(day);
    var nextDay_p3 = new Date(day);
    nextDay_p3.setDate(day.getDate() + 3);
    nextDay_p3 =  nextDay_p3.toLocaleString("FR", options);
    nextDay_p2.setDate(day.getDate() + 2);
    nextDay_p2 =  nextDay_p2.toLocaleString("FR", options);
    nextDay_p1.setDate(day.getDate() + 1);
    nextDay_p1 =  nextDay_p1.toLocaleString("FR", options);

    var nextDay_m1 = new Date(day);
    var nextDay_m2 = new Date(day);
    var nextDay_m3 = new Date(day);
    nextDay_m3.setDate(day.getDate() + 3);
    nextDay_m3 =  nextDay_m3.toLocaleString("FR", options);
    nextDay_m2.setDate(day.getDate() + 2);
    nextDay_m2 =  nextDay_m2.toLocaleString("FR", options);
    nextDay_m1.setDate(day.getDate() + 1);
    nextDay_m1 =  nextDay_m1.toLocaleString("FR", options);


    return (
      <div className="date-picker">

        <div className="date-header">
          <div className="row">
            <div className="col s2 offset-s1 chevron">
              <i className="fas fa-chevron-left chevron" onClick={this.leftDay}></i>
            </div>
            <div className="col s6 date-string">{this.state.date.getDate()+"/"+(this.state.date.getMonth()+1)+"/"+this.state.date.getFullYear()}</div>
            <div className="col s2 chevron">
              <i className="fas fa-chevron-right " onClick={this.rightDay}></i>
            </div>
          </div>
        </div>
        <div className="date-row">
          <div className="row">
            <div className="dayChecker col s2 offset-s1">{nextDay_m2}</div>
            <div className="dayChecker col s2">{nextDay_m3}</div>
            <div className="dayChecker col s2">{this.state.date.getDate()}</div>
            <div className="dayChecker col s2">{nextDay_p1}</div>
            <div className="dayChecker col s2">{nextDay_p2}</div>
          </div>
        </div>

        <div className="time-slot-column">
          <TimeSlot className="time-slot-component" hour={'11:30-12:30'}></TimeSlot>
          <TimeSlot className="time-slot-component" hour={'12:30-13:30'}></TimeSlot>
          <TimeSlot className="time-slot-component" hour={'13:30-14:30'}></TimeSlot>
          <TimeSlot className="time-slot-component" hour={'18:00-19:00'}></TimeSlot>
          <TimeSlot className="time-slot-component" hour={'19:00-20:00'}></TimeSlot>
          <TimeSlot className="time-slot-component" hour={'20:00-21:00'}></TimeSlot>
          <TimeSlot className="time-slot-component" hour={'21:00-22:00'}></TimeSlot>
          <TimeSlot className="time-slot-component" hour={'22:00-23:00'}></TimeSlot>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    shift: state.firestore.ordered.shift,
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'shift'}
  ])
)(DatePicker);
