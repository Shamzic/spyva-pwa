import React from 'react'

class Element extends React.Component {

  constructor(props) {
    super(props);
    this.ukey = props.ukey;
    this.state = {
      style: {},
      removed: false
    };
  }

  mouseOver() {
    var style = { color : "red", fontStyle: "italic"};
    this.setState({style: style});
  }

  mouseOut() {
    var style = { color : "", fontStyle: ""};
    this.setState({style: style});
  }

  handlerRemoveElem() {
    this.props.app.removeElem(this)
  }

  render() {
    return (
      this.state.removed ? null :
      <li style={this.state.style}
          onMouseOver={this.mouseOver.bind(this)}
          onMouseOut={this.mouseOut.bind(this)}>
        <span>
          {this.props.txt}
        </span>
        <button onClick={this.handlerRemoveElem.bind(this)}
                style={{margin: '10px', fontSize: '10px'}}>
          Supprimer
        </button>
      </li>
    )
  }
}

export default Element;
