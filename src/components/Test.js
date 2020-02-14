

import React from 'react'
import ListeElement from './ListeElement'
import TextAreaWithButton from './TextAreaWithButton'
import Select from './Select'
import RadioGroup from './RadioGroup'
import RadioGroupWithButton from './RadioGroupWithButton'
import CheckBoxGroupWithButton from './CheckBoxGroupWithButton'
import Elem from './Elem'
import { createStore } from "redux"
import reducer from "../store/reducers/reducers"
import ButtonAdd from './ButtonAdd'
import ConnectedListeElements from './ConnectedListeElements'
import ButtonRevert from './ButtonRevert'

import { connect} from 'react-redux'

import * as ACTIONS from '../store/actions/actions'

class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      elems : [],
      style: { fontSize: this.getFontSize()},
      value: "1"
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
    elems = elems.filter(elem => elem.ukey != objectElem.ukey);
    this.setState({elems: elems});
  }

  modifyElem(objectElem, newValue) {
    console.log(objectElem);
    console.log(newValue);
    var elems = this.state.elems;
    elems = elems.map(function(elem) {
      var {txt, ukey} = elem;
      if(objectElem.ukey === ukey) {
        elem.txt = newValue;
      }
      return elem;
    });
    this.setState({elems: elems});
  }

  getFontSize () {
    var fontSize;
    if(window.innerHeight < 150) fontSize = 12;
    else if (window.innerHeight < 200) fontSize = 13;
    else if (window.innerHeight < 250) fontSize = 15;
    else if (window.innerHeight < 300) fontSize = 16;
    else if (window.innerHeight < 350) fontSize = 18;
    else if (window.innerHeight < 400) fontSize = 20;
    else if (window.innerHeight < 450) fontSize = 22;
    else if (window.innerHeight < 500) fontSize = 24;
    else if (window.innerHeight < 550) fontSize = 30;
    else fontSize = 40;
    return fontSize + "px";
  }

  handlerResize(event) {
    var fontSize = this.getFontSize();
    this.setState({style : {fontSize: fontSize }});
    console.log("resize ", fontSize);
  }


  componentWillUnmout() {
    window.removeEventListener("resize", this.handlerResize);
  }

  validTextArea(text) {
    console.log(text);
  }

  onSelectElement(value) {
    console.log(value);
  }

  validRadio(value) {
    console.log(value);
  }

  selectBox(checkbox) {
    console.log("select box"+checkbox);
  }

 unSelectbox(checkbox) {
    console.log("unselect box"+checkbox);
  }

  validCheckboxes(checkboxes) {
    console.log(checkboxes);
  }

  componentDidMount() {

    const $ = window.$;
    window.addEventListener("resize", this.handlerResize.bind(this));
    console.log(this.refs);
  }

  render() {

    var elems = [
      "Element 1",
      "Element 2",
      "Element 3",
      "Element 4",
    ];
    
    elems.forEach((txt) => {
      this.props.add_elem(txt);
    });
    
    return (
      <div className="radio">
          <ButtonAdd text="Ajouter"></ButtonAdd> &nbsp;&nbsp;
          <ButtonRevert text="Inverser"></ButtonRevert>
          <ListeElement elems={elems} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add_elem : function(txt) {
      var action = ACTIONS.add_elem(txt);
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(Test);
