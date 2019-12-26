import React from 'react'

class Element extends React.Component {

  constructor(props) {
    super(props);
    this.ukey = props.ukey;
  }

  render() {
    return <li>{this.props.txt}</li>
  }
}

export default Element;
