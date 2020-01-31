import React, { Component } from 'react';
import CheckBox from './CheckBox'

class CheckBoxGroup extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
      {
        this.props.checkboxes.map((checkbox, index) => {
          return (
          <CheckBox
            key={index}
            text={checkbox.text}
            value={checkbox.value}
            checked={checkbox.checked}
            app={this.props.app}/>
          )
        })
      }
      </div>
    );
  }
}

export default CheckBoxGroup;
