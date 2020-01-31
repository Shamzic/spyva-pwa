import React, { Component } from 'react';
import Radio from './Radio';

class RadioGroup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      radios: props.radios || [],
    }
  }

  render() {
    return (
      <div>
      {
        this.state.radios.map((radio, index) => {
          return (
            <Radio
              key={index}
              text={radio.text}
              value={radio.value}
              name ={this.props.name}
              checked={radio.checked}
              app={this}/>
          )
        })
      }
      </div>
    )
  }

}

export default RadioGroup;
