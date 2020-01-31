import React, { Component } from 'react';
import CheckBoxGroup from './CheckBoxGroup'

class CheckBoxGroupWithButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxes: props.checkboxes,
    }
  }

  handlerValid(event) {
    this.props.onValid(this.state.checkboxes);
  }

  render() {
    return (
      <div>
          <CheckBoxGroup checkboxes={this.props.checkboxes} app={this}/>
          <button onClick={this.handlerValid.bind(this)}>Valider</button>
      </div>
    );
  }
}

export default CheckBoxGroupWithButton;
