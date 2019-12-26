import React from 'react'
import ListeElement from './ListeElement'


class Test extends React.Component {

  constructor(props) {
    super(props);
    {/* this.state = { min:props.min, sec: props.sec };
    this.timer = setInterval(() => {
      var newState = this.decrTime(this.state);
      console.log(this.state);
      this.setState({min : newState.min, sec: newState.sec});
    }, 1000); */}
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


  decrTime({ min, sec }) {
    sec = sec - 1;
    if(sec < 0) {
      min = min - 1;
      if(min < 0) {
        min = 0;
        sec = 0;
      } else {
        sec = 59;
      }
    }
    return { min, sec };
  }
  formatTime({ min, sec }) {
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;
    return `${min}:${sec}`;
  }

  render() {
  {/*  if(this.state.min === 0 && this.state.sec === 0) {
      clearInterval(this.timer);
      return (<div>Chrono écoulé !</div>)
    }
    return (<div>{this.formatTime(this.state)}</div>) */}
    return (
    <div>
      <button onClick={this.insertElem.bind(this)}>Insérer</button>
      <ListeElement elems={this.state.elems}></ListeElement>
    </div>)
  }
}

export default Test;
