import React, { Component } from 'react';
import TextArea from './TextArea'

class TextAreaWithButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value : this.props.value,
    }
  }

  handlerValid(event) {
    this.props.onValid(this.state.value);
    console.log("Validation");
  }

  render() {
    return (
      <div>
        <TextArea cols={this.props.cols} rows={this.props.rows} value={this.state.value} app={this}/>
        <br></br>
        <button onClick={this.handlerValid.bind(this)}>Valider</button>
      </div>
    );
  }

}

export default TextAreaWithButton;
