import React from 'react';
import '../css/DatePicker.css';

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
    return (
      <div className="date-picker">
        <div className="date-header">
          <i className="fas fa-chevron-left chevron" onClick={this.leftDay}></i>
          <p>{this.state.date.getDate()+"/"+(this.state.date.getMonth()+1)+"/"+this.state.date.getFullYear()}</p>
          <i className="fas fa-chevron-right chevron" onClick={this.rightDay}></i>
        </div>
        <div className="date-row">
          <div className="dayChecker">{this.state.date.getDate()-3}</div>
          <div className="dayChecker">{this.state.date.getDate()-2}</div>
          <div className="dayChecker">{this.state.date.getDate()-1}</div>
          <div className="dayChecker">{this.state.date.getDate()}</div>
          <div className="dayChecker">{this.state.date.getDate()+1}</div>
          <div className="dayChecker">{this.state.date.getDate()+2}</div>
          <div className="dayChecker">{this.state.date.getDate()+3}</div>
        </div>
      </div>
    );
  }
}


export default DatePicker;
