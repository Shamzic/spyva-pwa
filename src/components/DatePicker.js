import React from 'react';
import '../css/DatePicker.css';

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
          <i className="fas fa-chevron-left chevron" onClick={this.leftDay}></i>
          <p>{this.state.date.getDate()+"/"+(this.state.date.getMonth()+1)+"/"+this.state.date.getFullYear()}</p>
          <i className="fas fa-chevron-right chevron" onClick={this.rightDay}></i>
        </div>
        <div className="date-row">

          <div className="dayChecker">{nextDay_m1}</div>
          <div className="dayChecker">{nextDay_m2}</div>
          <div className="dayChecker">{nextDay_m3}</div>


          <div className="dayChecker">{this.state.date.getDate()}</div>


            <div className="dayChecker">{nextDay_p1}</div>
            <div className="dayChecker">{nextDay_p2}</div>
            <div className="dayChecker">{nextDay_p3}</div>
        </div>
        <div className="time-slot-column">
          <TimeSlot></TimeSlot>
          <TimeSlot></TimeSlot>
          <TimeSlot></TimeSlot>
        </div>
      </div>
    );
  }
}


export default DatePicker;
