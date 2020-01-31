import React, { Component } from 'react';

class Radio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false,
    }
  }

  handlerChange(event) {
    console.log(event.target.value);

    var radios = this.props.app.state.radios;
    radios = radios.map((radio, index) => {
      if(radio.value == event.target.value)
        radio.checked = true;
      else
        radio.checked = false;
      return radio;
    })
    this.props.app.setState({radios: radios});
  }

  componentWillReceiveProps(newProps) {
    this.setState({checked: newProps.checked});
  }

  render() {
    return (
      <div>
      {
        <label>
          <span>{this.props.text}</span>
          <input type="radio"
            value={this.props.value}
            name={this.props.name}
            style={{opacity: '1'}}
            checked={this.state.checked}
            onChange={this.handlerChange.bind(this)}
          />
          <br/>
        </label>
      }
      </div>
    );
  }

}

export default Radio;
