import React, { Component } from 'react';

class TextArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value : props.value,
    }
  }

  handlerChange(event) {
    this.setState({value: event.target.value}) // own state
    this.props.app.setState({value: event.target.value}); // state of the parent
  }

  handlerFocus(event) {
    this.setState({value: ""})
  }

  render() {
    return (
      <textarea cols={this.props.cols}
      rows={this.props.rows}
      value={this.state.value}
      onChange={this.handlerChange.bind(this)}
      onFocus={this.handlerFocus.bind(this)}/>
    );
  }

}

export default TextArea;
