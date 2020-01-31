import React, { Component } from 'react';

class Select extends Component {

  constructor(props){
    super(props);
  }

  handlerChange(event) {
    console.log(event.target.value);
    this.props.onSelect(event.target.value);
  }
  render() {
    return (
      <div>
        <p> Test </p>
        <select style={{display: 'block'}} name="" id="" onChange={this.handlerChange.bind(this)} defaultValue={this.props.default}>
        {
          this.props.options.map(function(option,index) {
            return <option key={index+1} value={index+1}>{option}</option>
          })
        }
        </select>

      </div>
    );
  }

}

export default Select;
