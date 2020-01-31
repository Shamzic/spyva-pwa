import React, { Component } from 'react';
import RadioGroup from './RadioGroup';

class RadioGroupWithButton extends Component {

  constructor(props) {
    super(props);
  }

  handlerValid(event){
    var value;
    this.props.radios.forEach(function(radio, index) {
      if(radio.checked)
        value = radio.value;
    })
    this.props.onValid(value);
  }
  render() {
    return (
      <div>
        <RadioGroup radios={this.props.radios} name={this.props.name}> </RadioGroup>
        <button onClick={this.handlerValid.bind(this)}>VALIDER</button>
      </div>
    );
  }

}

export default RadioGroupWithButton;
