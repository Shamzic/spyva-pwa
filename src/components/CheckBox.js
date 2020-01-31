import React, { Component } from 'react';

class CheckBox extends Component {

  constructor(props) {
    super(props);

    this.state= {
      checked: props.checked || false,
    }
    console.log(this.state.checked);
  }

  handlerChange(event) {

    this.setState({checked : event.target.checked})

    var checkboxes = this.props.app.state.checkboxes.map(function(checkbox, index) {
      if(checkbox.value == event.target.value)
        checkbox.checked = event.target.checked;
      return checkbox;
    });
    this.props.app.setState({checkboxes: checkboxes});
  }


  render() {
    return (
      <label>
        <span>{this.props.text}</span>
        <input type="checkbox"
        value={this.props.value}
        checked={this.state.checked}
        onChange={this.handlerChange.bind(this)}
        style={{opacity: 1}}/>
        <br/>
      </label>
    );
  }

}

export default CheckBox;
