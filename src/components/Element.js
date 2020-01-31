import React from 'react'

class Element extends React.Component {

  constructor(props) {
    super(props);
    this.ukey = props.ukey;
    this.state = {
      txt: this.props.txt,
      style: { ...this.props.style},
      removed: false,
      modifyOn: false
    };
  }

  mouseOver() {
    var style = { ...this.state.style, color : "red", fontStyle: "italic"};
    this.setState({style: style});
  }

  mouseOut() {
    var style = { ...this.state.style, color : "", fontStyle: ""};
    this.setState({style: style});
  }

  handlerRemoveElem() {
    this.props.app.removeElem(this)
  }

  modifyElem() {
    this.setState({modifyOn: true});
  }

  handlerChangeElem(event) {
    console.log(event.target.value);
    this.setState({txt: event.target.value});
  }

  handlerKeyPress(event) {
    if(event.charCode == 13 ) { // touche entrée
      this.setState({ modifyOn: false});
      this.props.app.modifyElem(this, event.target.value);
    }
  }

  componentWillReceiveProps() {
    this.setState({ style: this.props.style});
  }

  render() {
    return (
      this.state.removed ? null :
      <li style={this.state.style}
          onMouseOver={this.mouseOver.bind(this)}
          onMouseOut={this.mouseOut.bind(this)}
          onDoubleClick={this.modifyElem.bind(this)}>
        {
          this.state.modifyOn ?
          <input type="text" value={this.state.txt}
            onChange={this.handlerChangeElem.bind(this)}
            onKeyPress={this.handlerKeyPress.bind(this)}/>:
          <span>
            {this.state.txt}
          </span>
        }

        <button onClick={this.handlerRemoveElem.bind(this)}
                style={{margin: '10px', fontSize: '10px'}}>
          Supprimer
        </button>
      </li>
    )
  }
}

export default Element;
