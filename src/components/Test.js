import React from 'react'
import ListeElement from './ListeElement'
import TextAreaWithButton from './TextAreaWithButton'
import Select from './Select'
import RadioGroup from './RadioGroup'
import RadioGroupWithButton from './RadioGroupWithButton'
import CheckBoxGroupWithButton from './CheckBoxGroupWithButton'


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
    {/*elems = elems.filter(function(elem){
      if(objectElem.ukey != elem.ukey) {
        return true;
      }
    });*/}

    elems = elems.filter(elem => elem.ukey != objectElem.ukey);



    this.setState({elems: elems});
  }

  modifyElem(objectElem, newValue) {
    console.log(objectElem);
    console.log(newValue);
    var elems = this.state.elems;
    elems = elems.map(function(elem) {
      var {txt, ukey} = elem;
      if(objectElem.ukey == ukey) {
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

  componentDidMount() {
    window.addEventListener("resize", this.handlerResize.bind(this));
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

  render() {

    var radios = [
      {value: 1, text: "radio1"},
      {value: 2, text: "radio2"},
      {value: 3, text: "radio3", checked:  true},
      {value: 4, text: "radio4"}
    ];

    var checkboxes = [
      {value: 1, text: "toto", checked: false},
      {value: 2, text: "tata", checked: true},
      {value: 3, text: "tutu", checked: false},      
    ];


    return (
      <div className="radio">
        {/*<button onClick={this.insertElem.bind(this)}>Insérer</button>*/}
        {/*<ListeElement elems={this.state.elems} app={this} style={this.state.style}></ListeElement>*/}
        {/*}<TextAreaWithButton cols={40} rows={10} value="Tapez votre texte ici"  focus={false} onValid={this.validTextArea}/>*/}
        {/*<Select options={["element 1", "element 2", "element 3"]} onSelect={this.onSelectElement} default="2">*/}
        {/*}<RadioGroupWithButton radios={radios} name="group1" onValid={this.validRadio}/>*/}
        <CheckBoxGroupWithButton
          checkboxes={checkboxes}
          onValid={this.validCheckboxes}/>
        {/*</Select>*/}
      </div>
    )
  }
}

export default Test;
