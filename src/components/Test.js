import React from 'react'
import ListeElement from './ListeElement'


class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      elems : [],
    };
  }

  getUniqueKey() {
    var key = Math.random() + "";
    return key;
  }

  insertElem() {
    var elems = this.state.elems;
    var txt = "Element" + (elems.length + 1);
    var ukey = this.getUniqueKey();
    var elem = { txt: txt, ukey: ukey};
    elems.push(elem);
    this.setState({elems: elems});
  }


    removeElem(objectElem) {
      console.log(objectElem);
      var elems = this.state.elems;
      elems = elems.filter(function(elem){
        if(objectElem.ukey != elem.ukey) {
          return true;
        }
      });
      this.setState({elems: elems});
    }


  render() {
    return (
      <div>
        <button onClick={this.insertElem.bind(this)}>Insérer</button>
        <ListeElement elems={this.state.elems} app={this}></ListeElement>
      </div>
    )
  }
}

export default Test;
