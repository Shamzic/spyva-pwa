import React from 'react'
import Element from './Element'


class ListeElement extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return this.props.elems.map((elem, index) => {
      var { ukey, txt } = elem;
      return <Element key={ukey} ukey={ukey} txt={txt}/>;
    })
  }
}

export default ListeElement;
