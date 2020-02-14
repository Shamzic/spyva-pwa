import * as ACTIONS from "../../components/actions_types.js"

const initState = {
    elems: [],
    revert: false,
    find : {
        tag: "",
        elems: []
    },
    time : {
        min : 2,
        sec : 0
    }
  };

  
  function decrTime({ min, sec}) {
    sec = sec - 1;
    if(sec < 0) {
      min = min - 1;
      if(min < 0) {
          sec = 0
          min = 0;
      } else {
          sec = 59;
      }
    }
    return { min, sec};
}
  
  export default function testReducer (state = initState, action) {
    var newState ;
    var elems = state.elems;
    var ukey = action.ukey;
    var txt = action.txt;

    if(action.type === ACTIONS.ADD_ELEM) {

        elems.push({txt, ukey});
        elems = elems.map(function(elem) {
            return elem;
        });
        newState = Object.assign({}, state, {elems: elems});
    }
    else if (action.type ===  ACTIONS.REMOVE_ELEM) {
        console.log("remove elm", ukey);
        elems = elems.filter(function(elem) {
            if(elem.ukey === ukey) return false;
            else return true;
        });
        newState = Object.assign({}, state, {elems: elems});
        console.log(newState);
    }
    else if (action.type === ACTIONS.MODIFY_ELEM) {
        console.log(action)
        elems = elems.map(function(elem, i) {
            if(elem.ukey === ukey) return {txt,ukey};
            else return elem;
        });
        newState = Object.assign({}, state, {elems: elems});
    }
    else if (action.type === ACTIONS.REVERT_LIST) {
        var revert = state.revert;
        elems.reverse();
        elems = elems.map(function(elem) {
            return elem;
        });
        newState = Object.assign({}, state, {elems: elems, revert: !revert});
    }
    else if (action.type === ACTIONS.FIND_TAG) {
        var tag = action.tag;
        elems = elems.filter(function(elem, i) {
            if(elem.indexOf(tag) >= 0) return true;
            else return false;
        })
        newState = Object.assign({}, state, {elems: elems, tag: tag});
    } else if(action.type === ACTIONS.DECR_TIME) {
        console.log(action)
        var time = decrTime(state.time);
        newState = { ...state, time};
    } 
    else {
        // action inconnue
        newState = state;
    }
    return newState;
}